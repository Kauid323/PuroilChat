import util from '@ohos.util';

const UTF8_DECODER: util.TextDecoder = util.TextDecoder.create('utf-8');

export class Status {
  number?: number;
  code?: number;
  msg?: string;
}

export class AtData {
  unknownValue?: number;
  mentionedId?: string;
  mentionedName?: string;
  mentionedIn?: string;
  mentionerId?: string;
  mentionerName?: string;
  msgSeq?: number;
}

export class ConversationData {
  chatId?: string;
  chatType?: number;
  name?: string;
  chatContent?: string;
  timestampMs?: number;
  unreadMessage?: number;
  at?: number;
  avatarId?: number;
  avatarUrl?: string;
  doNotDisturb?: number;
  timestamp?: number;
  atData?: AtData;
  certificationLevel?: number;
}

export class ConversationList {
  status?: Status;
  data?: ConversationData[];
  total?: number;
  requestId?: string;
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

function decodeAtDataFrom(reader: ProtoReader, end: number): AtData {
  const atData: AtData = new AtData();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;

    if (fieldNumber === 1 && wireType === 0) {
      atData.unknownValue = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      atData.mentionedId = reader.readString();
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      atData.mentionedName = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      atData.mentionedIn = reader.readString();
      continue;
    }
    if (fieldNumber === 6 && wireType === 2) {
      atData.mentionerId = reader.readString();
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      atData.mentionerName = reader.readString();
      continue;
    }
    if (fieldNumber === 8 && wireType === 0) {
      atData.msgSeq = reader.readInt64AsNumber();
      continue;
    }

    reader.skipField(wireType);
  }
  return atData;
}

function decodeConversationDataFrom(reader: ProtoReader, end: number): ConversationData {
  const data: ConversationData = new ConversationData();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;

    if (fieldNumber === 1 && wireType === 2) {
      data.chatId = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 0) {
      data.chatType = reader.readVarint();
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      data.name = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      data.chatContent = reader.readString();
      continue;
    }
    if (fieldNumber === 5 && wireType === 0) {
      data.timestampMs = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 6 && wireType === 0) {
      data.unreadMessage = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 7 && wireType === 0) {
      data.at = reader.readVarint();
      continue;
    }
    if (fieldNumber === 8 && wireType === 0) {
      data.avatarId = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 9 && wireType === 2) {
      data.avatarUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 11 && wireType === 0) {
      data.doNotDisturb = reader.readVarint();
      continue;
    }
    if (fieldNumber === 12 && wireType === 0) {
      data.timestamp = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 14 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      data.atData = decodeAtDataFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 16 && wireType === 0) {
      data.certificationLevel = reader.readVarint();
      continue;
    }

    reader.skipField(wireType);
  }
  return data;
}

function decodeConversationListFrom(reader: ProtoReader, end: number): ConversationList {
  const list: ConversationList = new ConversationList();
  list.data = [];

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
      list.data.push(decodeConversationDataFrom(reader, nestedEnd));
      continue;
    }
    if (fieldNumber === 3 && wireType === 0) {
      list.total = reader.readVarint();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      list.requestId = reader.readString();
      continue;
    }

    reader.skipField(wireType);
  }

  return list;
}

export function decodeConversationList(binary: Uint8Array): ConversationList {
  const reader: ProtoReader = new ProtoReader(binary);
  return decodeConversationListFrom(reader, binary.length);
}
