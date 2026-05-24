import image from '@ohos.multimedia.image';
import { ChatRouteParams } from '../models/ChatModels';
import { ConversationItem } from '../models/ConversationModels';
import { ConversationService } from '../services/ConversationService';
import { AvatarImageService } from '../services/AvatarImageService';
import { CryptoTokenStore } from '../services/CryptoTokenStore';
import { SettingsStore } from '../services/SettingsStore';

export class HomeViewModel {
  private readonly conversationService = new ConversationService();
  private readonly avatarService = new AvatarImageService();
  private avatarLoadingUrls: string[] = [];

  currentTab: number = 0;
  loading: boolean = false;
  errorMessage: string = '';
  conversations: ConversationItem[] = [];
  avatarKeys: string[] = [];
  avatarImages: image.PixelMap[] = [];
  onAvatarUpdated: (() => void) | undefined = undefined;

  private findAvatarIndex(url: string): number {
    for (let i = 0; i < this.avatarKeys.length; i++) {
      if (this.avatarKeys[i] === url) {
        return i;
      }
    }
    return -1;
  }

  private isLoadingUrl(url: string): boolean {
    for (let i = 0; i < this.avatarLoadingUrls.length; i++) {
      if (this.avatarLoadingUrls[i] === url) {
        return true;
      }
    }
    return false;
  }

  private removeLoadingUrl(url: string): void {
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

  getAvatar(url: string): image.PixelMap | undefined {
    const index: number = this.findAvatarIndex(url);
    if (index < 0) {
      return undefined;
    }
    return this.avatarImages[index];
  }

  async loadConversations(): Promise<void> {
    this.loading = true;
    this.errorMessage = '';
    try {
      this.avatarLoadingUrls = [];
      this.conversations = await this.conversationService.listConversations();
      this.loading = false;
      void this.preloadAvatars();
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || 'load conversations failed';
      this.conversations = [];
      this.loading = false;
    }
  }

  async preloadAvatars(): Promise<void> {
    for (let i = 0; i < this.conversations.length; i++) {
      const item: ConversationItem | undefined = this.conversations[i];
      if (item === undefined) {
        continue;
      }
      const url: string = item.avatarUrl;
      if (url.length === 0 || this.findAvatarIndex(url) >= 0 || this.isLoadingUrl(url)) {
        continue;
      }

      this.avatarLoadingUrls.push(url);
      this.loadSingleAvatar(url);
    }
  }

  private async loadSingleAvatar(url: string): Promise<void> {
    const pixelMap: image.PixelMap | undefined = await this.avatarService.loadAvatar(url);
    this.removeLoadingUrl(url);
    if (pixelMap === undefined) {
      return;
    }
    this.saveAvatar(url, pixelMap);
    if (this.onAvatarUpdated !== undefined) {
      this.onAvatarUpdated();
    }
  }

  logout(): void {
    CryptoTokenStore.clearToken();
  }

  async openConversation(item: ConversationItem): Promise<ChatRouteParams> {
    await this.conversationService.dismissNotification(item.chatId);
    item.unreadCount = 0;
    item.unreadBadgeText = '';
    item.unread = false;

    const params: ChatRouteParams = new ChatRouteParams();
    params.chatId = item.chatId;
    params.chatType = item.chatType;
    params.title = item.name;
    params.layoutStyleName = SettingsStore.getChatStyle();
    return params;
  }
}
