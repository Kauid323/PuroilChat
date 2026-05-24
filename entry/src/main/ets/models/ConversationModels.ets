export class ConversationItem {
  chatId: string = '';
  chatType: number = 0;
  name: string = '';
  content: string = '';
  timestampMs: number = 0;
  unreadCount: number = 0;
  unreadBadgeText: string = '';
  unread: boolean = false;
  atMe: boolean = false;
  avatarUrl: string = '';
}
