import image from '@ohos.multimedia.image';
import { ChatMessageDataSource } from '../models/ChatMessageDataSource';
import { ChatMessageLayoutFactory, ChatMessageLayoutStyle, ChatRouteParams, MessageItem } from '../models/ChatModels';
import { ChatViewModel } from '../viewmodels/ChatViewModel';
import { NavigationTransition } from '../services/NavigationTransition';
import { AvatarImageService } from '../services/AvatarImageService';

@Entry
@Component
struct Chat {
  private messageScroller: ListScroller = new ListScroller();
  private messageDataSource: ChatMessageDataSource = new ChatMessageDataSource();
  private vm: ChatViewModel = new ChatViewModel();
  private avatarService: AvatarImageService = new AvatarImageService();
  private layoutStyle: ChatMessageLayoutStyle = ChatMessageLayoutFactory.create('telegram-compact');
  private avatarKeys: string[] = [];
  private avatarImages: image.PixelMap[] = [];
  private avatarLoadingUrls: string[] = [];
  @State title: string = '';
  @State loading: boolean = false;
  @State errorMessage: string = '';
  @State messages: MessageItem[] = [];
  @State loadingMore: boolean = false;
  @State canLoadMore: boolean = true;
  @State loadingNewer: boolean = false;
  @State canLoadNewer: boolean = false;
  @State inQuoteContext: boolean = false;
  @State highlightedMsgId: string = '';
  @State highlightVisible: boolean = false;
  @State avatarVersion: number = 0;
  @State initialMessageIndex: number = 0;
  @State draftMessage: string = '';
  @State sending: boolean = false;
  private firstSyncDone: boolean = false;
  private highlightToken: number = 0;

  pageTransition() {
    PageTransitionEnter({ type: RouteType.Push, duration: NavigationTransition.PUSH_ENTER_MS, curve: Curve.Friction })
      .slide(SlideEffect.Right)
      .opacity(NavigationTransition.PUSH_ENTER_OPACITY);

    PageTransitionExit({ type: RouteType.Push, duration: NavigationTransition.PUSH_EXIT_MS, curve: Curve.Sharp })
      .slide(SlideEffect.Left)
      .opacity(NavigationTransition.PUSH_EXIT_OPACITY);

    PageTransitionEnter({ type: RouteType.Pop, duration: NavigationTransition.PUSH_EXIT_MS, curve: Curve.Sharp })
      .slide(SlideEffect.Left)
      .opacity(1);

    PageTransitionExit({ type: RouteType.Pop, duration: NavigationTransition.PUSH_ENTER_MS, curve: Curve.Friction })
      .slide(SlideEffect.Right)
      .opacity(1);
  }

  aboutToAppear(): void {
    const params: ChatRouteParams = this.getUIContext().getRouter().getParams() as ChatRouteParams;
    this.vm.bindRoute(params);
    this.layoutStyle = ChatMessageLayoutFactory.create(params.layoutStyleName);
    this.firstSyncDone = false;
    void this.refreshMessages();
  }

  private syncFromVm(): void {
    this.title = this.vm.title;
    this.loading = this.vm.loading;
    this.errorMessage = this.vm.errorMessage;
    this.messages = [...this.vm.messages];
    this.loadingMore = this.vm.pagination.isLoadingMore;
    this.canLoadMore = this.vm.pagination.hasMore;
    this.loadingNewer = this.vm.quoteContext.loadingNewer;
    this.canLoadNewer = this.vm.quoteContext.hasNewer;
    this.inQuoteContext = this.vm.quoteContext.active;
    this.preloadMessageAvatars();
  }

  private async refreshMessages(): Promise<void> {
    await this.vm.loadMessages();
    this.syncFromVm();
    this.initialMessageIndex = this.messages.length > 0 ? this.messages.length - 1 : 0;
    this.applyMessages(this.initialMessageIndex, ScrollAlign.END);
  }

  private async loadMoreMessages(): Promise<void> {
    if (this.loading || this.loadingMore || !this.canLoadMore) {
      return;
    }
    const previousMessages: MessageItem[] = [...this.messages];
    await this.vm.loadMoreMessages();
    this.syncFromVm();
    const prependCount: number = this.messages.length - previousMessages.length;
    if (prependCount <= 0) {
      return;
    }
    const prepended: MessageItem[] = [];
    for (let i = 0; i < prependCount; i++) {
      prepended.push(this.messages[i]);
    }
    this.messageDataSource.prependMessages(prepended);
  }

  private async loadNewerMessages(): Promise<void> {
    if (!this.inQuoteContext || this.loading || this.loadingNewer || !this.canLoadNewer) {
      return;
    }
    const previousMessages: MessageItem[] = [...this.messages];
    await this.vm.loadNewerMessages();
    this.syncFromVm();
    const appendCount: number = this.messages.length - previousMessages.length;
    if (appendCount <= 0) {
      return;
    }
    const appended: MessageItem[] = [];
    for (let i = this.messages.length - appendCount; i < this.messages.length; i++) {
      appended.push(this.messages[i]);
    }
    this.messageDataSource.appendMessages(appended);
  }

  private async openQuoteContext(item: MessageItem): Promise<void> {
    if (item.quoteMsgId.length === 0) {
      return;
    }
    const loadedIndex: number = this.findMessageIndexById(this.messages, item.quoteMsgId);
    if (loadedIndex >= 0) {
      this.locateMessage(item.quoteMsgId, loadedIndex, ScrollAlign.CENTER);
      return;
    }
    const targetIndex: number = await this.vm.enterQuoteContext(item);
    this.syncFromVm();
    this.applyMessages(targetIndex, ScrollAlign.CENTER, item.quoteMsgId);
  }

  private closeQuoteContext(): void {
    const restoreIndex: number = this.vm.exitQuoteContext();
    this.syncFromVm();
    this.applyMessages(restoreIndex, ScrollAlign.CENTER);
  }

  private applyMessages(targetIndex: number, align: ScrollAlign, highlightMsgId: string = ''): void {
    this.firstSyncDone = false;
    this.messageDataSource.replaceAll(this.messages);
    setTimeout(() => {
      this.firstSyncDone = true;
      if (this.messages.length === 0) {
        return;
      }
      this.locateMessage(highlightMsgId, targetIndex, align);
    }, 60);
  }

  private locateMessage(msgId: string, targetIndex: number, align: ScrollAlign): void {
    this.scrollToMessageIndex(targetIndex, align);
    if (msgId.length === 0) {
      return;
    }
    setTimeout(() => {
      this.flashLocatedMessage(msgId);
    }, 140);
  }

  private scrollToMessageIndex(targetIndex: number, align: ScrollAlign): void {
    if (this.messages.length === 0) {
      return;
    }
    const safeIndex: number = targetIndex >= 0 && targetIndex < this.messages.length ? targetIndex : this.messages.length - 1;
    try {
      this.messageScroller.scrollToIndex(safeIndex, false, align);
    } catch (_error) {
    }
  }

  private flashLocatedMessage(msgId: string): void {
    this.highlightToken++;
    const token: number = this.highlightToken;
    this.highlightedMsgId = msgId;
    this.highlightVisible = true;
    setTimeout(() => {
      this.updateHighlightState(token, msgId, false);
    }, 180);
    setTimeout(() => {
      this.updateHighlightState(token, msgId, true);
    }, 360);
    setTimeout(() => {
      this.updateHighlightState(token, msgId, false);
    }, 560);
    setTimeout(() => {
      this.clearHighlightState(token, msgId);
    }, 820);
  }

  private updateHighlightState(token: number, msgId: string, visible: boolean): void {
    if (this.highlightToken !== token || this.highlightedMsgId !== msgId) {
      return;
    }
    this.highlightVisible = visible;
  }

  private clearHighlightState(token: number, msgId: string): void {
    if (this.highlightToken !== token || this.highlightedMsgId !== msgId) {
      return;
    }
    this.highlightVisible = false;
    this.highlightedMsgId = '';
  }

  private buildMessageKey(item: MessageItem): string {
    if (item.msgId.length > 0) {
      return item.msgId;
    }
    return `${item.msgSeq}_${item.sendTime}_${item.senderId}_${item.direction}`;
  }

  private normalizedMessageTime(item: MessageItem): number {
    if (item.sendTime <= 0) {
      return 0;
    }
    return item.sendTime < 1000000000000 ? item.sendTime * 1000 : item.sendTime;
  }

  private isSameSenderGroup(left: MessageItem | undefined, right: MessageItem | undefined): boolean {
    if (left === undefined || right === undefined) {
      return false;
    }
    if (left.isSelf !== right.isSelf) {
      return false;
    }
    const sameSender: boolean = left.senderId.length > 0 || right.senderId.length > 0
      ? left.senderId === right.senderId
      : left.direction === right.direction && left.senderName === right.senderName;
    if (!sameSender) {
      return false;
    }
    const timeGap: number = Math.abs(this.normalizedMessageTime(right) - this.normalizedMessageTime(left));
    return timeGap <= 5 * 60 * 1000;
  }

  private resolveMessageIndex(item: MessageItem): number {
    const key: string = this.buildMessageKey(item);
    for (let i = 0; i < this.messages.length; i++) {
      if (this.buildMessageKey(this.messages[i]) === key) {
        return i;
      }
    }
    return -1;
  }

  private shouldShowSenderName(item: MessageItem): boolean {
    const index: number = this.resolveMessageIndex(item);
    if (index <= 0) {
      return true;
    }
    return !this.isSameSenderGroup(this.messages[index - 1], item);
  }

  private shouldShowAvatar(item: MessageItem): boolean {
    if (item.isSelf) {
      return false;
    }
    const index: number = this.resolveMessageIndex(item);
    if (index < 0 || index >= this.messages.length - 1) {
      return true;
    }
    return !this.isSameSenderGroup(item, this.messages[index + 1]);
  }

  private avatarSlotWidth(): number {
    return this.layoutStyle.avatarSize;
  }

  private bubbleMaxWidth(): string {
    return `${this.layoutStyle.bubbleMaxWidthPercent}%`;
  }

  private quoteBottomSpacing(): number {
    return Math.max(2, this.layoutStyle.quoteSpacing - 3);
  }

  private formatMessageTime(sendTime: number): string {
    if (sendTime <= 0) {
      return '';
    }
    const normalized: number = sendTime < 1000000000000 ? sendTime * 1000 : sendTime;
    const date: Date = new Date(normalized);
    if (isNaN(date.getTime())) {
      return '';
    }
    const nowDate: Date = new Date();
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();
    const hourText: string = hour < 10 ? `0${hour}` : `${hour}`;
    const minuteText: string = minute < 10 ? `0${minute}` : `${minute}`;

    if (date.getFullYear() === nowDate.getFullYear() &&
      date.getMonth() === nowDate.getMonth() &&
      date.getDate() === nowDate.getDate()) {
      return `${hourText}:${minuteText}`;
    }

    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();
    if (date.getFullYear() === nowDate.getFullYear()) {
      return `${month}月${day}日 ${hourText}:${minuteText}`;
    }

    const year: number = date.getFullYear();
    return `${year}年${month}月${day}日 ${hourText}:${minuteText}`;
  }

  private quoteLeadingWidth(item: MessageItem): number {
    if (item.isSelf) {
      return 0;
    }
    return this.layoutStyle.reserveAvatarSlot ? this.avatarSlotWidth() + this.layoutStyle.avatarGap : 0;
  }

  private isFirstInGroup(item: MessageItem): boolean {
    const index: number = this.resolveMessageIndex(item);
    if (index <= 0) {
      return true;
    }
    return !this.isSameSenderGroup(this.messages[index - 1], item);
  }

  private isLastInGroup(item: MessageItem): boolean {
    const index: number = this.resolveMessageIndex(item);
    if (index < 0 || index >= this.messages.length - 1) {
      return true;
    }
    return !this.isSameSenderGroup(item, this.messages[index + 1]);
  }

  private bubbleRadius(item: MessageItem): BorderRadiuses {
    const outer: number = this.layoutStyle.groupedOuterRadius;
    const inner: number = this.layoutStyle.groupedInnerRadius;
    const first: boolean = this.isFirstInGroup(item);
    const last: boolean = this.isLastInGroup(item);
    if (item.isSelf) {
      return {
        topLeft: outer,
        topRight: outer,
        bottomLeft: outer,
        bottomRight: outer
      };
    }

    const topLeft: number = first ? outer : inner;
    const bottomLeft: number = last ? outer : inner;
    return {
      topLeft: topLeft,
      topRight: outer,
      bottomLeft: bottomLeft,
      bottomRight: outer
    };
  }

  private topSpacing(item: MessageItem): number {
    const index: number = this.resolveMessageIndex(item);
    if (index <= 0) {
      return this.layoutStyle.edgeSpacing;
    }
    return this.isSameSenderGroup(this.messages[index - 1], item) ? this.layoutStyle.groupedSpacing : this.layoutStyle.separatedSpacing;
  }

  private bottomSpacing(item: MessageItem): number {
    const index: number = this.resolveMessageIndex(item);
    if (index < 0 || index >= this.messages.length - 1) {
      return this.layoutStyle.edgeSpacing;
    }
    return this.isSameSenderGroup(item, this.messages[index + 1]) ? this.layoutStyle.groupedSpacing : this.layoutStyle.edgeSpacing;
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

  private goBack(): void {
    try {
      this.getUIContext().getRouter().back();
    } catch (_error) {
    }
  }

  private async sendDraft(): Promise<void> {
    const messageText: string = this.draftMessage.trim();
    if (this.sending || messageText.length === 0) {
      return;
    }
    this.sending = true;
    try {
      const sent: boolean = await this.vm.sendTextMessage(messageText);
      this.syncFromVm();
      if (!sent) {
        return;
      }
      this.draftMessage = '';
      this.initialMessageIndex = this.messages.length > 0 ? this.messages.length - 1 : 0;
      this.applyMessages(this.initialMessageIndex, ScrollAlign.END);
    } finally {
      this.sending = false;
    }
  }

  private findAvatarIndex(url: string): number {
    for (let i = 0; i < this.avatarKeys.length; i++) {
      if (this.avatarKeys[i] === url) {
        return i;
      }
    }
    return -1;
  }

  private getAvatar(url: string): image.PixelMap | undefined {
    const index: number = this.findAvatarIndex(url);
    if (index < 0) {
      return undefined;
    }
    return this.avatarImages[index];
  }

  private isLoadingAvatar(url: string): boolean {
    for (let i = 0; i < this.avatarLoadingUrls.length; i++) {
      if (this.avatarLoadingUrls[i] === url) {
        return true;
      }
    }
    return false;
  }

  private removeLoadingAvatar(url: string): void {
    const next: string[] = [];
    for (let i = 0; i < this.avatarLoadingUrls.length; i++) {
      if (this.avatarLoadingUrls[i] !== url) {
        next.push(this.avatarLoadingUrls[i]);
      }
    }
    this.avatarLoadingUrls = next;
  }

  private saveAvatar(url: string, pixelMap: image.PixelMap): void {
    const index: number = this.findAvatarIndex(url);
    if (index >= 0) {
      this.avatarImages[index] = pixelMap;
      return;
    }
    this.avatarKeys.push(url);
    this.avatarImages.push(pixelMap);
  }

  private preloadMessageAvatars(): void {
    for (let i = 0; i < this.messages.length; i++) {
      const item: MessageItem = this.messages[i];
      if (item.isSelf) {
        continue;
      }
      const url: string = item.senderAvatarUrl;
      if (url.length === 0 || this.findAvatarIndex(url) >= 0 || this.isLoadingAvatar(url)) {
        continue;
      }
      this.avatarLoadingUrls.push(url);
      void this.loadSingleAvatar(url);
    }
  }

  private async loadSingleAvatar(url: string): Promise<void> {
    const pixelMap: image.PixelMap | undefined = await this.avatarService.loadAvatar(url);
    this.removeLoadingAvatar(url);
    if (pixelMap === undefined) {
      return;
    }
    this.saveAvatar(url, pixelMap);
    this.avatarVersion++;
  }

  @Builder
  messageAvatar(item: MessageItem) {
    Stack({ alignContent: Alignment.Center }) {
      if (this.getAvatar(item.senderAvatarUrl) !== undefined) {
        Image(this.getAvatar(item.senderAvatarUrl) as image.PixelMap)
          .width(this.layoutStyle.avatarSize)
          .height(this.layoutStyle.avatarSize)
          .borderRadius(this.layoutStyle.avatarSize / 2)
          .objectFit(ImageFit.Cover)
      } else {
        Circle()
          .width(this.layoutStyle.avatarSize)
          .height(this.layoutStyle.avatarSize)
          .fill('#D8E7FF')
        Text(item.senderName.length > 0 ? item.senderName.slice(0, 1) : '?')
          .fontSize(13)
          .fontWeight(FontWeight.Bold)
          .fontColor('#1769FF')
      }
    }
    .width(this.layoutStyle.avatarSize)
    .height(this.layoutStyle.avatarSize)
  }

  @Builder
  messageAvatarSlot(item: MessageItem) {
    Blank()
      .width(item.isSelf ? 0 : (this.layoutStyle.reserveAvatarSlot ? this.avatarSlotWidth() : 0))
      .height(this.layoutStyle.avatarSize)
  }

  @Builder
  quoteCard(item: MessageItem) {
    Column() {
      Text(item.quotedText)
        .fontSize(13)
        .fontColor('#677181')
        .maxLines(100)
        .copyOption(CopyOptions.LocalDevice)
    }
    .alignItems(HorizontalAlign.Start)
    .padding({ left: 12, right: 12, top: 8, bottom: 8 })
    .backgroundColor('#E9EEF4')
    .borderRadius(14)
    .constraintSize({ maxWidth: this.bubbleMaxWidth() })
    .alignSelf(ItemAlign.Start)
    .margin({ bottom: this.quoteBottomSpacing() })
    .gesture(
      LongPressGesture({ repeat: false, duration: 320 })
        .onAction(() => {
          void this.openQuoteContext(item);
        })
    )
  }

  @Builder
  bubbleBody(item: MessageItem) {
    Column({ space: 0 }) {
      if (item.hasQuote) {
        this.quoteCard(item)
      }

      Text(item.contentText.length > 0 ? item.contentText : '[暂不支持的消息]')
        .fontSize(15)
        .fontColor(item.isSelf ? '#FFFFFF' : '#111827')
        .maxLines(100)
        .copyOption(CopyOptions.LocalDevice)
    }
    .alignItems(HorizontalAlign.Start)
    .padding({
      left: this.layoutStyle.bubblePaddingHorizontal,
      right: this.layoutStyle.bubblePaddingHorizontal,
      top: this.layoutStyle.bubblePaddingVertical,
      bottom: this.layoutStyle.bubblePaddingVertical
    })
    .backgroundColor(item.isSelf ? '#0A84FF' : '#FFFFFF')
    .borderRadius(this.bubbleRadius(item))
  }

  @Builder
  messageBubble(item: MessageItem) {
    Column({ space: 0 }) {
      if (item.isSelf) {
        Row() {
          Column({ space: 0 }) {
            if (this.shouldShowSenderName(item)) {
              Row({ space: 6 }) {
                Text(this.formatMessageTime(item.sendTime))
                  .fontSize(10)
                  .fontColor('#98A2B3')
                Text(item.senderName.length > 0 ? item.senderName : '我')
                  .fontSize(11)
                  .fontColor('#7B8496')
              }
              .margin({ bottom: 4 })
            }

            Column({ space: 0 }) {
              this.bubbleBody(item)
            }
            .padding({
              left: this.layoutStyle.highlightPadding,
              right: this.layoutStyle.highlightPadding,
              top: this.layoutStyle.highlightPadding,
              bottom: 0
            })
            .backgroundColor(this.highlightVisible && item.msgId === this.highlightedMsgId ? '#FFF1A8' : '#00000000')
            .borderRadius(this.layoutStyle.bubbleRadius + this.layoutStyle.highlightPadding)
          }
          .constraintSize({ maxWidth: this.bubbleMaxWidth() })
          .alignItems(HorizontalAlign.End)
        }
        .width('100%')
        .justifyContent(FlexAlign.End)
      } else {
        Row({ space: this.layoutStyle.avatarGap }) {
          if (this.shouldShowSenderName(item)) {
            Column() {
              this.messageAvatar(item)
            }
            .margin({ top: 6 })
          } else {
            this.messageAvatarSlot(item)
          }

          Column({ space: 0 }) {
            if (this.shouldShowSenderName(item)) {
              Row({ space: 6 }) {
                Text(item.senderName.length > 0 ? item.senderName : this.title)
                  .fontSize(11)
                  .fontColor('#7B8496')
                Text(this.formatMessageTime(item.sendTime))
                  .fontSize(10)
                  .fontColor('#98A2B3')
              }
              .margin({ bottom: 0 })
            }

            Column({ space: 0 }) {
              this.bubbleBody(item)
            }
            .padding({
              left: this.layoutStyle.highlightPadding,
              right: this.layoutStyle.highlightPadding,
              top: this.layoutStyle.highlightPadding,
              bottom: 0
            })
            .backgroundColor(this.highlightVisible && item.msgId === this.highlightedMsgId ? '#FFF1A8' : '#00000000')
            .borderRadius(this.layoutStyle.bubbleRadius + this.layoutStyle.highlightPadding)
          }
          .constraintSize({ maxWidth: this.bubbleMaxWidth() })
          .alignItems(HorizontalAlign.Start)
        }
        .width('100%')
        .alignItems(VerticalAlign.Top)
        .justifyContent(FlexAlign.Start)
      }
    }
    .width('100%')
    .padding({ top: this.topSpacing(item), bottom: this.bottomSpacing(item) })
    .alignItems(HorizontalAlign.Start)
  }

  build() {
    Column({ space: 0 }) {
      Row({ space: 12 }) {
        Text('<')
          .fontSize(26)
          .fontWeight(FontWeight.Medium)
          .fontColor('#111827')
          .onClick(() => {
            this.goBack();
          })

        Column({ space: 2 }) {
          Text(this.title.length > 0 ? this.title : 'Chat')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .fontColor('#111827')
          Text(`${this.messages.length} messages`)
            .fontSize(11)
            .fontColor('#7B8496')
        }
        .layoutWeight(1)
        .alignItems(HorizontalAlign.Start)

        Button('Refresh')
          .fontSize(12)
          .height(32)
          .backgroundColor('#E8F1FF')
          .fontColor('#0A84FF')
          .onClick(() => {
            void this.refreshMessages();
          })
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 14, bottom: 14 })
      .backgroundColor('#F8FAFD')

      if (this.loading) {
        Text('Loading messages...')
          .fontSize(13)
          .fontColor('#7B8496')
          .margin({ top: 16 })
      }

      if (this.errorMessage.length > 0) {
        Text(this.errorMessage)
          .fontSize(13)
          .fontColor('#E5484D')
          .padding({ left: 16, right: 16, top: 12 })
      }

      if (this.loadingMore) {
        Text('Loading more...')
          .fontSize(12)
          .fontColor('#7B8496')
          .padding({ top: 6, bottom: 4 })
          .width('100%')
          .textAlign(TextAlign.Center)
      }

      if (this.inQuoteContext) {
        Row({ space: 10 }) {
          Text('Quoted message context')
            .fontSize(12)
            .fontColor('#5E6B7B')
          Blank()
          Button('Back to latest')
            .fontSize(12)
            .height(30)
            .backgroundColor('#E8F1FF')
            .fontColor('#0A84FF')
            .onClick(() => {
              this.closeQuoteContext();
            })
        }
        .width('100%')
        .padding({ left: 12, right: 12, top: 4, bottom: 8 })
      }

      List({ space: 0, scroller: this.messageScroller, initialIndex: this.initialMessageIndex }) {
        LazyForEach(this.messageDataSource, (item: MessageItem) => {
          ListItem() {
            this.messageBubble(item)
          }
        }, (item: MessageItem) => item.msgId.length > 0 ? item.msgId : `${item.msgSeq}_${item.sendTime}`)
      }
      .maintainVisibleContentPosition(true)
      .onReachStart(() => {
        if (!this.firstSyncDone) {
          return;
        }
        void this.loadMoreMessages();
      })
      .onReachEnd(() => {
        if (!this.firstSyncDone || !this.inQuoteContext) {
          return;
        }
        void this.loadNewerMessages();
      })
      .layoutWeight(1)
      .width('100%')
      .padding({ left: this.layoutStyle.listSidePadding, right: this.layoutStyle.listSidePadding, top: 0, bottom: 0 })

      if (this.loadingNewer) {
        Text('Loading newer...')
          .fontSize(12)
          .fontColor('#7B8496')
          .padding({ top: 0, bottom: 8 })
          .width('100%')
          .textAlign(TextAlign.Center)
      }

      Row({ space: 10 }) {
        TextInput({ placeholder: 'Message', text: this.draftMessage })
          .layoutWeight(1)
          .height(38)
          .fontSize(15)
          .backgroundColor('#FFFFFF')
          .borderRadius(19)
          .padding({ left: 14, right: 14 })
          .onChange((value: string) => {
            this.draftMessage = value;
          })

        Button('Send')
          .height(38)
          .padding({ left: 16, right: 16 })
          .fontSize(14)
          .fontWeight(FontWeight.Medium)
          .backgroundColor(this.draftMessage.trim().length > 0 && !this.sending ? '#0A84FF' : '#B9D6FF')
          .fontColor('#FFFFFF')
          .borderRadius(19)
          .enabled(this.draftMessage.trim().length > 0 && !this.sending)
          .onClick(() => {
            void this.sendDraft();
          })
      }
      .width('100%')
      .height(52)
      .padding({ left: 12, right: 12, top: 7, bottom: 7 })
      .backgroundColor('#F8FAFD')
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#EEF3F9')
  }
}
