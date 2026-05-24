import { ChatPaginationState, ChatQuoteContextState, ChatRouteParams, MessageItem } from '../models/ChatModels';
import { UserProfile } from '../models/MeModels';
import { MessageService, SentTextMessageReceipt } from '../services/MessageService';
import { UserService } from '../services/UserService';
import { WebSocketManager } from '../services/WebSocketManager';
import { WebSocketDraftUpdate, WebSocketEvent, WebSocketEventType } from '../models/WebSocketModels';

export class ChatViewModel {
  private readonly messageService = new MessageService();
  private readonly userService = new UserService();
  private readonly webSocketManager = WebSocketManager.getInstance();
  private mainMessages: MessageItem[] = [];
  private quoteMessages: MessageItem[] = [];
  private mainPagination: ChatPaginationState = new ChatPaginationState();
  private quotePagination: ChatPaginationState = new ChatPaginationState();
  private currentUserProfile: UserProfile | undefined = undefined;
  private readonly onSocketEvent = (event: WebSocketEvent): void => {
    this.handleSocketEvent(event);
  };

  loading: boolean = false;
  errorMessage: string = '';
  title: string = '';
  chatId: string = '';
  chatType: number = 0;
  messages: MessageItem[] = [];
  pagination: ChatPaginationState = new ChatPaginationState();
  quoteContext: ChatQuoteContextState = new ChatQuoteContextState();
  initialLatestMsgSeq: number = 0;
  remoteDraft: string = '';
  onMessagesUpdated: (() => void) | undefined = undefined;
  onMessagesAppended: ((messages: MessageItem[]) => void) | undefined = undefined;
  onRemoteDraftUpdated: (() => void) | undefined = undefined;

  bindRoute(params: ChatRouteParams): void {
    this.chatId = params.chatId;
    this.chatType = params.chatType;
    this.title = params.title;
    this.webSocketManager.addEventListener(this.onSocketEvent);
    void this.ensureRealtimeReady();
  }

  async loadMessages(): Promise<void> {
    if (this.chatId.length === 0) {
      this.errorMessage = 'chat id is empty';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    try {
      const loaded: MessageItem[] = await this.messageService.listMessageBySeq(this.chatId, this.chatType, 0);
      this.mainMessages = this.normalizeForTimeline(loaded);
      this.initialLatestMsgSeq = this.mainMessages.length > 0 ? this.mainMessages[this.mainMessages.length - 1].msgSeq : 0;
      this.refreshPaginationState(this.mainMessages, this.mainPagination);
      this.quoteMessages = [];
      this.quotePagination = new ChatPaginationState();
      this.quoteContext.reset();
      this.applyMainMessages();
    } catch (error) {
      const err: Error = error as Error;
      this.mainMessages = [];
      this.quoteMessages = [];
      this.messages = [];
      this.mainPagination = new ChatPaginationState();
      this.quotePagination = new ChatPaginationState();
      this.pagination = new ChatPaginationState();
      this.quoteContext.reset();
      this.errorMessage = err.message || 'load messages failed';
    } finally {
      this.loading = false;
    }
  }

  unbind(): void {
    this.webSocketManager.removeEventListener(this.onSocketEvent);
  }

  async loadMoreMessages(): Promise<boolean> {
    if (this.quoteContext.active) {
      return await this.loadOlderQuoteMessages();
    }
    return await this.loadOlderMainMessages();
  }

  async loadNewerMessages(): Promise<boolean> {
    if (!this.quoteContext.active || this.quoteContext.loadingNewer || !this.quoteContext.hasNewer || this.chatId.length === 0 ||
      this.quoteMessages.length === 0) {
      return false;
    }

    this.quoteContext.loadingNewer = true;
    try {
      const latestCurrent: MessageItem = this.quoteMessages[this.quoteMessages.length - 1];
      let newerMessages: MessageItem[] = await this.fetchNewerQuoteMessages(latestCurrent);
      if (newerMessages.length === 0) {
        this.quoteContext.hasNewer = false;
        return false;
      }

      const merged: MessageItem[] = this.copyMessages(this.quoteMessages);
      for (let i = 0; i < newerMessages.length; i++) {
        merged.push(newerMessages[i]);
      }
      this.quoteMessages = this.deduplicateByMsgId(merged);
      this.refreshPaginationState(this.quoteMessages, this.quotePagination);
      this.applyQuoteMessages();
      return true;
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || 'load newer messages failed';
      return false;
    } finally {
      this.quoteContext.loadingNewer = false;
    }
  }

  async sendTextMessage(text: string): Promise<boolean> {
    const trimmedText: string = text.trim();
    if (this.chatId.length === 0) {
      this.errorMessage = 'chat id is empty';
      return false;
    }
    if (trimmedText.length === 0) {
      return false;
    }

    this.loading = true;
    this.errorMessage = '';
    try {
      const receipt: SentTextMessageReceipt = await this.messageService.sendTextMessage(this.chatId, this.chatType, trimmedText);
      const selfMessage: MessageItem = await this.buildLocalSentTextMessage(receipt);
      this.applyIncomingMessage(selfMessage);
      return true;
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || 'send message failed';
      return false;
    } finally {
      this.loading = false;
    }
  }

  async syncDraftInput(input: string): Promise<void> {
    if (this.chatId.length === 0) {
      return;
    }
    try {
      await this.webSocketManager.sendDraft(this.chatId, input);
    } catch (_error) {
    }
  }

  async enterQuoteContext(source: MessageItem): Promise<number> {
    if (source.quoteMsgId.length === 0) {
      return -1;
    }

    const mainIndex: number = this.findMessageIndexById(this.mainMessages, source.quoteMsgId);
    if (mainIndex >= 0) {
      this.quoteContext.reset();
      this.applyMainMessages();
      return mainIndex;
    }

    this.loading = true;
    this.errorMessage = '';
    try {
      const quoteWindow: MessageItem[] = await this.fetchQuoteWindow(source);
      const olderWindow: MessageItem[] = await this.messageService.listMessage(this.chatId, this.chatType, source.quoteMsgId);
      const merged: MessageItem[] = this.mergeMessageLists(olderWindow, quoteWindow);
      this.quoteMessages = this.normalizeForTimeline(merged);
      this.refreshPaginationState(this.quoteMessages, this.quotePagination);

      this.quoteContext.active = true;
      this.quoteContext.sourceMsgId = source.msgId;
      this.quoteContext.targetMsgId = source.quoteMsgId;
      this.quoteContext.targetHintSeq = source.msgSeq;

      this.applyQuoteMessages();
      const targetIndex: number = this.findMessageIndexById(this.messages, source.quoteMsgId);
      if (targetIndex >= 0) {
        return targetIndex;
      }
      return this.messages.length > 0 ? this.messages.length - 1 : 0;
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || 'open quoted message failed';
      return -1;
    } finally {
      this.loading = false;
    }
  }

  exitQuoteContext(): number {
    const restoreIndex: number = this.findMessageIndexById(this.mainMessages, this.quoteContext.sourceMsgId);
    this.quoteContext.reset();
    this.applyMainMessages();
    if (restoreIndex >= 0) {
      return restoreIndex;
    }
    return this.messages.length > 0 ? this.messages.length - 1 : 0;
  }

  private async loadOlderMainMessages(): Promise<boolean> {
    if (this.pagination.isLoadingMore || !this.pagination.hasMore || this.chatId.length === 0 || this.pagination.oldestMsgId.length === 0) {
      return false;
    }

    this.mainPagination.isLoadingMore = true;
    this.pagination.copyFrom(this.mainPagination);
    try {
      const loaded: MessageItem[] = await this.messageService.listMessage(this.chatId, this.chatType, this.mainPagination.oldestMsgId);
      const normalized: MessageItem[] = this.normalizeForTimeline(loaded);
      const olderMessages: MessageItem[] = this.pickStrictlyOlderMessages(normalized, this.mainMessages);
      if (olderMessages.length === 0) {
        this.mainPagination.hasMore = false;
        this.pagination.copyFrom(this.mainPagination);
        return false;
      }
      this.mainMessages = this.mergeMessageLists(olderMessages, this.mainMessages);
      this.refreshPaginationState(this.mainMessages, this.mainPagination);
      this.applyMainMessages();
      return true;
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || 'load more messages failed';
      return false;
    } finally {
      this.mainPagination.isLoadingMore = false;
      this.pagination.copyFrom(this.mainPagination);
    }
  }

  private async loadOlderQuoteMessages(): Promise<boolean> {
    if (this.quotePagination.isLoadingMore || !this.quotePagination.hasMore || this.chatId.length === 0 || this.quotePagination.oldestMsgId.length === 0) {
      return false;
    }

    this.quotePagination.isLoadingMore = true;
    this.pagination.copyFrom(this.quotePagination);
    try {
      const loaded: MessageItem[] = await this.messageService.listMessage(this.chatId, this.chatType, this.quotePagination.oldestMsgId);
      const normalized: MessageItem[] = this.normalizeForTimeline(loaded);
      const olderMessages: MessageItem[] = this.pickStrictlyOlderMessages(normalized, this.quoteMessages);
      if (olderMessages.length === 0) {
        this.quotePagination.hasMore = false;
        this.pagination.copyFrom(this.quotePagination);
        return false;
      }
      this.quoteMessages = this.mergeMessageLists(olderMessages, this.quoteMessages);
      this.refreshPaginationState(this.quoteMessages, this.quotePagination);
      this.applyQuoteMessages();
      return true;
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || 'load quote history failed';
      return false;
    } finally {
      this.quotePagination.isLoadingMore = false;
      this.pagination.copyFrom(this.quotePagination);
    }
  }

  private async fetchQuoteWindow(source: MessageItem): Promise<MessageItem[]> {
    let quoteWindow: MessageItem[] = [];
    try {
      quoteWindow = await this.messageService.listMessageByMidSeqFromMaxSeq(this.chatId, this.chatType, source.quoteMsgId);
    } catch (_error) {
      quoteWindow = [];
    }

    let normalized: MessageItem[] = this.normalizeForTimeline(quoteWindow);
    if (this.findMessageIndexById(normalized, source.quoteMsgId) >= 0) {
      return normalized;
    }

    normalized = this.normalizeForTimeline(
      await this.messageService.listMessageByMidSeqFromMaxSeq(this.chatId, this.chatType, source.quoteMsgId)
    );
    if (normalized.length === 0) {
      throw new Error('quoted message was not found');
    }
    return normalized;
  }

  private async fetchNewerQuoteMessages(latestCurrent: MessageItem): Promise<MessageItem[]> {
    let loaded: MessageItem[] = await this.messageService.listMessageByMidSeq(this.chatId, this.chatType, latestCurrent.msgId, latestCurrent.msgSeq);
    let normalized: MessageItem[] = this.normalizeForTimeline(loaded);
    let newerMessages: MessageItem[] = this.pickStrictlyNewerMessages(normalized, this.quoteMessages);
    newerMessages = this.trimMessagesToInitialLatest(newerMessages);
    if (newerMessages.length > 0) {
      return newerMessages;
    }

    if (latestCurrent.msgSeq >= this.initialLatestMsgSeq) {
      return [];
    }

    loaded = await this.messageService.listMessageBySeq(this.chatId, this.chatType, latestCurrent.msgSeq);
    normalized = this.normalizeForTimeline(loaded);
    newerMessages = this.pickStrictlyNewerMessages(normalized, this.quoteMessages);
    return this.trimMessagesToInitialLatest(newerMessages);
  }

  private applyMainMessages(): void {
    this.messages = this.copyMessages(this.mainMessages);
    this.pagination.copyFrom(this.mainPagination);
    if (this.onMessagesUpdated !== undefined) {
      this.onMessagesUpdated();
    }
  }

  private applyQuoteMessages(): void {
    this.messages = this.copyMessages(this.quoteMessages);
    this.pagination.copyFrom(this.quotePagination);
    this.quoteContext.hasNewer = this.computeQuoteHasNewer();
    if (this.onMessagesUpdated !== undefined) {
      this.onMessagesUpdated();
    }
  }

  private computeQuoteHasNewer(): boolean {
    if (this.quoteMessages.length === 0) {
      return false;
    }
    const latest: MessageItem = this.quoteMessages[this.quoteMessages.length - 1];
    return latest.msgSeq < this.initialLatestMsgSeq;
  }

  private compareMessage(left: MessageItem, right: MessageItem): number {
    if (left.msgSeq !== right.msgSeq) {
      return left.msgSeq - right.msgSeq;
    }
    if (left.sendTime !== right.sendTime) {
      return left.sendTime - right.sendTime;
    }
    return 0;
  }

  private normalizeForTimeline(list: MessageItem[]): MessageItem[] {
    const copied: MessageItem[] = this.copyMessages(list);
    copied.sort((left: MessageItem, right: MessageItem) => {
      return this.compareMessage(left, right);
    });
    return this.deduplicateByMsgId(copied);
  }

  private copyMessages(list: MessageItem[]): MessageItem[] {
    const copied: MessageItem[] = [];
    for (let i = 0; i < list.length; i++) {
      copied.push(list[i]);
    }
    return copied;
  }

  private mergeMessageLists(left: MessageItem[], right: MessageItem[]): MessageItem[] {
    const merged: MessageItem[] = [];
    for (let i = 0; i < left.length; i++) {
      merged.push(left[i]);
    }
    for (let i = 0; i < right.length; i++) {
      merged.push(right[i]);
    }
    return this.normalizeForTimeline(merged);
  }

  private deduplicateByMsgId(list: MessageItem[]): MessageItem[] {
    const unique: MessageItem[] = [];
    const seen: Record<string, boolean> = {};
    for (let i = 0; i < list.length; i++) {
      const item: MessageItem = list[i];
      const key: string = item.msgId.length > 0 ? item.msgId : `${item.msgSeq}_${item.sendTime}_${i}`;
      if (seen[key] === true) {
        continue;
      }
      seen[key] = true;
      unique.push(item);
    }
    return unique;
  }

  private pickStrictlyOlderMessages(list: MessageItem[], currentMessages: MessageItem[]): MessageItem[] {
    if (currentMessages.length === 0) {
      return list;
    }
    const oldestCurrent: MessageItem = currentMessages[0];
    const result: MessageItem[] = [];
    for (let i = 0; i < list.length; i++) {
      const item: MessageItem = list[i];
      if (this.compareMessage(item, oldestCurrent) < 0) {
        result.push(item);
      }
    }
    return result;
  }

  private pickStrictlyNewerMessages(list: MessageItem[], currentMessages: MessageItem[]): MessageItem[] {
    if (currentMessages.length === 0) {
      return list;
    }
    const latestCurrent: MessageItem = currentMessages[currentMessages.length - 1];
    const result: MessageItem[] = [];
    for (let i = 0; i < list.length; i++) {
      const item: MessageItem = list[i];
      if (this.compareMessage(item, latestCurrent) > 0) {
        result.push(item);
      }
    }
    return result;
  }

  private trimMessagesToInitialLatest(list: MessageItem[]): MessageItem[] {
    const result: MessageItem[] = [];
    for (let i = 0; i < list.length; i++) {
      const item: MessageItem = list[i];
      if (item.msgSeq <= this.initialLatestMsgSeq) {
        result.push(item);
      }
    }
    return result;
  }

  private findMessageIndexById(list: MessageItem[], msgId: string): number {
    if (msgId.length === 0) {
      return -1;
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].msgId === msgId) {
        return i;
      }
    }
    return -1;
  }

  private refreshPaginationState(list: MessageItem[], target: ChatPaginationState): void {
    if (list.length === 0) {
      target.oldestMsgId = '';
      target.oldestMsgSeq = 0;
      target.hasMore = false;
      return;
    }
    const oldest: MessageItem = list[0];
    target.oldestMsgId = oldest.msgId;
    target.oldestMsgSeq = oldest.msgSeq;
    target.hasMore = oldest.msgId.length > 0;
  }

  private async ensureRealtimeReady(): Promise<void> {
    if (!this.webSocketManager.isStarted()) {
      try {
        await this.webSocketManager.start();
      } catch (_error) {
      }
    }
    if (this.currentUserProfile === undefined) {
      try {
        this.currentUserProfile = await this.userService.getMyUserInfo();
      } catch (_error) {
      }
    }
  }

  private async ensureCurrentUserProfile(): Promise<UserProfile> {
    if (this.currentUserProfile !== undefined && this.currentUserProfile.id.length > 0) {
      return this.currentUserProfile;
    }
    this.currentUserProfile = await this.userService.getMyUserInfo();
    return this.currentUserProfile;
  }

  private async buildLocalSentTextMessage(receipt: SentTextMessageReceipt): Promise<MessageItem> {
    const profile: UserProfile = await this.ensureCurrentUserProfile();
    const item: MessageItem = new MessageItem();
    item.uiKey = receipt.msgId;
    item.msgId = receipt.msgId;
    item.chatId = receipt.chatId;
    item.senderId = profile.id;
    item.senderName = profile.name.length > 0 ? profile.name : '我';
    item.senderAvatarUrl = profile.avatarUrl;
    item.direction = 'right';
    item.contentText = receipt.text;
    item.rawText = receipt.text;
    item.sendTime = receipt.sendTime;
    item.contentType = receipt.contentType;
    item.isSelf = true;
    item.msgSeq = this.nextLocalMsgSeq();
    if (item.uiKey.length === 0) {
      item.uiKey = `${item.msgSeq}_${item.sendTime}_${item.senderId}_${item.direction}_${item.contentType}_${item.contentText.length}`;
    }
    return item;
  }

  private nextLocalMsgSeq(): number {
    if (this.mainMessages.length === 0) {
      return 1;
    }
    const latest: MessageItem = this.mainMessages[this.mainMessages.length - 1];
    return latest.msgSeq + 1;
  }

  private handleSocketEvent(event: WebSocketEvent): void {
    if (event.type === WebSocketEventType.DRAFT) {
      this.applyRemoteDraft(event.draft);
      return;
    }

    if (event.message === undefined) {
      return;
    }
    if (event.message.chatId !== this.chatId) {
      return;
    }

    if (event.type === WebSocketEventType.MESSAGE) {
      this.applyIncomingMessage(event.message);
      return;
    }
    if (event.type === WebSocketEventType.MESSAGE_EDITED) {
      this.applyEditedMessage(event.message);
      return;
    }
    if (event.type === WebSocketEventType.STREAM) {
      this.applyStreamMessage(event);
    }
  }

  private applyRemoteDraft(draft: WebSocketDraftUpdate | undefined): void {
    if (draft === undefined || draft.chatId !== this.chatId) {
      return;
    }
    this.remoteDraft = draft.input;
    if (this.onRemoteDraftUpdated !== undefined) {
      this.onRemoteDraftUpdated();
    }
  }

  private applyIncomingMessage(item: MessageItem): void {
    const previousMessages: MessageItem[] = this.copyMessages(this.mainMessages);
    this.mainMessages = this.normalizeForTimeline(this.mergeMessageLists(this.mainMessages, [item]));
    this.initialLatestMsgSeq = this.mainMessages.length > 0 ? this.mainMessages[this.mainMessages.length - 1].msgSeq : this.initialLatestMsgSeq;
    this.refreshPaginationState(this.mainMessages, this.mainPagination);
    if (this.quoteContext.active) {
      if (item.msgId === this.quoteContext.targetMsgId || item.quoteMsgId === this.quoteContext.targetMsgId) {
        this.quoteMessages = this.normalizeForTimeline(this.mergeMessageLists(this.quoteMessages, [item]));
        this.refreshPaginationState(this.quoteMessages, this.quotePagination);
        this.applyQuoteMessages();
        return;
      }
      return;
    }
    const appended: MessageItem[] = this.collectTailAppendedMessages(previousMessages, this.mainMessages);
    if (appended.length > 0) {
      this.messages = this.copyMessages(this.mainMessages);
      this.pagination.copyFrom(this.mainPagination);
      if (this.onMessagesAppended !== undefined) {
        this.onMessagesAppended(appended);
      }
      return;
    }
    this.applyMainMessages();
  }

  private applyEditedMessage(item: MessageItem): void {
    this.mainMessages = this.replaceMessage(this.mainMessages, item);
    this.refreshPaginationState(this.mainMessages, this.mainPagination);
    if (this.quoteContext.active) {
      this.quoteMessages = this.replaceMessage(this.quoteMessages, item);
      this.refreshPaginationState(this.quoteMessages, this.quotePagination);
      this.applyQuoteMessages();
      return;
    }
    this.applyMainMessages();
  }

  private applyStreamMessage(event: WebSocketEvent): void {
    const stream = event.stream;
    if (stream === undefined) {
      return;
    }
    this.mainMessages = this.appendStreamContent(this.mainMessages, stream.msgId, stream.content);
    if (this.quoteContext.active) {
      this.quoteMessages = this.appendStreamContent(this.quoteMessages, stream.msgId, stream.content);
      this.applyQuoteMessages();
      return;
    }
    this.applyMainMessages();
  }

  private replaceMessage(list: MessageItem[], target: MessageItem): MessageItem[] {
    const next: MessageItem[] = [];
    let replaced: boolean = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i].msgId === target.msgId) {
        next.push(target);
        replaced = true;
      } else {
        next.push(list[i]);
      }
    }
    if (!replaced) {
      next.push(target);
    }
    return this.normalizeForTimeline(next);
  }

  private appendStreamContent(list: MessageItem[], msgId: string, content: string): MessageItem[] {
    const next: MessageItem[] = [];
    for (let i = 0; i < list.length; i++) {
      const item: MessageItem = list[i];
      if (item.msgId === msgId) {
        item.contentText = `${item.contentText}${content}`;
        item.rawText = item.contentText;
      }
      next.push(item);
    }
    return next;
  }

  private collectTailAppendedMessages(previousMessages: MessageItem[], nextMessages: MessageItem[]): MessageItem[] {
    if (previousMessages.length > nextMessages.length) {
      return [];
    }
    for (let i = 0; i < previousMessages.length; i++) {
      if (previousMessages[i].msgId !== nextMessages[i].msgId) {
        return [];
      }
    }
    const appended: MessageItem[] = [];
    for (let i = previousMessages.length; i < nextMessages.length; i++) {
      appended.push(nextMessages[i]);
    }
    return appended;
  }
}
