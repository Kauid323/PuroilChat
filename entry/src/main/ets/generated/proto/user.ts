import util from '@ohos.util';

const UTF8_DECODER: util.TextDecoder = util.TextDecoder.create('utf-8');

export class Status {
  number?: number;
  code?: number;
  msg?: string;
}

export class UserInfoData {
  id?: string;
  name?: string;
  avatarUrl?: string;
  avatarId?: number;
  phone?: string;
  email?: string;
  coin?: number;
  isVip?: number;
  vipExpiredTime?: number;
  invitationCode?: string;
}

export class UserInfo {
  status?: Status;
  data?: UserInfoData;
}

export class MedalInfo {
  id?: number;
  name?: string;
  sort?: number;
}

export class RemarkInfo {
  remarkName?: string;
  phoneNumber?: string;
  extraRemark?: string;
}

export class ProfileInfo {
  lastActiveTime?: string;
  introduction?: string;
  gender?: number;
  birthday?: number;
  city?: string;
  district?: string;
  address?: string;
}

export class GetUserData {
  id?: string;
  name?: string;
  nameId?: number;
  avatarUrl?: string;
  avatarId?: number;
  medal?: MedalInfo[];
  registerTime?: string;
  banTime?: number;
  onlineDay?: number;
  continuousOnlineDay?: number;
  isVip?: number;
  vipExpiredTime?: number;
  remarkInfo?: RemarkInfo;
  profileInfo?: ProfileInfo;
  ipGeo?: string;
}

export class GetUser {
  status?: Status;
  data?: GetUserData;
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

  readDouble(): number {
    const buffer: ArrayBuffer = new ArrayBuffer(8);
    const array: Uint8Array = new Uint8Array(buffer);
    for (let i = 0; i < 8; i++) {
      array[i] = this.readByte();
    }
    return new DataView(buffer).getFloat64(0, true);
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

  writeString(fieldNumber: number, value: string): void {
    this.writeTag(fieldNumber, 2);
    const encoder: util.TextEncoder = util.TextEncoder.create('utf-8');
    const bytes: Uint8Array = encoder.encodeInto(value);
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

function decodeUserInfoDataFrom(reader: ProtoReader, end: number): UserInfoData {
  const data: UserInfoData = new UserInfoData();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.id = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      data.name = reader.readString();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      data.avatarUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 5 && wireType === 0) {
      data.avatarId = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 6 && wireType === 2) {
      data.phone = reader.readString();
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      data.email = reader.readString();
      continue;
    }
    if (fieldNumber === 8 && wireType === 1) {
      data.coin = reader.readDouble();
      continue;
    }
    if (fieldNumber === 9 && wireType === 0) {
      data.isVip = reader.readVarint();
      continue;
    }
    if (fieldNumber === 10 && wireType === 0) {
      data.vipExpiredTime = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 12 && wireType === 2) {
      data.invitationCode = reader.readString();
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

function decodeMedalInfoFrom(reader: ProtoReader, end: number): MedalInfo {
  const data: MedalInfo = new MedalInfo();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 0) {
      data.id = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      data.name = reader.readString();
      continue;
    }
    if (fieldNumber === 5 && wireType === 0) {
      data.sort = reader.readInt64AsNumber();
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

function decodeRemarkInfoFrom(reader: ProtoReader, end: number): RemarkInfo {
  const data: RemarkInfo = new RemarkInfo();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.remarkName = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      data.phoneNumber = reader.readString();
      continue;
    }
    if (fieldNumber === 3 && wireType === 2) {
      data.extraRemark = reader.readString();
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

function decodeProfileInfoFrom(reader: ProtoReader, end: number): ProfileInfo {
  const data: ProfileInfo = new ProfileInfo();
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.lastActiveTime = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      data.introduction = reader.readString();
      continue;
    }
    if (fieldNumber === 3 && wireType === 0) {
      data.gender = reader.readVarint();
      continue;
    }
    if (fieldNumber === 4 && wireType === 0) {
      data.birthday = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 5 && wireType === 2) {
      data.city = reader.readString();
      continue;
    }
    if (fieldNumber === 6 && wireType === 2) {
      data.district = reader.readString();
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      data.address = reader.readString();
      continue;
    }
    reader.skipField(wireType);
  }
  return data;
}

function decodeGetUserDataFrom(reader: ProtoReader, end: number): GetUserData {
  const data: GetUserData = new GetUserData();
  const medals: MedalInfo[] = [];
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      data.id = reader.readString();
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      data.name = reader.readString();
      continue;
    }
    if (fieldNumber === 3 && wireType === 0) {
      data.nameId = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 4 && wireType === 2) {
      data.avatarUrl = reader.readString();
      continue;
    }
    if (fieldNumber === 5 && wireType === 0) {
      data.avatarId = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 6 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      medals.push(decodeMedalInfoFrom(reader, nestedEnd));
      continue;
    }
    if (fieldNumber === 7 && wireType === 2) {
      data.registerTime = reader.readString();
      continue;
    }
    if (fieldNumber === 10 && wireType === 0) {
      data.banTime = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 11 && wireType === 0) {
      data.onlineDay = reader.readVarint();
      continue;
    }
    if (fieldNumber === 12 && wireType === 0) {
      data.continuousOnlineDay = reader.readVarint();
      continue;
    }
    if (fieldNumber === 13 && wireType === 0) {
      data.isVip = reader.readVarint();
      continue;
    }
    if (fieldNumber === 14 && wireType === 0) {
      data.vipExpiredTime = reader.readInt64AsNumber();
      continue;
    }
    if (fieldNumber === 18 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      data.remarkInfo = decodeRemarkInfoFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 19 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      data.profileInfo = decodeProfileInfoFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 20 && wireType === 2) {
      data.ipGeo = reader.readString();
      continue;
    }
    reader.skipField(wireType);
  }
  data.medal = medals;
  return data;
}

export function decodeUserInfo(bytes: Uint8Array): UserInfo {
  const reader: ProtoReader = new ProtoReader(bytes);
  const info: UserInfo = new UserInfo();
  const end: number = bytes.length;
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      info.status = decodeStatusFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      info.data = decodeUserInfoDataFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return info;
}

export function decodeGetUser(bytes: Uint8Array): GetUser {
  const reader: ProtoReader = new ProtoReader(bytes);
  const info: GetUser = new GetUser();
  const end: number = bytes.length;
  while (!reader.isEnd(end)) {
    const tag: number = reader.readVarint();
    const fieldNumber: number = tag >>> 3;
    const wireType: number = tag & 7;
    if (fieldNumber === 1 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      info.status = decodeStatusFrom(reader, nestedEnd);
      continue;
    }
    if (fieldNumber === 2 && wireType === 2) {
      const nestedEnd: number = reader.readSubMessageEnd();
      info.data = decodeGetUserDataFrom(reader, nestedEnd);
      continue;
    }
    reader.skipField(wireType);
  }
  return info;
}

export function encodeGetUserSend(userId: string): Uint8Array {
  const writer: ProtoWriter = new ProtoWriter();
  if (userId.length > 0) {
    writer.writeString(2, userId);
  }
  return writer.toUint8Array();
}
