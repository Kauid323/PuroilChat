import image from '@ohos.multimedia.image';
import { UserProfile } from '../models/MeModels';
import { AvatarImageService } from '../services/AvatarImageService';

@Component
export struct MePageContent {
  private avatarService: AvatarImageService = new AvatarImageService();
  @Prop profile: UserProfile;
  @Prop loading: boolean;
  @Prop errorMessage: string;
  onRefresh?: () => void;
  onLogout?: () => void;
  onOpenSettings?: () => void;
  @State avatarImage: image.PixelMap | undefined = undefined;
  @State avatarLoadingUrl: string = '';

  aboutToAppear(): void {
    void this.ensureAvatarLoaded();
  }

  aboutToUpdate(): void {
    void this.ensureAvatarLoaded();
  }

  private avatarFallbackText(): string {
    if (this.profile.name.length === 0) {
      return '?';
    }
    return this.profile.name.slice(0, 1);
  }

  private medalsText(): string {
    if (this.profile.medals.length === 0) {
      return '暂无';
    }
    return this.profile.medals.join(' · ');
  }

  private introText(): string {
    if (this.profile.extra.introduction.length === 0) {
      return '这个人很神秘，还没有写简介';
    }
    return this.profile.extra.introduction;
  }

  private async ensureAvatarLoaded(): Promise<void> {
    const url: string = this.profile.avatarUrl;
    if (url.length === 0) {
      this.avatarImage = undefined;
      this.avatarLoadingUrl = '';
      return;
    }
    if (this.avatarLoadingUrl === url && this.avatarImage !== undefined) {
      return;
    }
    this.avatarLoadingUrl = url;
    const loaded: image.PixelMap | undefined = await this.avatarService.loadAvatar(url);
    if (this.avatarLoadingUrl !== url) {
      return;
    }
    this.avatarImage = loaded;
  }

  @Builder
  profileHeader() {
    Row({ space: 14 }) {
      if (this.avatarImage !== undefined) {
        Image(this.avatarImage as image.PixelMap)
          .width(76)
          .height(76)
          .borderRadius(26)
          .objectFit(ImageFit.Cover)
      } else {
        Stack({ alignContent: Alignment.Center }) {
          Circle()
            .width(76)
            .height(76)
            .fill('#D9E8FF')
          Text(this.avatarFallbackText())
            .fontSize(28)
            .fontWeight(FontWeight.Bold)
            .fontColor('#1769FF')
        }
        .width(76)
        .height(76)
      }

      Column({ space: 6 }) {
        Text(this.profile.name.length > 0 ? this.profile.name : '未登录')
          .fontSize(24)
          .fontWeight(FontWeight.Bold)
          .fontColor('#101828')
        Text(this.profile.vipText)
          .fontSize(12)
          .fontColor(this.profile.vip ? '#B26A00' : '#667085')
        Text(this.introText())
          .fontSize(13)
          .fontColor('#667085')
          .maxLines(2)
      }
      .layoutWeight(1)
      .alignItems(HorizontalAlign.Start)
    }
    .width('100%')
    .padding(18)
    .backgroundColor('#FFFFFF')
    .borderRadius(24)
  }

  @Builder
  metricCard(title: string, value: string) {
    Column({ space: 6 }) {
      Text(value)
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .fontColor('#111827')
      Text(title)
        .fontSize(12)
        .fontColor('#667085')
    }
    .padding({ top: 16, bottom: 16 })
    .layoutWeight(1)
    .backgroundColor('#FFFFFF')
    .borderRadius(20)
  }

  @Builder
  infoRow(title: string, value: string) {
    Row({ space: 10 }) {
      Text(title)
        .fontSize(13)
        .fontColor('#667085')
      Blank()
      Text(value.length > 0 ? value : '未设置')
        .fontSize(13)
        .fontColor('#111827')
        .maxLines(1)
        .textOverflow({ overflow: TextOverflow.Ellipsis })
    }
    .width('100%')
    .padding({ top: 10, bottom: 10 })
  }

  build() {
    Column({ space: 14 }) {
      Row({ space: 10 }) {
        Text('Me')
          .fontSize(28)
          .fontWeight(FontWeight.Bold)
          .fontColor('#101828')
        Blank()

        Button() {
          Image($r('app.media.ic_public_settings'))
            .width(20)
            .height(20)
            .objectFit(ImageFit.Contain)
        }
        .width(36)
        .height(36)
        .backgroundColor('#FFFFFF')
        .borderRadius(18)
        .onClick(() => {
          if (this.onOpenSettings !== undefined) {
            this.onOpenSettings();
          }
        })

        Button('Refresh')
          .fontSize(12)
          .height(32)
          .backgroundColor('#EAF3FF')
          .fontColor('#0A84FF')
          .onClick(() => {
            if (this.onRefresh !== undefined) {
              this.onRefresh();
            }
          })
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 12, bottom: 0 })

      if (this.loading) {
        Text('Loading profile...')
          .fontSize(13)
          .fontColor('#667085')
      }

      if (this.errorMessage.length > 0) {
        Text(this.errorMessage)
          .fontSize(13)
          .fontColor('#E5484D')
          .padding({ left: 16, right: 16 })
      }

      Scroll() {
        Column({ space: 14 }) {
          this.profileHeader()

          Row({ space: 10 }) {
            this.metricCard('金币', this.profile.coinText)
            this.metricCard('在线天数', this.profile.onlineDayText)
            this.metricCard('连续在线', this.profile.continuousOnlineDayText)
          }

          Column({ space: 0 }) {
            Text('个人资料')
              .fontSize(17)
              .fontWeight(FontWeight.Medium)
              .fontColor('#101828')
              .margin({ bottom: 6 })

            Column({ space: 0 }) {
              this.infoRow('邮箱', this.profile.email)
              this.infoRow('手机号', this.profile.phone)
              this.infoRow('邀请码', this.profile.invitationCode)
              this.infoRow('注册时间', this.profile.registerTime)
              this.infoRow('最后活跃', this.profile.extra.lastActiveTime)
              this.infoRow('性别', this.profile.extra.genderText)
              this.infoRow('生日', this.profile.extra.birthdayText)
              this.infoRow('所在地', this.profile.extra.locationText)
              this.infoRow('详细地址', this.profile.extra.address)
              this.infoRow('IP 地区', this.profile.extra.ipGeo)
              this.infoRow('备注名', this.profile.remarkName)
              this.infoRow('勋章', this.medalsText())
            }
            .padding({ left: 16, right: 16, top: 6, bottom: 6 })
            .backgroundColor('#FFFFFF')
            .borderRadius(22)
          }
          .width('100%')

        }
        .width('100%')
        .padding({ left: 12, right: 12, top: 4, bottom: 20 })
      }
      .scrollBar(BarState.Off)
      .width('100%')
      .layoutWeight(1)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F8FAFD')
  }
}
