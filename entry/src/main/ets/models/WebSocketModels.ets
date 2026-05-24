import { MessageItem } from './ChatModels';

export class WebSocketRouteConfig {
  websocketUrl: string = '';
}

export class WebSocketConfigureDistribution {
  audioUrl: string = '';
  fileUrl: string = '';
  imageUrl: string = '';
  serverUrl: string = '';
  shareUrl: string = '';
  videoUrl: string = '';
  websocketUrl: string = '';
}

export class WebSocketConfigureDistributionResponse {
  code: number = 0;
  msg: string = '';
  data: WebSocketConfigureDistribution = new WebSocketConfigureDistribution();
}

export class WsLoginPayload {
  userId: string = '';
  token: string = '';
  platform: string = '';
  deviceId: string = '';
}

export class WsDraftPayload {
  chatId: string = '';
  input: string = '';
  deviceId: string = '';
}

export class WsRequestEnvelope<T> {
  seq: string = '';
  cmd: string = '';
  data: T | undefined = undefined;
}

export enum WebSocketConnectionStatus {
  IDLE = 'idle',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  ERROR = 'error'
}

export class WebSocketConnectionState {
  status: WebSocketConnectionStatus = WebSocketConnectionStatus.IDLE;
  message: string = '';
  reconnectAttempt: number = 0;
}

export enum WebSocketEventType {
  MESSAGE = 'message',
  MESSAGE_EDITED = 'message_edited',
  DRAFT = 'draft',
  STREAM = 'stream',
  BOT_BOARD = 'bot_board',
  UNKNOWN = 'unknown'
}

export class WebSocketDraftUpdate {
  chatId: string = '';
  input: string = '';
  timestamp: number = 0;
}

export class WebSocketStreamUpdate {
  msgId: string = '';
  recvId: string = '';
  chatId: string = '';
  content: string = '';
}

export class WebSocketBotBoardUpdate {
  botId: string = '';
  chatId: string = '';
  chatType: number = 0;
  content: string = '';
  contentType: number = 0;
  botName: string = '';
  lastUpdateTime: number = 0;
}

export class WebSocketEvent {
  type: WebSocketEventType = WebSocketEventType.UNKNOWN;
  message: MessageItem | undefined = undefined;
  draft: WebSocketDraftUpdate | undefined = undefined;
  stream: WebSocketStreamUpdate | undefined = undefined;
  botBoard: WebSocketBotBoardUpdate | undefined = undefined;
}

export class WebSocketLogEntry {
  id: string = '';
  timestamp: number = 0;
  level: string = 'info';
  tag: string = 'ws';
  message: string = '';
}

export type WebSocketConnectionListener = (state: WebSocketConnectionState) => void;
export type WebSocketEventListener = (event: WebSocketEvent) => void;
export type WebSocketLogListener = (entries: WebSocketLogEntry[]) => void;
