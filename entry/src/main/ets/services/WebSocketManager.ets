import { UserService } from './UserService';
import { WebSocketService } from './WebSocketService';
import {
  WebSocketConnectionListener,
  WebSocketConnectionState,
  WebSocketEvent,
  WebSocketEventListener,
  WebSocketLogEntry,
  WebSocketLogListener
} from '../models/WebSocketModels';
import { MessageItem } from '../models/ChatModels';
import { WebSocketLogService } from './WebSocketLogService';

export class WebSocketManager {
  private static instance: WebSocketManager | undefined = undefined;
  private readonly userService: UserService = new UserService();
  private readonly webSocketService: WebSocketService = new WebSocketService();
  private readonly logService: WebSocketLogService = WebSocketLogService.getInstance();
  private started: boolean = false;
  private currentUserId: string = '';

  static getInstance(): WebSocketManager {
    if (WebSocketManager.instance === undefined) {
      WebSocketManager.instance = new WebSocketManager();
    }
    return WebSocketManager.instance;
  }

  private constructor() {
  }

  async start(): Promise<void> {
    if (this.started) {
      this.logService.info('manager/start', 'skip start because manager already started');
      return;
    }
    this.logService.info('manager/start', 'start requested');
    const profile = await this.userService.getMyUserInfo();
    const userId: string = profile.id;
    if (userId.length === 0) {
      this.logService.error('manager/start', 'current user id is empty');
      throw new Error('current user id is empty');
    }
    this.currentUserId = userId;
    this.logService.info('manager/start', `resolved currentUserId=${userId}`);
    await this.webSocketService.connect(userId);
    this.started = true;
    this.logService.info('manager/start', 'manager marked as started');
  }

  async stop(): Promise<void> {
    this.logService.info('manager/stop', 'stop requested');
    this.started = false;
    this.currentUserId = '';
    await this.webSocketService.disconnect();
  }

  addConnectionListener(listener: WebSocketConnectionListener): void {
    this.webSocketService.addConnectionListener(listener);
  }

  removeConnectionListener(listener: WebSocketConnectionListener): void {
    this.webSocketService.removeConnectionListener(listener);
  }

  addEventListener(listener: WebSocketEventListener): void {
    this.webSocketService.addEventListener(listener);
  }

  removeEventListener(listener: WebSocketEventListener): void {
    this.webSocketService.removeEventListener(listener);
  }

  getConnectionState(): WebSocketConnectionState {
    return this.webSocketService.getState();
  }

  async sendDraft(chatId: string, input: string): Promise<void> {
    if (!this.started) {
      return;
    }
    await this.webSocketService.sendDraft(chatId, input);
  }

  isCurrentUserMessage(item: MessageItem): boolean {
    return item.senderId.length > 0 && item.senderId === this.currentUserId;
  }

  isStarted(): boolean {
    return this.started;
  }

  addLogListener(listener: WebSocketLogListener): void {
    this.logService.addListenerAndEmit(listener);
  }

  removeLogListener(listener: WebSocketLogListener): void {
    this.logService.removeListenerByRef(listener);
  }

  getLogs(): WebSocketLogEntry[] {
    return this.logService.getEntries();
  }

  clearLogs(): void {
    this.logService.clear();
  }
}
