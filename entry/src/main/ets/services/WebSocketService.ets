import webSocket from '@ohos.net.webSocket';
import util from '@ohos.util';
import { AsyncCallback, BusinessError } from '@ohos.base';
import { AppConfig } from './AppConfig';
import { CryptoTokenStore } from './CryptoTokenStore';
import { MiscService } from './MiscService';
import {
  WebSocketBotBoardUpdate,
  WebSocketConnectionListener,
  WebSocketConnectionState,
  WebSocketConnectionStatus,
  WebSocketDraftUpdate,
  WebSocketEvent,
  WebSocketEventListener,
  WebSocketEventType,
  WebSocketRouteConfig,
  WebSocketStreamUpdate,
  WsDraftPayload,
  WsLoginPayload,
  WsRequestEnvelope
} from '../models/WebSocketModels';
import {
  decodeBotBoardMessage,
  decodeDraftInput,
  decodeEditMessage,
  decodeHeartbeatAck,
  decodePushMessage,
  decodeStreamMessage,
  HeartbeatAck
} from '../generated/proto/chat_ws_go';
import { MessageItem } from '../models/ChatModels';
import { AvatarImageService } from './AvatarImageService';

const UTF8_ENCODER: util.TextEncoder = util.TextEncoder.create('utf-8');
const LOGIN_CMD: string = 'login';
const HEARTBEAT_CMD: string = 'heartbeat';
const DRAFT_CMD: string = 'inputInfo';
const WINDOWS_PLATFORM: string = 'windows';
const HEARTBEAT_INTERVAL_MS: number = 30000;
const MAX_RECONNECT_DELAY_MS: number = 30000;
const BASE_RECONNECT_DELAY_MS: number = 2000;

class EmptyWsPayload {
}

export class WebSocketService {
  private readonly routeService: MiscService = new MiscService();
  private socket: webSocket.WebSocket | undefined = undefined;
  private routeConfig: WebSocketRouteConfig | undefined = undefined;
  private heartbeatTimer: number = -1;
  private reconnectTimer: number = -1;
  private shouldReconnect: boolean = false;
  private isConnecting: boolean = false;
  private currentUserId: string = '';
  private currentToken: string = '';
  private currentPlatform: string = WINDOWS_PLATFORM;
  private reconnectAttempt: number = 0;
  private deviceId: string = AppConfig.DEVICE_ID;
  private state: WebSocketConnectionState = new WebSocketConnectionState();
  private connectionListeners: WebSocketConnectionListener[] = [];
  private eventListeners: WebSocketEventListener[] = [];
  private readonly onOpenCallback: AsyncCallback<Object> = (_err, _value) => {
    this.isConnecting = false;
    this.reconnectAttempt = 0;
    this.updateState(WebSocketConnectionStatus.CONNECTED, '');
    void this.sendLogin();
    this.startHeartbeat();
  };
  private readonly onMessageCallback: AsyncCallback<string | ArrayBuffer> = (_err, value) => {
    if (typeof value === 'string') {
      return;
    }
    const binary: Uint8Array = new Uint8Array(value);
    this.handleBinaryMessage(binary);
  };
  private readonly onCloseCallback: AsyncCallback<webSocket.CloseResult> = (_err, value) => {
    this.stopHeartbeat();
    this.socket = undefined;
    this.isConnecting = false;
    this.updateState(WebSocketConnectionStatus.DISCONNECTED, value?.reason ?? '');
    this.scheduleReconnect();
  };
  private readonly onErrorCallback = (error: BusinessError): void => {
    this.stopHeartbeat();
    this.isConnecting = false;
    this.updateState(WebSocketConnectionStatus.ERROR, error.message ?? 'websocket error');
    this.scheduleReconnect();
  };

  private makeSeq(): string {
    const timestamp: string = Date.now().toString(16);
    const random: string = Math.floor(Math.random() * 0xffffffff).toString(16);
    return `${timestamp}${random}`;
  }

  private updateState(status: WebSocketConnectionStatus, message: string): void {
    this.state.status = status;
    this.state.message = message;
    this.state.reconnectAttempt = this.reconnectAttempt;
    const snapshot: WebSocketConnectionState = new WebSocketConnectionState();
    snapshot.status = this.state.status;
    snapshot.message = this.state.message;
    snapshot.reconnectAttempt = this.state.reconnectAttempt;
    for (let i = 0; i < this.connectionListeners.length; i++) {
      this.connectionListeners[i](snapshot);
    }
  }

  private emitEvent(event: WebSocketEvent): void {
    for (let i = 0; i < this.eventListeners.length; i++) {
      this.eventListeners[i](event);
    }
  }

  private addListener<T>(target: T[], listener: T): void {
    for (let i = 0; i < target.length; i++) {
      if (target[i] === listener) {
        return;
      }
    }
    target.push(listener);
  }

  private removeListener<T>(target: T[], listener: T): void {
    const next: T[] = [];
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== listener) {
        next.push(target[i]);
      }
    }
    target.length = 0;
    for (let i = 0; i < next.length; i++) {
      target.push(next[i]);
    }
  }

  private mapPushMessageToItem(source: import('../generated/proto/chat_ws_go').WsMsg, isEdited: boolean = false): MessageItem {
    const item: MessageItem = new MessageItem();
    item.msgId = source.msgId ?? '';
    item.chatId = source.chatId ?? '';
    item.senderId = source.sender?.chatId ?? '';
    item.senderName = source.sender?.name ?? '';
    item.senderAvatarUrl = AvatarImageService.normalizeAvatarUrl(source.sender?.avatarUrl ?? '');
    item.direction = source.sender?.chatId === this.currentUserId ? 'right' : 'left';
    item.contentText = source.content?.text ?? source.content?.callText ?? source.content?.postTitle ?? '';
    item.rawText = item.contentText;
    item.quoteMsgId = source.quoteMsgId ?? '';
    item.quotedText = source.content?.quoteMsgText ?? '';
    item.hasQuote = item.quoteMsgId.length > 0 && item.quotedText.length > 0;
    item.sendTime = isEdited ? (source.editTime ?? source.timestamp ?? 0) : (source.timestamp ?? 0);
    item.msgSeq = source.msgSeq ?? 0;
    item.contentType = source.contentType ?? 0;
    item.isSelf = item.direction === 'right';
    return item;
  }

  private handleBinaryMessage(binary: Uint8Array): void {
    let ack: HeartbeatAck;
    try {
      ack = decodeHeartbeatAck(binary);
    } catch (_error) {
      return;
    }

    const cmd: string = ack.info?.cmd ?? '';
    if (cmd.length === 0) {
      return;
    }

    if (cmd === 'heartbeat_ack' || cmd === 'login_ack') {
      return;
    }

    if (cmd === 'push_message') {
      const decoded = decodePushMessage(binary);
      if (decoded.data?.msg === undefined) {
        return;
      }
      const event: WebSocketEvent = new WebSocketEvent();
      event.type = WebSocketEventType.MESSAGE;
      event.message = this.mapPushMessageToItem(decoded.data.msg, false);
      this.emitEvent(event);
      return;
    }

    if (cmd === 'edit_message') {
      const decoded = decodeEditMessage(binary);
      if (decoded.data?.msg === undefined) {
        return;
      }
      const event: WebSocketEvent = new WebSocketEvent();
      event.type = WebSocketEventType.MESSAGE_EDITED;
      event.message = this.mapPushMessageToItem(decoded.data.msg, true);
      this.emitEvent(event);
      return;
    }

    if (cmd === 'draft_input') {
      const decoded = decodeDraftInput(binary);
      if (decoded.data?.draft === undefined) {
        return;
      }
      const draft: WebSocketDraftUpdate = new WebSocketDraftUpdate();
      draft.chatId = decoded.data.draft.chatId ?? '';
      draft.input = decoded.data.draft.input ?? '';
      draft.timestamp = Date.now();
      const event: WebSocketEvent = new WebSocketEvent();
      event.type = WebSocketEventType.DRAFT;
      event.draft = draft;
      this.emitEvent(event);
      return;
    }

    if (cmd === 'stream_message') {
      const decoded = decodeStreamMessage(binary);
      if (decoded.data?.msg === undefined) {
        return;
      }
      const stream: WebSocketStreamUpdate = new WebSocketStreamUpdate();
      stream.msgId = decoded.data.msg.msgId ?? '';
      stream.recvId = decoded.data.msg.recvId ?? '';
      stream.chatId = decoded.data.msg.chatId ?? '';
      stream.content = decoded.data.msg.content ?? '';
      const event: WebSocketEvent = new WebSocketEvent();
      event.type = WebSocketEventType.STREAM;
      event.stream = stream;
      this.emitEvent(event);
      return;
    }

    if (cmd === 'bot_board_message') {
      const decoded = decodeBotBoardMessage(binary);
      if (decoded.data?.board === undefined) {
        return;
      }
      const board: WebSocketBotBoardUpdate = new WebSocketBotBoardUpdate();
      board.botId = decoded.data.board.botId ?? '';
      board.chatId = decoded.data.board.chatId ?? '';
      board.chatType = decoded.data.board.chatType ?? 0;
      board.content = decoded.data.board.content ?? '';
      board.contentType = decoded.data.board.contentType ?? 0;
      board.botName = decoded.data.board.botName ?? '';
      board.lastUpdateTime = decoded.data.board.lastUpdateTime ?? 0;
      const event: WebSocketEvent = new WebSocketEvent();
      event.type = WebSocketEventType.BOT_BOARD;
      event.botBoard = board;
      this.emitEvent(event);
      return;
    }
  }

  private toArrayBuffer(data: Uint8Array): ArrayBuffer {
    const buffer: ArrayBuffer = new ArrayBuffer(data.byteLength);
    const view: Uint8Array = new Uint8Array(buffer);
    for (let i = 0; i < data.byteLength; i++) {
      view[i] = data[i];
    }
    return buffer;
  }

  private async sendTextEnvelope<T>(cmd: string, data: T): Promise<void> {
    if (this.socket === undefined) {
      throw new Error('websocket is not connected');
    }
    const envelope: WsRequestEnvelope<T> = new WsRequestEnvelope<T>();
    envelope.seq = this.makeSeq();
    envelope.cmd = cmd;
    envelope.data = data;
    try {
      await this.socket.send(JSON.stringify(envelope));
    } catch (error) {
      const err: Error = error as Error;
      throw new Error(err.message || 'websocket send failed');
    }
  }

  private async sendLogin(): Promise<void> {
    const payload: WsLoginPayload = new WsLoginPayload();
    payload.userId = this.currentUserId;
    payload.token = this.currentToken;
    payload.platform = this.currentPlatform;
    payload.deviceId = this.deviceId;
    await this.sendTextEnvelope<WsLoginPayload>(LOGIN_CMD, payload);
  }

  private async sendHeartbeat(): Promise<void> {
    await this.sendTextEnvelope<EmptyWsPayload>(HEARTBEAT_CMD, new EmptyWsPayload());
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer >= 0) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = -1;
    }
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      void this.sendHeartbeat();
    }, HEARTBEAT_INTERVAL_MS);
  }

  private scheduleReconnect(): void {
    if (!this.shouldReconnect || this.currentUserId.length === 0 || this.currentToken.length === 0) {
      return;
    }
    if (this.reconnectTimer >= 0) {
      return;
    }
    this.reconnectAttempt += 1;
    const shift: number = this.reconnectAttempt > 4 ? 4 : this.reconnectAttempt;
    const delay: number = Math.min(BASE_RECONNECT_DELAY_MS * Math.pow(2, shift - 1), MAX_RECONNECT_DELAY_MS);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = -1;
      void this.connect(this.currentUserId);
    }, delay);
  }

  private clearReconnect(): void {
    if (this.reconnectTimer >= 0) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = -1;
    }
  }

  private bindSocketEvents(socket: webSocket.WebSocket): void {
    socket.on('open', this.onOpenCallback);
    socket.on('message', this.onMessageCallback);
    socket.on('close', this.onCloseCallback);
    socket.on('error', this.onErrorCallback);
  }

  private unbindSocketEvents(socket: webSocket.WebSocket): void {
    socket.off('open', this.onOpenCallback);
    socket.off('message', this.onMessageCallback);
    socket.off('close', this.onCloseCallback);
    socket.off('error', this.onErrorCallback);
  }

  private async ensureRouteConfig(): Promise<void> {
    if (this.routeConfig !== undefined && this.routeConfig.websocketUrl.length > 0) {
      return;
    }
    this.routeConfig = await this.routeService.getWebSocketRoute();
  }

  async connect(userId: string): Promise<void> {
    const token: string = CryptoTokenStore.getToken();
    if (userId.length === 0) {
      throw new Error('user id is empty');
    }
    if (token.length === 0) {
      throw new Error('token is empty');
    }
    if (this.state.status === WebSocketConnectionStatus.CONNECTED || this.isConnecting) {
      return;
    }

    this.currentUserId = userId;
    this.currentToken = token;
    this.currentPlatform = WINDOWS_PLATFORM;
    this.shouldReconnect = true;
    this.clearReconnect();
    this.stopHeartbeat();
    this.isConnecting = true;
    this.updateState(WebSocketConnectionStatus.CONNECTING, '');

    await this.ensureRouteConfig();
    const socket: webSocket.WebSocket = webSocket.createWebSocket();
    this.bindSocketEvents(socket);
    this.socket = socket;
    try {
      await socket.connect(this.routeConfig?.websocketUrl ?? '', {
        header: {
          token: token,
          'device-id': this.deviceId
        }
      });
    } catch (error) {
      this.unbindSocketEvents(socket);
      this.socket = undefined;
      this.isConnecting = false;
      const err: Error = error as Error;
      this.updateState(WebSocketConnectionStatus.ERROR, err.message || 'websocket connect failed');
      this.scheduleReconnect();
    }
  }

  async disconnect(): Promise<void> {
    this.shouldReconnect = false;
    this.clearReconnect();
    this.stopHeartbeat();
    this.isConnecting = false;
    const socket: webSocket.WebSocket | undefined = this.socket;
    this.socket = undefined;
    if (socket !== undefined) {
      this.unbindSocketEvents(socket);
      try {
        await socket.close({ code: 1000, reason: 'disconnect' });
      } catch (_error) {
      }
    }
    this.updateState(WebSocketConnectionStatus.DISCONNECTED, '');
  }

  async sendDraft(chatId: string, input: string): Promise<void> {
    if (chatId.length === 0) {
      return;
    }
    const payload: WsDraftPayload = new WsDraftPayload();
    payload.chatId = chatId;
    payload.input = input;
    payload.deviceId = this.deviceId;
    await this.sendTextEnvelope<WsDraftPayload>(DRAFT_CMD, payload);
  }

  addConnectionListener(listener: WebSocketConnectionListener): void {
    this.addListener<WebSocketConnectionListener>(this.connectionListeners, listener);
    listener(this.state);
  }

  removeConnectionListener(listener: WebSocketConnectionListener): void {
    this.removeListener<WebSocketConnectionListener>(this.connectionListeners, listener);
  }

  addEventListener(listener: WebSocketEventListener): void {
    this.addListener<WebSocketEventListener>(this.eventListeners, listener);
  }

  removeEventListener(listener: WebSocketEventListener): void {
    this.removeListener<WebSocketEventListener>(this.eventListeners, listener);
  }

  getState(): WebSocketConnectionState {
    return this.state;
  }
}
