import image from '@ohos.multimedia.image';
import { ChatStyleOption, MeSettingsState, UserProfile, WebSocketLogViewItem, WebSocketStatusViewState } from '../models/MeModels';
import { AvatarImageService } from '../services/AvatarImageService';
import { CryptoTokenStore } from '../services/CryptoTokenStore';
import { SettingsStore } from '../services/SettingsStore';
import { UserService } from '../services/UserService';
import { WebSocketManager } from '../services/WebSocketManager';
import {
  WebSocketConnectionListener,
  WebSocketConnectionState,
  WebSocketLogEntry,
  WebSocketLogListener
} from '../models/WebSocketModels';

export class MeViewModel {
  private readonly userService = new UserService();
  private readonly avatarService = new AvatarImageService();
  private readonly webSocketManager = WebSocketManager.getInstance();
  private readonly onLogUpdated: WebSocketLogListener = (entries: WebSocketLogEntry[]): void => {
    this.webSocketLogs = this.mapLogEntries(entries);
    if (this.onWebSocketLogsUpdated !== undefined) {
      this.onWebSocketLogsUpdated();
    }
  };
  private readonly onConnectionUpdated: WebSocketConnectionListener = (state: WebSocketConnectionState): void => {
    this.webSocketStatus.status = state.status;
    this.webSocketStatus.message = state.message;
    this.webSocketStatus.reconnectAttempt = state.reconnectAttempt;
    this.webSocketStatus.started = this.webSocketManager.isStarted();
    if (this.onWebSocketStatusUpdated !== undefined) {
      this.onWebSocketStatusUpdated();
    }
  };

  loading: boolean = false;
  errorMessage: string = '';
  profile: UserProfile = new UserProfile();
  settings: MeSettingsState = new MeSettingsState();
  avatarImage: image.PixelMap | undefined = undefined;
  webSocketLogs: WebSocketLogViewItem[] = [];
  webSocketStatus: WebSocketStatusViewState = new WebSocketStatusViewState();
  onAvatarUpdated: (() => void) | undefined = undefined;
  onWebSocketLogsUpdated: (() => void) | undefined = undefined;
  onWebSocketStatusUpdated: (() => void) | undefined = undefined;

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

  bindWebSocketLogs(): void {
    this.webSocketManager.addLogListener(this.onLogUpdated);
    this.webSocketManager.addConnectionListener(this.onConnectionUpdated);
  }

  unbindWebSocketLogs(): void {
    this.webSocketManager.removeLogListener(this.onLogUpdated);
    this.webSocketManager.removeConnectionListener(this.onConnectionUpdated);
  }

  clearWebSocketLogs(): void {
    this.webSocketManager.clearLogs();
  }

  async startWebSocket(): Promise<void> {
    await this.webSocketManager.start();
    this.webSocketStatus.started = this.webSocketManager.isStarted();
  }

  async stopWebSocket(): Promise<void> {
    await this.webSocketManager.stop();
    this.webSocketStatus.started = this.webSocketManager.isStarted();
  }

  async restartWebSocket(): Promise<void> {
    await this.webSocketManager.stop();
    await this.webSocketManager.start();
    this.webSocketStatus.started = this.webSocketManager.isStarted();
  }

  logout(): void {
    void this.webSocketManager.stop();
    CryptoTokenStore.clearToken();
  }

  private mapLogEntries(entries: WebSocketLogEntry[]): WebSocketLogViewItem[] {
    const mapped: WebSocketLogViewItem[] = [];
    for (let i = 0; i < entries.length; i++) {
      const source: WebSocketLogEntry = entries[i];
      const item: WebSocketLogViewItem = new WebSocketLogViewItem();
      item.id = source.id;
      item.timeText = this.formatLogTime(source.timestamp);
      item.level = source.level;
      item.tag = source.tag;
      item.message = source.message;
      mapped.push(item);
    }
    return mapped;
  }

  private formatLogTime(timestamp: number): string {
    if (timestamp <= 0) {
      return '';
    }
    const date: Date = new Date(timestamp);
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();
    const second: number = date.getSeconds();
    const ms: number = date.getMilliseconds();
    const hourText: string = hour < 10 ? `0${hour}` : `${hour}`;
    const minuteText: string = minute < 10 ? `0${minute}` : `${minute}`;
    const secondText: string = second < 10 ? `0${second}` : `${second}`;
    let msText: string = `${ms}`;
    while (msText.length < 3) {
      msText = `0${msText}`;
    }
    return `${hourText}:${minuteText}:${secondText}.${msText}`;
  }
}
