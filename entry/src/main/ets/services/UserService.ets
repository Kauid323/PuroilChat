import { ApiClient } from './ApiClient';
import { AvatarImageService } from './AvatarImageService';
import { decodeGetUser, decodeUserInfo, encodeGetUserSend, GetUser, UserInfo } from '../generated/proto/user';
import { UserProfile } from '../models/MeModels';

class GetUserDataResponseData {
  id: number = 0;
  userId: string = '';
  lastLoginTime: number = 0;
  update_time: number = 0;
  introduction: string = '';
  gender: number = 0;
  birthday: number = 0;
  province: string = '';
  city: string = '';
  district: string = '';
  locationCode: string = '';
}

class GetUserDataResponseWrapper {
  data: GetUserDataResponseData = new GetUserDataResponseData();
}

class JsonResponse<T> {
  code: number = 0;
  msg: string = '';
  data: T | undefined = undefined;
}

class EmptyRequestBody {
}

export class UserService {
  private formatCoin(value: number): string {
    if (!Number.isFinite(value)) {
      return '0';
    }
    if (Math.floor(value) === value) {
      return `${value}`;
    }
    return value.toFixed(2);
  }

  private formatGender(gender: number): string {
    if (gender === 1) {
      return '男';
    }
    if (gender === 2) {
      return '女';
    }
    if (gender === 3) {
      return '其他';
    }
    return '未设置';
  }

  private formatBirthday(timestamp: number): string {
    if (timestamp <= 0) {
      return '未设置';
    }
    const normalizedTimestamp: number = timestamp < 1000000000000 ? timestamp * 1000 : timestamp;
    const date: Date = new Date(normalizedTimestamp);
    if (isNaN(date.getTime())) {
      return '未设置';
    }
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();
    return `${year}-${month < 10 ? `0${month}` : `${month}`}-${day < 10 ? `0${day}` : `${day}`}`;
  }

  private mergeLocation(province: string, city: string, district: string): string {
    const chunks: string[] = [];
    if (province.length > 0) {
      chunks.push(province);
    }
    if (city.length > 0) {
      chunks.push(city);
    }
    if (district.length > 0) {
      chunks.push(district);
    }
    if (chunks.length === 0) {
      return '未设置';
    }
    return chunks.join(' ');
  }

  private toUserProfile(info: UserInfo, detail: GetUser, extra: GetUserDataResponseData | undefined): UserProfile {
    const profile: UserProfile = new UserProfile();
    profile.id = info.data?.id ?? detail.data?.id ?? '';
    profile.name = info.data?.name ?? detail.data?.name ?? 'Unknown';
    profile.avatarUrl = AvatarImageService.normalizeAvatarUrl(info.data?.avatarUrl ?? detail.data?.avatarUrl ?? '');
    profile.email = info.data?.email ?? '';
    profile.phone = info.data?.phone ?? '';
    profile.invitationCode = info.data?.invitationCode ?? '';
    profile.coinText = this.formatCoin(info.data?.coin ?? 0);
    profile.vip = (info.data?.isVip ?? detail.data?.isVip ?? 0) > 0;
    profile.vipText = profile.vip ? 'VIP 用户' : '普通用户';
    profile.registerTime = detail.data?.registerTime ?? '';
    profile.onlineDayText = `${detail.data?.onlineDay ?? 0}`;
    profile.continuousOnlineDayText = `${detail.data?.continuousOnlineDay ?? 0}`;
    const medals = detail.data?.medal ?? [];
    for (let i = 0; i < medals.length; i++) {
      const medalName: string = medals[i].name ?? '';
      if (medalName.length > 0) {
        profile.medals.push(medalName);
      }
    }
    profile.remarkName = detail.data?.remarkInfo?.remarkName ?? '';

    const gender: number = extra?.gender ?? detail.data?.profileInfo?.gender ?? 0;
    const birthday: number = extra?.birthday ?? detail.data?.profileInfo?.birthday ?? 0;
    const province: string = extra?.province ?? '';
    const city: string = extra?.city ?? detail.data?.profileInfo?.city ?? '';
    const district: string = extra?.district ?? detail.data?.profileInfo?.district ?? '';
    profile.extra.gender = gender;
    profile.extra.genderText = this.formatGender(gender);
    profile.extra.introduction = extra?.introduction ?? detail.data?.profileInfo?.introduction ?? '';
    profile.extra.lastActiveTime = detail.data?.profileInfo?.lastActiveTime ?? '';
    profile.extra.birthdayText = this.formatBirthday(birthday);
    profile.extra.locationText = this.mergeLocation(province, city, district);
    profile.extra.address = detail.data?.profileInfo?.address ?? '';
    profile.extra.ipGeo = detail.data?.ipGeo ?? '';
    return profile;
  }

  async getMyUserInfo(): Promise<UserProfile> {
    const binary: Uint8Array = await ApiClient.getProto('/v1/user/info');
    const info: UserInfo = decodeUserInfo(binary);
    if ((info.status?.code ?? 0) !== 1 || info.data === undefined) {
      throw new Error(info.status?.msg ?? 'load user info failed');
    }

    const detailBody: Uint8Array = encodeGetUserSend(info.data.id ?? '');
    const detailBinary: Uint8Array = await ApiClient.postProtoWithBody('/v1/user/get-user', detailBody.buffer as ArrayBuffer);
    const detail: GetUser = decodeGetUser(detailBinary);
    if ((detail.status?.code ?? 0) !== 1 || detail.data === undefined) {
      throw new Error(detail.status?.msg ?? 'load user detail failed');
    }

    let extra: GetUserDataResponseData | undefined = undefined;
    try {
      const response: JsonResponse<GetUserDataResponseWrapper> =
        await ApiClient.postJson<JsonResponse<GetUserDataResponseWrapper>>('/v1/user/get-user-data', new EmptyRequestBody());
      if (response.code === 1 && response.data !== undefined) {
        extra = response.data.data;
      }
    } catch (_error) {
      extra = undefined;
    }

    return this.toUserProfile(info, detail, extra);
  }
}
