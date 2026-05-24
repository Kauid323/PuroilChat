import util from '@ohos.util';

const UTF8_ENCODER: util.TextEncoder = util.TextEncoder.create('utf-8');
const UTF8_DECODER: util.TextDecoder = util.TextDecoder.create('utf-8');
export const UINT64_MAX_SENTINEL: number = -1;

export class Status {
  number?: number;
  code?: number;
  msg?: string;
}

export class Tag {
  id?: number;
  text?: string;
  color?: string;
}

export class MsgCmd {
  name?: string;
  type?: number;
}

export class MsgContent {
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
  quoteImageUrl?: string;
  quoteImageName?: string;
  fileSize?: number;
  videoUrl?: string;
  audioUrl?: string;
  audioTime?: number;
  quoteVideoUrl?: string;
  quoteVideoTime?: number;
  stickerItemId?: number;
  stickerPackId?: number;
  callText?: string;
  callStatusText?: string;
  width?: number;
  height?: number;
  tip?: string;
}

export class MsgSender {
  chatId?: string;
  chatType?: number;
  name?: string;
  avatarUrl?: string;
  tagOld?: string[];
  tag?: Tag[];
}

export class Msg {
  msgId?: string;
  sender?: MsgSender;
  direction?: string;
  contentType?: number;
  content?: MsgContent;
  sendTime?: number;
  cmd?: MsgCmd;
  msgDeleteTime?: number;
  quoteMsgId?: string;
  msgSeq?: number;
  editTime?: number;
}

export class ListMessageBySeqSend {
  msgSeq?: number;
  chatType?: number;
  chatId?: string;
}

export class ListMessageBySeq {
  status?: Status;
  msg?: Msg[];
  total?: number;
}

export class ListMessageSend {
  msgCount?: number;
  msgId?: string;
  chatType?: number;
  chatId?: string;
}

export class ListMessage {
  status?: Status;
  msg?: Msg[];
}

export class ListMessageByMidSeqSend {
  msgSeq?: number;
  chatType?: number;
  chatId?: string;
  unknown?: number;
  msgCount?: number;
  msgId?: string;
}

export class ListMessageByMidSeq {
  status?: Status;
  msg?: Msg[];
  total?: number;
}

export class SendMessageContent {
  text?: string;
  buttons?: string;
  fileName?: string;
  file?: string;
  mentionedId?: string[];
  form?: string;
  quoteMsgText?: string;
  image?: string;
  postId?: string;
  postTitle?: string;
  postContent?: string;
  postType?: string;
  expressionId?: string;
  quoteImageUrl?: string;
  quoteImageName?: string;
  fileSize?: number;
  video?: string;
  audio?: string;
  audioTime?: number;
  quoteVideoUrl?: string;
  quoteVideoTime?: number;
  stickerItemId?: number;
  stickerPackId?: number;
  roomName?: string;
  botLlmParams?: string;
}

export class SendMessageMedia {
  fileKey?: string;
  fileHash?: string;
  fileType?: string;
  imageHeight?: number;
  imageWidth?: number;
  fileSize?: number;
  fileKey2?: string;
  fileSuffix?: string;
}

export class SendMessageSend {
  msgId?: string;
  chatId?: string;
  chatType?: number;
  content?: SendMessageContent;
  contentType?: number;
  commandId?: number;
  quoteMsgId?: string;
  media?: SendMessageMedia;
}

export class SendMessage {
  status?: Status;
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

class ProtoWriter {
  private bytes: number[] = [];

  writeTag(fieldNumber: number, wireType: number): void {
    this.writeVarint((fieldNumber << 3) | wireType);
  }

  writeVarint(value: number): void {
    let temp: number = value >>> 0;
    while (temp >= 128) {
      this.bytes.push((temp & 0x7f) | 0x80);
      temp = temp >>> 7;
    }
    this.bytes.push(temp);
  }

  writeInt64(fieldNumber: number, value: number): void {
    this.writeTag(fieldNumber, 0);
    this.writeVarint(value);
  }

  writeUint64Max(fieldNumber: number): void {
    this.writeTag(fieldNumber, 0);
    for (let i = 0; i < 9; i++) {
      this.bytes.push(0xff);
    }
    this.bytes.push(0x01);
  }

  writeString(fieldNumber: number, value: string): void {
    this.writeTag(fieldNumber, 2);
    const bytes: Uint8Array = UTF8_ENCODER.encodeInto(value);
    this.writeVarint(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      this.bytes.push(bytes[i]);
    }
  }

  writeSubMessage(fieldNumber: number, bytes: Uint8Array): void {
    this.writeTag(fieldNumber, 2);
    this.writeVarint(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      this.bytes.push(bytes[i]);
    }
  }

  toUint8Array(): Uint8Array {
    return new Uint8Array(this.bytes);
  }
}

function decodeStatusFrom(reader: ProtoReader, end: number): Status {
  const status: Status = new Status();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;

    if (fieldNumber === 1 && wireType === 0) {
      status.number = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 2 && wireType === 0) {
      status.code = reader.readVarint();
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      status.msg = reader.readString();
      continue;
    }

    reader.skipField(wireType);
  }
  return status;
}

function decodeTagFrom(reader: ProtoReader, end: number): Tag {
  const tagData: Tag = new Tag();
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

function decodeMsgCmdFrom(reader: ProtoReader, end: number): MsgCmd {
  const cmd: MsgCmd = new MsgCmd();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;

    if (fieldNumber === 2 && wireType === 2) {
      cmd.name = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 0) {
      cmd.type = reader.readVarint();
      continue;
    }

    reader.skipField(wireType);
  }
  return cmd;
}

function decodeMsgContentFrom(reader: ProtoReader, end: number): MsgContent {
  const content: MsgContent = new MsgContent();
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
    if (fieldNumber === 16 && wireType === 2) {
      content.quoteImageUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 17 && wireType === 2) {
      content.quoteImageName = reader.readString();
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
    if (fieldNumber === 23 && wireType === 2) {
      content.quoteVideoUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 24 && wireType === 0) {
      content.quoteVideoTime = reader.readInt64AsNumber();
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
    if (fieldNumber === 37 && wireType === 2) {
      content.tip = reader.readString();
      continue;
    }

    reader.skipField(wireType);
  }
  return content;
}

function decodeMsgSenderFrom(reader: ProtoReader, end: number): MsgSender {
  const sender: MsgSender = new MsgSender();
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
      sender.tagOld.push(reader.readString());
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      sender.tag.push(decodeTagFrom(reader, nestedEnd));
      continue;
    }

    reader.skipField(wireType);
  }
  return sender;
}

function decodeMsgFrom(reader: ProtoReader, end: number): Msg {
  const msg: Msg = new Msg();
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
      msg.sender = decodeMsgSenderFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      msg.direction = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 0) {
      msg.contentType = reader.readVarint();
      continue;
    }
    if (fieldNumber === 5 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      msg.content = decodeMsgContentFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 6 && wireType === 0) {
      msg.sendTime = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      msg.cmd = decodeMsgCmdFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 8 && wireType === 0) {
      msg.msgDeleteTime = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 9 && wireType === 2) {
      msg.quoteMsgId = reader.readString();
      continue;
    }
    if (fieldNumber === 10 && wireType === 0) {
      msg.msgSeq = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 12 && wireType === 0) {
      msg.editTime = reader.readInt64AsNumber();
      continue;
    }

    reader.skipField(wireType);
  }
  return msg;
}

function decodeListMessageBySeqFrom(reader: ProtoReader, end: number): ListMessageBySeq {
  const list: ListMessageBySeq = new ListMessageBySeq();
  list.msg = [];

  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;

    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      list.status = decodeStatusFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      list.msg.push(decodeMsgFrom(reader, nestedEnd));
      continue;
    }
    if (fieldNumber === 3 && wireType === 0) {
      list.total = reader.readVarint();
      continue;
    }

    reader.skipField(wireType);
  }

  return list;
}

function decodeListMessageFrom(reader: ProtoReader, end: number): ListMessage {
  const list: ListMessage = new ListMessage();
  list.msg = [];

  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;

    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      list.status = decodeStatusFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      list.msg?.push(decodeMsgFrom(reader, nestedEnd));
      continue;
    }

    reader.skipField(wireType);
  }

  return list;
}

function decodeListMessageByMidSeqFrom(reader: ProtoReader, end: number): ListMessageByMidSeq {
  const list: ListMessageByMidSeq = new ListMessageByMidSeq();
  list.msg = [];

  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;

    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      list.status = decodeStatusFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      list.msg?.push(decodeMsgFrom(reader, nestedEnd));
      continue;
    }
    if (fieldNumber === 3 && wireType === 0) {
      list.total = reader.readVarint();
      continue;
    }

    reader.skipField(wireType);
  }

  return list;
}

function decodeSendMessageFrom(reader: ProtoReader, end: number): SendMessage {
  const response: SendMessage = new SendMessage();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 0x07;

    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      response.status = decodeStatusFrom(reader, nestedEnd);
      continue;
    }

    reader.skipField(wireType);
  }
  return response;
}

export function encodeListMessageBySeqSend(source: ListMessageBySeqSend): Uint8Array {
  const writer: ProtoWriter = new ProtoWriter();
  if (source.msgSeq !== undefined) {
    writer.writeInt64(3, source.msgSeq);
  }
  if (source.chatType !== undefined) {
    writer.writeInt64(4, source.chatType);
  }
  if (source.chatId !== undefined) {
    writer.writeString(5, source.chatId);
  }
  return writer.toUint8Array();
}

export function encodeListMessageSend(source: ListMessageSend): Uint8Array {
  const writer: ProtoWriter = new ProtoWriter();
  if (source.msgCount !== undefined) {
    writer.writeInt64(2, source.msgCount);
  }
  if (source.msgId !== undefined) {
    writer.writeString(3, source.msgId);
  }
  if (source.chatType !== undefined) {
    writer.writeInt64(4, source.chatType);
  }
  if (source.chatId !== undefined) {
    writer.writeString(5, source.chatId);
  }
  return writer.toUint8Array();
}

export function encodeListMessageByMidSeqSend(source: ListMessageByMidSeqSend): Uint8Array {
  const writer: ProtoWriter = new ProtoWriter();
  if (source.msgSeq !== undefined) {
    if (source.msgSeq === UINT64_MAX_SENTINEL) {
      writer.writeUint64Max(3);
    } else {
      writer.writeInt64(3, source.msgSeq);
    }
  }
  if (source.chatType !== undefined) {
    writer.writeInt64(4, source.chatType);
  }
  if (source.chatId !== undefined) {
    writer.writeString(5, source.chatId);
  }
  if (source.unknown !== undefined) {
    writer.writeInt64(6, source.unknown);
  }
  if (source.msgCount !== undefined) {
    writer.writeInt64(7, source.msgCount);
  }
  if (source.msgId !== undefined) {
    writer.writeString(8, source.msgId);
  }
  return writer.toUint8Array();
}

function encodeSendMessageContent(source: SendMessageContent): Uint8Array {
  const writer: ProtoWriter = new ProtoWriter();
  if (source.text !== undefined) {
    writer.writeString(1, source.text);
  }
  if (source.buttons !== undefined) {
    writer.writeString(2, source.buttons);
  }
  if (source.fileName !== undefined) {
    writer.writeString(4, source.fileName);
  }
  if (source.file !== undefined) {
    writer.writeString(5, source.file);
  }
  if (source.mentionedId !== undefined) {
    for (let i = 0; i < source.mentionedId.length; i++) {
      writer.writeString(6, source.mentionedId[i]);
    }
  }
  if (source.form !== undefined) {
    writer.writeString(7, source.form);
  }
  if (source.quoteMsgText !== undefined) {
    writer.writeString(8, source.quoteMsgText);
  }
  if (source.image !== undefined) {
    writer.writeString(9, source.image);
  }
  if (source.postId !== undefined) {
    writer.writeString(10, source.postId);
  }
  if (source.postTitle !== undefined) {
    writer.writeString(11, source.postTitle);
  }
  if (source.postContent !== undefined) {
    writer.writeString(12, source.postContent);
  }
  if (source.postType !== undefined) {
    writer.writeString(13, source.postType);
  }
  if (source.expressionId !== undefined) {
    writer.writeString(15, source.expressionId);
  }
  if (source.quoteImageUrl !== undefined) {
    writer.writeString(16, source.quoteImageUrl);
  }
  if (source.quoteImageName !== undefined) {
    writer.writeString(17, source.quoteImageName);
  }
  if (source.fileSize !== undefined) {
    writer.writeInt64(18, source.fileSize);
  }
  if (source.video !== undefined) {
    writer.writeString(19, source.video);
  }
  if (source.audio !== undefined) {
    writer.writeString(21, source.audio);
  }
  if (source.audioTime !== undefined) {
    writer.writeInt64(22, source.audioTime);
  }
  if (source.quoteVideoUrl !== undefined) {
    writer.writeString(23, source.quoteVideoUrl);
  }
  if (source.quoteVideoTime !== undefined) {
    writer.writeInt64(24, source.quoteVideoTime);
  }
  if (source.stickerItemId !== undefined) {
    writer.writeInt64(25, source.stickerItemId);
  }
  if (source.stickerPackId !== undefined) {
    writer.writeInt64(26, source.stickerPackId);
  }
  if (source.roomName !== undefined) {
    writer.writeString(29, source.roomName);
  }
  if (source.botLlmParams !== undefined) {
    writer.writeString(36, source.botLlmParams);
  }
  return writer.toUint8Array();
}

function encodeSendMessageMedia(source: SendMessageMedia): Uint8Array {
  const writer: ProtoWriter = new ProtoWriter();
  if (source.fileKey !== undefined) {
    writer.writeString(1, source.fileKey);
  }
  if (source.fileHash !== undefined) {
    writer.writeString(2, source.fileHash);
  }
  if (source.fileType !== undefined) {
    writer.writeString(3, source.fileType);
  }
  if (source.imageHeight !== undefined) {
    writer.writeInt64(5, source.imageHeight);
  }
  if (source.imageWidth !== undefined) {
    writer.writeInt64(6, source.imageWidth);
  }
  if (source.fileSize !== undefined) {
    writer.writeInt64(7, source.fileSize);
  }
  if (source.fileKey2 !== undefined) {
    writer.writeString(8, source.fileKey2);
  }
  if (source.fileSuffix !== undefined) {
    writer.writeString(9, source.fileSuffix);
  }
  return writer.toUint8Array();
}

export function encodeSendMessageSend(source: SendMessageSend): Uint8Array {
  const writer: ProtoWriter = new ProtoWriter();
  if (source.msgId !== undefined) {
    writer.writeString(2, source.msgId);
  }
  if (source.chatId !== undefined) {
    writer.writeString(3, source.chatId);
  }
  if (source.chatType !== undefined) {
    writer.writeInt64(4, source.chatType);
  }
  if (source.content !== undefined) {
    const contentBytes: Uint8Array = encodeSendMessageContent(source.content);
    writer.writeSubMessage(5, contentBytes);
  }
  if (source.contentType !== undefined) {
    writer.writeInt64(6, source.contentType);
  }
  if (source.commandId !== undefined) {
    writer.writeInt64(7, source.commandId);
  }
  if (source.quoteMsgId !== undefined) {
    writer.writeString(8, source.quoteMsgId);
  }
  if (source.media !== undefined) {
    const mediaBytes: Uint8Array = encodeSendMessageMedia(source.media);
    writer.writeSubMessage(9, mediaBytes);
  }
  return writer.toUint8Array();
}

export function decodeListMessageBySeq(binary: Uint8Array): ListMessageBySeq {
  const reader: ProtoReader = new ProtoReader(binary);
  return decodeListMessageBySeqFrom(reader, binary.length);
}

export function decodeListMessage(binary: Uint8Array): ListMessage {
  const reader: ProtoReader = new ProtoReader(binary);
  return decodeListMessageFrom(reader, binary.length);
}

export function decodeListMessageByMidSeq(binary: Uint8Array): ListMessageByMidSeq {
  const reader: ProtoReader = new ProtoReader(binary);
  return decodeListMessageByMidSeqFrom(reader, binary.length);
}

export function decodeSendMessage(binary: Uint8Array): SendMessage {
  const reader: ProtoReader = new ProtoReader(binary);
  return decodeSendMessageFrom(reader, binary.length);
}
