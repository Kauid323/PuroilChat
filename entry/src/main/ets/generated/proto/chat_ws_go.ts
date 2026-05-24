import util from '@ohos.util';

const UTF8_DECODER: util.TextDecoder = util.TextDecoder.create('utf-8');

export class WsInfo {
  seq?: string;
  cmd?: string;
}

export class WsTag {
  id?: number;
  text?: string;
  color?: string;
}

export class WsCmd {
  id?: number;
  name?: string;
}

export class WsContent {
  text?: string;
  buttons?: string;
  imageUrl?: string;
  fileName?: string;
  fileUrl?: string;
  form?: string;
  quoteMsgText?: string;
  stickerUrl?: string;
  postId?: string;
  postTitle?: string;
  postContent?: string;
  postContentType?: string;
  expressionId?: string;
  fileSize?: number;
  videoUrl?: string;
  audioUrl?: string;
  audioTime?: number;
  stickerItemId?: number;
  stickerPackId?: number;
  callText?: string;
  callStatusText?: string;
  width?: number;
  height?: number;
}

export class WsSender {
  chatId?: string;
  chatType?: number;
  name?: string;
  avatarUrl?: string;
  tagOld?: string[];
  tag?: WsTag[];
}

export class WsMsg {
  msgId?: string;
  sender?: WsSender;
  recvId?: string;
  chatId?: string;
  chatType?: number;
  content?: WsContent;
  contentType?: number;
  timestamp?: number;
  cmd?: WsCmd;
  deleteTime?: number;
  quoteMsgId?: string;
  msgSeq?: number;
  editTime?: number;
}

export class HeartbeatAck {
  info?: WsInfo;
}

export class PushMessageData {
  any?: string;
  msg?: WsMsg;
}

export class PushMessage {
  info?: WsInfo;
  data?: PushMessageData;
}

export class EditMessage {
  info?: WsInfo;
  data?: PushMessageData;
}

export class DraftInputDraft {
  chatId?: string;
  input?: string;
}

export class DraftInputData {
  any?: string;
  draft?: DraftInputDraft;
}

export class DraftInput {
  info?: WsInfo;
  data?: DraftInputData;
}

export class StreamMsg {
  msgId?: string;
  recvId?: string;
  chatId?: string;
  content?: string;
}

export class StreamMessageData {
  any?: string;
  msg?: StreamMsg;
}

export class StreamMessage {
  info?: WsInfo;
  data?: StreamMessageData;
}

export class BotBoardContent {
  botId?: string;
  chatId?: string;
  chatType?: number;
  content?: string;
  contentType?: number;
  lastUpdateTime?: number;
  botName?: string;
}

export class BotBoardData {
  any?: string;
  board?: BotBoardContent;
}

export class BotBoardMessage {
  info?: WsInfo;
  data?: BotBoardData;
}

class ProtoReader {
  private bytes: Uint8Array;
  private offset: number = 0;

  constructor(bytes: Uint8Array) {
    this.bytes = bytes;
  }

  isEnd(end: number): boolean {
    return this.offset >= end;
  }

  readVarint(): number {
    let result: number = 0;
    let shift: number = 0;
    while (shift < 35) {
      const byteValue: number = this.readByte();
      result |= (byteValue & 0x7f) << shift;
      if ((byteValue & 0x80) === 0) {
        return result >>> 0;
      }
      shift += 7;
    }

    let extraResult: number = result >>> 0;
    let factor: number = Math.pow(2, shift);
    while (true) {
      const byteValue: number = this.readByte();
      extraResult += (byteValue & 0x7f) * factor;
      if ((byteValue & 0x80) === 0) {
        return extraResult;
      }
      factor *= 128;
    }
  }

  readInt64AsNumber(): number {
    let result: number = 0;
    let factor: number = 1;
    for (let i = 0; i < 10; i++) {
      const byteValue: number = this.readByte();
      result += (byteValue & 0x7f) * factor;
      if ((byteValue & 0x80) === 0) {
        return result;
      }
      factor *= 128;
    }
    return result;
  }

  readString(): string {
    const length: number = this.readVarint();
    const bytes: Uint8Array = this.readBytes(length);
    return UTF8_DECODER.decodeToString(bytes);
  }

  readSubMessageEnd(): number {
    const length: number = this.readVarint();
    return this.offset + length;
  }

  skipField(wireType: number): void {
    if (wireType === 0) {
      this.readInt64AsNumber();
      return;
    }
    if (wireType === 1) {
      this.offset += 8;
      return;
    }
    if (wireType === 2) {
      const length: number = this.readVarint();
      this.offset += length;
      return;
    }
    if (wireType === 5) {
      this.offset += 4;
      return;
    }
    throw new Error(`Unsupported wire type: ${wireType}`);
  }

  private readBytes(length: number): Uint8Array {
    const start: number = this.offset;
    const end: number = start + length;
    this.offset = end;
    return this.bytes.subarray(start, end);
  }

  private readByte(): number {
    const value: number = this.bytes[this.offset];
    this.offset += 1;
    return value;
  }
}

function decodeWsInfoFrom(reader: ProtoReader, end: number): WsInfo {
  const info: WsInfo = new WsInfo();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      info.seq = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      info.cmd = reader.readString();
      continue;
    }
    reader.skipField(wireType);
  }
  return info;
}

function decodeWsTagFrom(reader: ProtoReader, end: number): WsTag {
  const tagData: WsTag = new WsTag();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 0) {
      tagData.id = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      tagData.text = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      tagData.color = reader.readString();
      continue;
    }
    reader.skipField(wireType);
  }
  return tagData;
}

function decodeWsCmdFrom(reader: ProtoReader, end: number): WsCmd {
  const cmd: WsCmd = new WsCmd();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 0) {
      cmd.id = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      cmd.name = reader.readString();
      continue;
    }
    reader.skipField(wireType);
  }
  return cmd;
}

function decodeWsContentFrom(reader: ProtoReader, end: number): WsContent {
  const content: WsContent = new WsContent();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      content.text = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      content.buttons = reader.readString();
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      content.imageUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      content.fileName = reader.readString();
      continue;
    }
    if (fieldNumber === 5 && wireType === 2) {
      content.fileUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      content.form = reader.readString();
      continue;
    }
    if (fieldNumber === 8 && wireType === 2) {
      content.quoteMsgText = reader.readString();
      continue;
    }
    if (fieldNumber === 9 && wireType === 2) {
      content.stickerUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 10 && wireType === 2) {
      content.postId = reader.readString();
      continue;
    }
    if (fieldNumber === 11 && wireType === 2) {
      content.postTitle = reader.readString();
      continue;
    }
    if (fieldNumber === 12 && wireType === 2) {
      content.postContent = reader.readString();
      continue;
    }
    if (fieldNumber === 13 && wireType === 2) {
      content.postContentType = reader.readString();
      continue;
    }
    if (fieldNumber === 15 && wireType === 2) {
      content.expressionId = reader.readString();
      continue;
    }
    if (fieldNumber === 18 && wireType === 0) {
      content.fileSize = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 19 && wireType === 2) {
      content.videoUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 21 && wireType === 2) {
      content.audioUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 22 && wireType === 0) {
      content.audioTime = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 25 && wireType === 0) {
      content.stickerItemId = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 26 && wireType === 0) {
      content.stickerPackId = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 29 && wireType === 2) {
      content.callText = reader.readString();
      continue;
    }
    if (fieldNumber === 32 && wireType === 2) {
      content.callStatusText = reader.readString();
      continue;
    }
    if (fieldNumber === 33 && wireType === 0) {
      content.width = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 34 && wireType === 0) {
      content.height = reader.readInt64AsNumber();
      continue;
    }
    reader.skipField(wireType);
  }
  return content;
}

function decodeWsSenderFrom(reader: ProtoReader, end: number): WsSender {
  const sender: WsSender = new WsSender();
  sender.tagOld = [];
  sender.tag = [];
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      sender.chatId = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 0) {
      sender.chatType = reader.readVarint();
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      sender.name = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      sender.avatarUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 6 && wireType === 2) {
      sender.tagOld?.push(reader.readString());
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      sender.tag?.push(decodeWsTagFrom(reader, nestedEnd));
      continue;
    }
    reader.skipField(wireType);
  }
  return sender;
}

function decodeWsMsgFrom(reader: ProtoReader, end: number): WsMsg {
  const msg: WsMsg = new WsMsg();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      msg.msgId = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      msg.sender = decodeWsSenderFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      msg.recvId = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      msg.chatId = reader.readString();
      continue;
    }
    if (fieldNumber === 5 && wireType === 0) {
      msg.chatType = reader.readVarint();
      continue;
    }
    if (fieldNumber === 6 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      msg.content = decodeWsContentFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 7 && wireType === 0) {
      msg.contentType = reader.readVarint();
      continue;
    }
    if (fieldNumber === 8 && wireType === 0) {
      msg.timestamp = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 9 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      msg.cmd = decodeWsCmdFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 10 && wireType === 0) {
      msg.deleteTime = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 11 && wireType === 2) {
      msg.quoteMsgId = reader.readString();
      continue;
    }
    if (fieldNumber === 12 && wireType === 0) {
      msg.msgSeq = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 14 && wireType === 0) {
      msg.editTime = reader.readInt64AsNumber();
      continue;
    }
    reader.skipField(wireType);
  }
  return msg;
}

function decodePushMessageDataFrom(reader: ProtoReader, end: number): PushMessageData {
  const data: PushMessageData = new PushMessageData();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.any = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      data.msg = decodeWsMsgFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

function decodeDraftInputDataFrom(reader: ProtoReader, end: number): DraftInputData {
  const data: DraftInputData = new DraftInputData();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.any = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      const draft: DraftInputDraft = new DraftInputDraft();
      while (!reader.isEnd(nestedEnd)) {
        const nestedTag: number = reader.readVarint();
        const nestedFieldNumber: number = nestedTag >>> 3;
        const nestedWireType: number = nestedTag & 7;
        if (nestedFieldNumber === 1 && nestedWireType === 2) {
          draft.chatId = reader.readString();
          continue;
        }
        if (nestedFieldNumber === 2 && nestedWireType === 2) {
          draft.input = reader.readString();
          continue;
        }
        reader.skipField(nestedWireType);
      }
      data.draft = draft;
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

function decodeStreamMessageDataFrom(reader: ProtoReader, end: number): StreamMessageData {
  const data: StreamMessageData = new StreamMessageData();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.any = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      const streamMsg: StreamMsg = new StreamMsg();
      while (!reader.isEnd(nestedEnd)) {
        const nestedTag: number = reader.readVarint();
        const nestedFieldNumber: number = nestedTag >>> 3;
        const nestedWireType: number = nestedTag & 7;
        if (nestedFieldNumber === 1 && nestedWireType === 2) {
          streamMsg.msgId = reader.readString();
          continue;
        }
        if (nestedFieldNumber === 2 && nestedWireType === 2) {
          streamMsg.recvId = reader.readString();
          continue;
        }
        if (nestedFieldNumber === 3 && nestedWireType === 2) {
          streamMsg.chatId = reader.readString();
          continue;
        }
        if (nestedFieldNumber === 4 && nestedWireType === 2) {
          streamMsg.content = reader.readString();
          continue;
        }
        reader.skipField(nestedWireType);
      }
      data.msg = streamMsg;
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

function decodeBotBoardDataFrom(reader: ProtoReader, end: number): BotBoardData {
  const data: BotBoardData = new BotBoardData();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.any = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      const board: BotBoardContent = new BotBoardContent();
      while (!reader.isEnd(nestedEnd)) {
        const nestedTag: number = reader.readVarint();
        const nestedFieldNumber: number = nestedTag >>> 3;
        const nestedWireType: number = nestedTag & 7;
        if (nestedFieldNumber === 1 && nestedWireType === 2) {
          board.botId = reader.readString();
          continue;
        }
        if (nestedFieldNumber === 2 && nestedWireType === 2) {
          board.chatId = reader.readString();
          continue;
        }
        if (nestedFieldNumber === 3 && nestedWireType === 0) {
          board.chatType = reader.readVarint();
          continue;
        }
        if (nestedFieldNumber === 4 && nestedWireType === 2) {
          board.content = reader.readString();
          continue;
        }
        if (nestedFieldNumber === 5 && nestedWireType === 0) {
          board.contentType = reader.readVarint();
          continue;
        }
        if (nestedFieldNumber === 6 && nestedWireType === 0) {
          board.lastUpdateTime = reader.readInt64AsNumber();
          continue;
        }
        if (nestedFieldNumber === 7 && nestedWireType === 2) {
          board.botName = reader.readString();
          continue;
        }
        reader.skipField(nestedWireType);
      }
      data.board = board;
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

export function decodeHeartbeatAck(binary: Uint8Array): HeartbeatAck {
  const reader: ProtoReader = new ProtoReader(binary);
  const ack: HeartbeatAck = new HeartbeatAck();
  while (!reader.isEnd(binary.length)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      ack.info = decodeWsInfoFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return ack;
}

export function decodePushMessage(binary: Uint8Array): PushMessage {
  const reader: ProtoReader = new ProtoReader(binary);
  const result: PushMessage = new PushMessage();
  while (!reader.isEnd(binary.length)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.info = decodeWsInfoFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.data = decodePushMessageDataFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return result;
}

export function decodeEditMessage(binary: Uint8Array): EditMessage {
  const reader: ProtoReader = new ProtoReader(binary);
  const result: EditMessage = new EditMessage();
  while (!reader.isEnd(binary.length)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.info = decodeWsInfoFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.data = decodePushMessageDataFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return result;
}

export function decodeDraftInput(binary: Uint8Array): DraftInput {
  const reader: ProtoReader = new ProtoReader(binary);
  const result: DraftInput = new DraftInput();
  while (!reader.isEnd(binary.length)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.info = decodeWsInfoFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.data = decodeDraftInputDataFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return result;
}

export function decodeStreamMessage(binary: Uint8Array): StreamMessage {
  const reader: ProtoReader = new ProtoReader(binary);
  const result: StreamMessage = new StreamMessage();
  while (!reader.isEnd(binary.length)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.info = decodeWsInfoFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.data = decodeStreamMessageDataFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return result;
}

export function decodeBotBoardMessage(binary: Uint8Array): BotBoardMessage {
  const reader: ProtoReader = new ProtoReader(binary);
  const result: BotBoardMessage = new BotBoardMessage();
  while (!reader.isEnd(binary.length)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.info = decodeWsInfoFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      result.data = decodeBotBoardDataFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return result;
}
