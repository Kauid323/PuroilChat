export class ChatRouteParams {
  chatId: string = '';
  chatType: number = 0;
  title: string = '';
  layoutStyleName: string = '';
}

export class MessageItem {
  msgId: string = '';
  chatId: string = '';
  senderId: string = '';
  senderName: string = '';
  senderAvatarUrl: string = '';
  direction: string = '';
  contentText: string = '';
  rawText: string = '';
  quoteMsgId: string = '';
  quotedText: string = '';
  hasQuote: boolean = false;
  sendTime: number = 0;
  msgSeq: number = 0;
  contentType: number = 0;
  isSelf: boolean = false;
}

export class ChatPaginationState {
  isLoadingMore: boolean = false;
  hasMore: boolean = true;
  oldestMsgId: string = '';
  oldestMsgSeq: number = 0;

  copyFrom(source: ChatPaginationState): void {
    this.isLoadingMore = source.isLoadingMore;
    this.hasMore = source.hasMore;
    this.oldestMsgId = source.oldestMsgId;
    this.oldestMsgSeq = source.oldestMsgSeq;
  }
}

export class ChatQuoteContextState {
  active: boolean = false;
  sourceMsgId: string = '';
  targetMsgId: string = '';
  targetHintSeq: number = 0;
  loadingNewer: boolean = false;
  hasNewer: boolean = false;

  reset(): void {
    this.active = false;
    this.sourceMsgId = '';
    this.targetMsgId = '';
    this.targetHintSeq = 0;
    this.loadingNewer = false;
    this.hasNewer = false;
  }
}

export class ChatMessageLayoutStyle {
  name: string = 'telegram-compact';
  avatarSize: number = 38;
  avatarGap: number = 10;
  bubbleRadius: number = 18;
  groupedOuterRadius: number = 18;
  groupedInnerRadius: number = 6;
  bubbleMaxWidthPercent: number = 78;
  bubblePaddingHorizontal: number = 14;
  bubblePaddingVertical: number = 10;
  listSidePadding: number = 12;
  groupedSpacing: number = 0;
  separatedSpacing: number = 7;
  edgeSpacing: number = 8;
  quoteSpacing: number = 6;
  highlightPadding: number = 4;
  reserveAvatarSlot: boolean = true;
}

export class ChatMessageLayoutFactory {
  static create(styleName: string): ChatMessageLayoutStyle {
    if (styleName === 'card-relaxed') {
      return ChatMessageLayoutFactory.createCardRelaxed();
    }
    return ChatMessageLayoutFactory.createTelegramCompact();
  }

  static createTelegramCompact(): ChatMessageLayoutStyle {
    const style: ChatMessageLayoutStyle = new ChatMessageLayoutStyle();
    style.name = 'telegram-compact';
    style.avatarSize = 38;
    style.avatarGap = 10;
    style.bubbleRadius = 18;
    style.groupedOuterRadius = 18;
    style.groupedInnerRadius = 6;
    style.bubbleMaxWidthPercent = 78;
    style.bubblePaddingHorizontal = 14;
    style.bubblePaddingVertical = 10;
    style.listSidePadding = 12;
    style.groupedSpacing = 0;
    style.separatedSpacing = 7;
    style.edgeSpacing = 8;
    style.quoteSpacing = 6;
    style.highlightPadding = 4;
    style.reserveAvatarSlot = true;
    return style;
  }

  static createCardRelaxed(): ChatMessageLayoutStyle {
    const style: ChatMessageLayoutStyle = new ChatMessageLayoutStyle();
    style.name = 'card-relaxed';
    style.avatarSize = 40;
    style.avatarGap = 12;
    style.bubbleRadius = 20;
    style.groupedOuterRadius = 20;
    style.groupedInnerRadius = 10;
    style.bubbleMaxWidthPercent = 74;
    style.bubblePaddingHorizontal = 16;
    style.bubblePaddingVertical = 12;
    style.listSidePadding = 14;
    style.groupedSpacing = 1;
    style.separatedSpacing = 8;
    style.edgeSpacing = 10;
    style.quoteSpacing = 8;
    style.highlightPadding = 5;
    style.reserveAvatarSlot = true;
    return style;
  }
}
