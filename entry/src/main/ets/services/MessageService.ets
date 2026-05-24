import { MessageItem } from '../models/ChatModels';
import { ApiClient } from './ApiClient';
import { AvatarImageService } from './AvatarImageService';
import {
  decodeSendMessage,
  decodeListMessage,
  decodeListMessageByMidSeq,
  decodeListMessageBySeq,
  encodeSendMessageSend,
  encodeListMessageByMidSeqSend,
  encodeListMessageSend,
  encodeListMessageBySeqSend,
  ListMessageByMidSeq,
  ListMessageByMidSeqSend,
  ListMessage,
  ListMessageSend,
  ListMessageBySeq,
  ListMessageBySeqSend,
  Msg,
  SendMessage,
  SendMessageContent,
  SendMessageSend,
  Status,
  UINT64_MAX_SENTINEL
} from '../generated/proto/msg';

const DEFAULT_START_SEQ: number = 0;
const HISTORY_PAGE_SIZE: number = 30;
const DEFAULT_MID_SEQ_UNKNOWN: number = 0;
const CONTENT_TYPE_TEXT: number = 1;

export class MessageService {
  private randomHex(length: number): string {
    const chars: string = '0123456789abcdef';
    let result: string = '';
    for (let i = 0; i < length; i++) {
      const index: number = Math.floor(Math.random() * chars.length);
      result += chars[index];
    }
    return result;
  }

  private createMessageId(): string {
    const segment1: string = this.randomHex(8);
    const segment2: string = this.randomHex(4);
    const segment3: string = `4${this.randomHex(3)}`;
    const segment4: string = `${(8 + Math.floor(Math.random() * 4)).toString(16)}${this.randomHex(3)}`;
    const segment5: string = this.randomHex(12);
    return `${segment1}${segment2}${segment3}${segment4}${segment5}`;
  }

  private toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
    const buffer: ArrayBuffer = new ArrayBuffer(bytes.byteLength);
    const view: Uint8Array = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      view[i] = bytes[i];
    }
    return buffer;
  }

  private buildQuotedSummary(source: Msg): string {
    const quoteText: string = source.content?.quoteMsgText ?? '';
    if (quoteText.length > 0) {
      return quoteText;
    }
    const quoteImageName: string = source.content?.quoteImageName ?? '';
    if (quoteImageName.length > 0) {
      return `[图片] ${quoteImageName}`;
    }
    const quoteImageUrl: string = source.content?.quoteImageUrl ?? '';
    if (quoteImageUrl.length > 0) {
      return '[图片]';
    }
    const quoteVideoUrl: string = source.content?.quoteVideoUrl ?? '';
    if (quoteVideoUrl.length > 0) {
      return '[视频]';
    }
    return '';
  }

  private toMessageItem(source: Msg): MessageItem {
    const target: MessageItem = new MessageItem();
    target.msgId = source.msgId ?? '';
    target.chatId = source.sender?.chatId ?? '';
    target.senderId = source.sender?.chatId ?? '';
    target.senderName = source.sender?.name ?? '';
    target.senderAvatarUrl = AvatarImageService.normalizeAvatarUrl(source.sender?.avatarUrl ?? '');
    target.direction = source.direction ?? '';
    target.contentText = source.content?.text ?? source.content?.tip ?? '';
    target.rawText = target.contentText;
    target.quoteMsgId = source.quoteMsgId ?? '';
    target.quotedText = this.buildQuotedSummary(source);
    target.hasQuote = target.quoteMsgId.length > 0 && target.quotedText.length > 0;
    target.sendTime = source.sendTime ?? 0;
    target.msgSeq = source.msgSeq ?? 0;
    target.contentType = source.contentType ?? 0;
    target.isSelf = target.direction === 'right';
    return target;
  }

  private ensureSuccess(status: Status | undefined, fallbackMessage: string): void {
    const statusCode: number = status?.code ?? 0;
    if (statusCode === 1) {
      return;
    }
    throw new Error(status?.msg ?? fallbackMessage);
  }

  private toMessageItems(sourceList: Msg[] | undefined): MessageItem[] {
    const result: MessageItem[] = [];
    const list: Msg[] = sourceList ?? [];
    for (let i = 0; i < list.length; i++) {
      const source: Msg | undefined = list[i];
      if (source !== undefined) {
        result.push(this.toMessageItem(source));
      }
    }
    return result;
  }

  async listMessageBySeq(chatId: string, chatType: number, msgSeq: number = DEFAULT_START_SEQ): Promise<MessageItem[]> {
    const requestBody: ListMessageBySeqSend = new ListMessageBySeqSend();
    requestBody.msgSeq = msgSeq;
    requestBody.chatType = chatType;
    requestBody.chatId = chatId;

    const binaryBody: Uint8Array = encodeListMessageBySeqSend(requestBody);
    const bodyBuffer: ArrayBuffer = this.toArrayBuffer(binaryBody);
    const binaryResponse: Uint8Array = await ApiClient.postProtoWithBody('/v1/msg/list-message-by-seq', bodyBuffer);
    const decoded: ListMessageBySeq = decodeListMessageBySeq(binaryResponse);
    this.ensureSuccess(decoded.status, 'list message by seq failed');
    return this.toMessageItems(decoded.msg);
  }

  async listMessage(chatId: string, chatType: number, msgId: string, msgCount: number = HISTORY_PAGE_SIZE): Promise<MessageItem[]> {
    const requestBody: ListMessageSend = new ListMessageSend();
    requestBody.msgCount = msgCount;
    requestBody.msgId = msgId;
    requestBody.chatType = chatType;
    requestBody.chatId = chatId;

    const binaryBody: Uint8Array = encodeListMessageSend(requestBody);
    const bodyBuffer: ArrayBuffer = this.toArrayBuffer(binaryBody);
    const binaryResponse: Uint8Array = await ApiClient.postProtoWithBody('/v1/msg/list-message', bodyBuffer);
    const decoded: ListMessage = decodeListMessage(binaryResponse);
    this.ensureSuccess(decoded.status, 'list message failed');
    return this.toMessageItems(decoded.msg);
  }

  async listMessageByMidSeq(chatId: string, chatType: number, msgId: string, msgSeq: number,
    msgCount: number = HISTORY_PAGE_SIZE, unknown: number = DEFAULT_MID_SEQ_UNKNOWN): Promise<MessageItem[]> {
    if (msgId.length === 0) {
      throw new Error('quote message id is empty');
    }

    const requestBody: ListMessageByMidSeqSend = new ListMessageByMidSeqSend();
    requestBody.msgSeq = msgSeq > 0 ? msgSeq : DEFAULT_START_SEQ;
    requestBody.chatType = chatType;
    requestBody.chatId = chatId;
    requestBody.unknown = unknown;
    requestBody.msgCount = msgCount;
    requestBody.msgId = msgId;

    const binaryBody: Uint8Array = encodeListMessageByMidSeqSend(requestBody);
    const bodyBuffer: ArrayBuffer = this.toArrayBuffer(binaryBody);
    const binaryResponse: Uint8Array = await ApiClient.postProtoWithBody('/v1/msg/list-message-by-mid-seq', bodyBuffer);
    const decoded: ListMessageByMidSeq = decodeListMessageByMidSeq(binaryResponse);
    this.ensureSuccess(decoded.status, 'list message by mid seq failed');
    return this.toMessageItems(decoded.msg);
  }

  async listMessageByMidSeqFromMaxSeq(chatId: string, chatType: number, msgId: string,
    msgCount: number = HISTORY_PAGE_SIZE): Promise<MessageItem[]> {
    return await this.listMessageByMidSeq(chatId, chatType, msgId, UINT64_MAX_SENTINEL, msgCount, DEFAULT_MID_SEQ_UNKNOWN);
  }

  async sendTextMessage(chatId: string, chatType: number, text: string): Promise<void> {
    const trimmedText: string = text.trim();
    if (chatId.length === 0) {
      throw new Error('chat id is empty');
    }
    if (trimmedText.length === 0) {
      throw new Error('message text is empty');
    }

    const content: SendMessageContent = new SendMessageContent();
    content.text = trimmedText;

    const requestBody: SendMessageSend = new SendMessageSend();
    requestBody.msgId = this.createMessageId();
    requestBody.chatId = chatId;
    requestBody.chatType = chatType;
    requestBody.content = content;
    requestBody.contentType = CONTENT_TYPE_TEXT;

    const binaryBody: Uint8Array = encodeSendMessageSend(requestBody);
    const bodyBuffer: ArrayBuffer = this.toArrayBuffer(binaryBody);
    const binaryResponse: Uint8Array = await ApiClient.postProtoWithBody('/v1/msg/send-message', bodyBuffer);
    const decoded: SendMessage = decodeSendMessage(binaryResponse);
    this.ensureSuccess(decoded.status, 'send message failed');
  }
}
