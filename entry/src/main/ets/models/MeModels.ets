export class UserProfileExtra {
  introduction: string = '';
  gender: number = 0;
  genderText: string = '未设置';
  lastActiveTime: string = '';
  birthdayText: string = '未设置';
  locationText: string = '未设置';
  address: string = '';
  ipGeo: string = '';
}

export class UserProfile {
  id: string = '';
  name: string = '';
  avatarUrl: string = '';
  email: string = '';
  phone: string = '';
  invitationCode: string = '';
  coinText: string = '0';
  vip: boolean = false;
  vipText: string = '普通用户';
  registerTime: string = '';
  onlineDayText: string = '0';
  continuousOnlineDayText: string = '0';
  medals: string[] = [];
  remarkName: string = '';
  extra: UserProfileExtra = new UserProfileExtra();
}

export class ChatStyleOption {
  key: string = '';
  title: string = '';
  subtitle: string = '';
}

export class MeSettingsState {
  selectedChatStyle: string = 'telegram-compact';
  styleOptions: ChatStyleOption[] = [];
}

export class ProfileMetricItem {
  label: string = '';
  value: string = '';
}

export class ProfileActionItem {
  title: string = '';
  value: string = '';
}
