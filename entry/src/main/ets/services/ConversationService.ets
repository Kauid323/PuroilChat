import { ApiClient } from './ApiClient';
import { ConversationItem } from '../models/ConversationModels';
import { decodeConversationList, ConversationList, ConversationData } from '../generated/proto/conversation';
import { AvatarImageService } from './AvatarImageService';
const UNREAD_BADGE_LIMIT: number = 9999;

class DismissNotificationBody {
  chatId: string = '';
}

export class ConversationService {
  private formatUnreadBadge(unreadCount: number): string {
    if (unreadCount <= 0) {
      return '';
    }
    if (unreadCount > UNREAD_BADGE_LIMIT) {
      return '9999+';
    }
    return `${unreadCount}`;
  }

  private toItem(source: ConversationData): ConversationItem {
    const target: ConversationItem = new ConversationItem();
    const unreadCount: number = source.unreadMessage ?? 0;
    target.chatId = source.chatId ?? '';
    target.chatType = source.chatType ?? 0;
    target.name = source.name ?? 'Unknown';
    target.content = source.chatContent ?? '';
    target.timestampMs = source.timestampMs ?? 0;
    target.unreadCount = unreadCount;
    target.unreadBadgeText = this.formatUnreadBadge(unreadCount);
    target.unread = unreadCount > 0;
    target.atMe = (source.at ?? 0) > 0;
    target.avatarUrl = AvatarImageService.normalizeAvatarUrl(source.avatarUrl ?? '');
    return target;
  }

  async listConversations(): Promise<ConversationItem[]> {
    const binary: Uint8Array = await ApiClient.postProto('/v1/conversation/list');
    const decoded: ConversationList = decodeConversationList(binary);
    const statusCode: number = decoded.status?.code ?? 0;
    if (statusCode !== 1) {
      throw new Error(decoded.status?.msg ?? 'conversation list failed');
    }
    const sourceList: ConversationData[] = decoded.data ?? [];
    const result: ConversationItem[] = [];
    for (let i = 0; i < sourceList.length; i++) {
      const source: ConversationData | undefined = sourceList[i];
      if (source !== undefined) {
        result.push(this.toItem(source));
      }
    }
    return result;
  }

  async dismissNotification(chatId: string): Promise<void> {
    const requestBody: DismissNotificationBody = new DismissNotificationBody();
    requestBody.chatId = chatId;
    await ApiClient.postJson<Object>('/v1/conversation/dismiss-notification', requestBody);
  }
}
