import image from '@ohos.multimedia.image';
import { ChatRouteParams } from '../models/ChatModels';
import { HomeViewModel } from '../viewmodels/HomeViewModel';
import { MeViewModel } from '../viewmodels/MeViewModel';
import { ConversationItem } from '../models/ConversationModels';
import { NavigationTransition } from '../services/NavigationTransition';
import { UserProfile } from '../models/MeModels';
import { MePageContent } from '../components/MePageContent';

@Entry
@Component
struct Home {
  private controller: TabsController = new TabsController();
  private vm: HomeViewModel = new HomeViewModel();
  private meVm: MeViewModel = new MeViewModel();
  @State currentIndex: number = 0;
  @State loading: boolean = false;
  @State errorMessage: string = '';
  @State conversations: ConversationItem[] = [];
  @State avatarVersion: number = 0;
  @State meLoading: boolean = false;
  @State meErrorMessage: string = '';
  @State meProfile: UserProfile = new UserProfile();
  @State meAvatarVersion: number = 0;

  private titles: string[] = ['Home', 'Discover', 'Contact', 'Favorite', 'Me'];
  private icons: ResourceStr[] = [
    $r('app.media.ic_public_home'),
    $r('app.media.ic_public_navigation'),
    $r('app.media.ic_public_contacts'),
    $r('app.media.ic_public_favor'),
    $r('app.media.ic_public_face')
  ];
  private activeIcons: ResourceStr[] = [
    $r('app.media.ic_public_home_filled'),
    $r('app.media.ic_public_navigation_filled'),
    $r('app.media.ic_public_contacts_filled'),
    $r('app.media.ic_public_favor_filled'),
    $r('app.media.ic_public_face_filled')
  ];

  pageTransition() {
    PageTransitionEnter({ type: RouteType.Push, duration: NavigationTransition.PUSH_ENTER_MS, curve: Curve.Friction })
      .slide(SlideEffect.Right)
      .opacity(NavigationTransition.PUSH_ENTER_OPACITY);

    PageTransitionExit({ type: RouteType.Push, duration: NavigationTransition.PUSH_EXIT_MS, curve: Curve.Sharp })
      .slide(SlideEffect.Left)
      .opacity(NavigationTransition.PUSH_EXIT_OPACITY);

    PageTransitionEnter({ type: RouteType.Pop, duration: NavigationTransition.PUSH_EXIT_MS, curve: Curve.Sharp })
      .slide(SlideEffect.Left)
      .opacity(1);

    PageTransitionExit({ type: RouteType.Pop, duration: NavigationTransition.PUSH_ENTER_MS, curve: Curve.Friction })
      .slide(SlideEffect.Right)
      .opacity(1);
  }

  aboutToAppear(): void {
    this.vm.onAvatarUpdated = () => {
      this.avatarVersion++;
      this.syncFromVm();
    };
    this.meVm.onAvatarUpdated = () => {
      this.meAvatarVersion++;
      this.syncMeFromVm();
    };
    this.syncMeFromVm();
    void this.refreshConversations();
    void this.refreshMe();
  }

  private syncFromVm(): void {
    this.loading = this.vm.loading;
    this.errorMessage = this.vm.errorMessage;
    this.conversations = [...this.vm.conversations];
  }

  private findAvatar(url: string): image.PixelMap | undefined {
    return this.vm.getAvatar(url);
  }

  private syncMeFromVm(): void {
    this.meLoading = this.meVm.loading;
    this.meErrorMessage = this.meVm.errorMessage;
    this.meProfile = this.meVm.profile;
  }

  private async refreshConversations(): Promise<void> {
    this.loading = true;
    this.errorMessage = '';
    await this.vm.loadConversations();
    this.syncFromVm();
  }

  private async refreshMe(): Promise<void> {
    this.meLoading = true;
    this.meErrorMessage = '';
    await this.meVm.loadProfile();
    this.syncMeFromVm();
  }

  private async logout(): Promise<void> {
    this.vm.logout();
    this.meVm.logout();
    try {
      await this.getUIContext().getRouter().pushUrl({ url: 'pages/Index' });
      setTimeout(() => {
        this.getUIContext().getRouter().clear();
      }, NavigationTransition.PUSH_ENTER_MS + 20);
    } catch (_err) {
    }
  }

  private async openConversation(item: ConversationItem): Promise<void> {
    try {
      const params: ChatRouteParams = await this.vm.openConversation(item);
      this.syncFromVm();
      await this.getUIContext().getRouter().pushUrl({
        url: 'pages/Chat',
        params: params
      });
    } catch (_error) {
      this.syncFromVm();
    }
  }

  private async openSettings(): Promise<void> {
    try {
      await this.getUIContext().getRouter().pushUrl({ url: 'pages/Settings' });
    } catch (_error) {
    }
  }

  @Builder
  avatarFallback(item: ConversationItem) {
    Stack({ alignContent: Alignment.Center }) {
      Circle()
        .width(44)
        .height(44)
        .fill('#D8E7FF')
      Text(item.name.slice(0, 1))
        .fontColor('#1769FF')
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
    }
    .width(44)
    .height(44)
  }

  @Builder
  avatarBadge(item: ConversationItem) {
    if (item.unreadCount > 0) {
      Text(item.unreadBadgeText)
        .fontSize(10)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
        .padding({ left: 5, right: 5, top: 1, bottom: 1 })
        .backgroundColor('#FF3B30')
        .borderRadius(999)
        .position({ x: -8, y: -8 })
    }
  }

  @Builder
  conversationAvatar(item: ConversationItem) {
    Stack({ alignContent: Alignment.TopStart }) {
      if (this.findAvatar(item.avatarUrl) !== undefined) {
        Image(this.findAvatar(item.avatarUrl) as image.PixelMap)
          .width(44)
          .height(44)
          .borderRadius(22)
          .objectFit(ImageFit.Cover)
      } else {
        this.avatarFallback(item)
      }
      this.avatarBadge(item)
    }
    .width(44)
    .height(44)
  }

  @Builder
  tabBarItem(index: number) {
    Column({ space: 4 }) {
      Image(this.currentIndex === index ? this.activeIcons[index] : this.icons[index])
        .width(22)
        .height(22)
        .objectFit(ImageFit.Contain)
      Text(this.titles[index])
        .fontSize(12)
        .fontColor(this.currentIndex === index ? '#1769FF' : '#80889A')
    }
    .width('100%')
    .justifyContent(FlexAlign.Center)
  }

  @Builder
  tabContent(index: number) {
    if (index === 0) {
      Column({ space: 10 }) {
        Row() {
          Text('Conversations')
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
          Blank()
          Button('Refresh')
            .fontSize(12)
            .height(32)
            .onClick(() => {
              void this.refreshConversations();
            })
        }
        .width('100%')
        .padding({ left: 16, right: 16, top: 12, bottom: 2 })

        if (this.loading) {
          Text('Loading...')
            .fontSize(14)
            .fontColor('#80889A')
            .margin({ top: 12 })
        }

        if (this.errorMessage.length > 0) {
          Text(this.errorMessage)
            .fontSize(13)
            .fontColor('#E5484D')
            .padding({ left: 16, right: 16 })
        }

        List({ space: 8 }) {
          ForEach(this.conversations, (item: ConversationItem) => {
            ListItem() {
              Row({ space: 10 }) {
                this.conversationAvatar(item)

                Column({ space: 4 }) {
                  Row() {
                    Text(item.name)
                      .fontSize(15)
                      .fontWeight(FontWeight.Medium)
                      .fontColor('#111827')
                    if (item.atMe) {
                      Text('@')
                        .fontSize(12)
                        .fontColor('#FF7A00')
                        .margin({ left: 6 })
                    }
                  }
                  Text(item.content)
                    .fontSize(13)
                    .fontColor('#6B7280')
                    .maxLines(1)
                    .textOverflow({ overflow: TextOverflow.Ellipsis })
                }
                .layoutWeight(1)
                .alignItems(HorizontalAlign.Start)
              }
              .padding(12)
              .backgroundColor('#FFFFFF')
              .borderRadius(12)
              .onClick(() => {
                void this.openConversation(item);
              })
            }
          })
        }
        .layoutWeight(1)
        .width('100%')
        .padding({ left: 12, right: 12, bottom: 8 })
      }
      .width('100%')
      .height('100%')
      .backgroundColor('#F8FAFD')
    } else if (index === 4) {
      MePageContent({
        profile: this.meProfile,
        loading: this.meLoading,
        errorMessage: this.meErrorMessage,
        onRefresh: () => {
          void this.refreshMe();
        },
        onOpenSettings: () => {
          void this.openSettings();
        },
        onLogout: () => {
          void this.logout();
        }
      })
    } else {
      Column({ space: 10 }) {
        Text(this.titles[index])
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
        Text(`Current tab: ${this.titles[index]}`)
          .fontSize(16)
          .fontColor('#5D6778')
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .backgroundColor('#F8FAFD')
    }
  }

  build() {
    Tabs({
      barPosition: BarPosition.End,
      controller: this.controller,
      index: this.currentIndex
    }) {
      TabContent() {
        this.tabContent(0);
      }
      .tabBar(this.tabBarItem(0))

      TabContent() {
        this.tabContent(1);
      }
      .tabBar(this.tabBarItem(1))

      TabContent() {
        this.tabContent(2);
      }
      .tabBar(this.tabBarItem(2))

      TabContent() {
        this.tabContent(3);
      }
      .tabBar(this.tabBarItem(3))

      TabContent() {
        this.tabContent(4);
      }
      .tabBar(this.tabBarItem(4))
    }
    .barMode(BarMode.Fixed)
    .barHeight(64)
    .divider(null)
    .vertical(false)
    .onChange((index: number) => {
      this.currentIndex = index;
    })
    .width('100%')
    .height('100%')
    .backgroundColor('#F8FAFD')
  }
}
