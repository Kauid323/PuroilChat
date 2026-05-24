import image from '@ohos.multimedia.image';
import { ChatStyleOption, MeSettingsState, UserProfile } from '../models/MeModels';
import { AvatarImageService } from '../services/AvatarImageService';
import { CryptoTokenStore } from '../services/CryptoTokenStore';
import { SettingsStore } from '../services/SettingsStore';
import { UserService } from '../services/UserService';

export class MeViewModel {
  private readonly userService = new UserService();
  private readonly avatarService = new AvatarImageService();

  loading: boolean = false;
  errorMessage: string = '';
  profile: UserProfile = new UserProfile();
  settings: MeSettingsState = new MeSettingsState();
  avatarImage: image.PixelMap | undefined = undefined;
  onAvatarUpdated: (() => void) | undefined = undefined;

  constructor() {
    this.settings.styleOptions = this.buildStyleOptions();
    this.settings.selectedChatStyle = SettingsStore.getChatStyle();
  }

  private buildStyleOptions(): ChatStyleOption[] {
    const compact: ChatStyleOption = new ChatStyleOption();
    compact.key = 'telegram-compact';
    compact.title = '紧凑气泡';
    compact.subtitle = '头像贴底，间距更紧，像 Telegram';

    const relaxed: ChatStyleOption = new ChatStyleOption();
    relaxed.key = 'card-relaxed';
    relaxed.title = '舒展卡片';
    relaxed.subtitle = '圆角更大，留白更松，视觉更轻';

    return [compact, relaxed];
  }

  async loadProfile(): Promise<void> {
    this.loading = true;
    this.errorMessage = '';
    try {
      this.settings.selectedChatStyle = SettingsStore.getChatStyle();
      this.profile = await this.userService.getMyUserInfo();
      this.loading = false;
      void this.loadAvatar();
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || 'load profile failed';
      this.profile = new UserProfile();
      this.avatarImage = undefined;
      this.loading = false;
    }
  }

  private async loadAvatar(): Promise<void> {
    if (this.profile.avatarUrl.length === 0) {
      this.avatarImage = undefined;
      if (this.onAvatarUpdated !== undefined) {
        this.onAvatarUpdated();
      }
      return;
    }
    const avatar: image.PixelMap | undefined = await this.avatarService.loadAvatar(this.profile.avatarUrl);
    if (avatar === undefined) {
      return;
    }
    this.avatarImage = avatar;
    if (this.onAvatarUpdated !== undefined) {
      this.onAvatarUpdated();
    }
  }

  selectChatStyle(styleKey: string): void {
    this.settings.selectedChatStyle = styleKey;
    SettingsStore.saveChatStyle(styleKey);
  }

  logout(): void {
    CryptoTokenStore.clearToken();
  }
}
