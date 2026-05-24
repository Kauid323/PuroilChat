import { NavigationTransition } from '../services/NavigationTransition';
import { MeViewModel } from '../viewmodels/MeViewModel';
import { ChatStyleOption } from '../models/MeModels';

@Component
@Entry
struct Settings {
  private vm: MeViewModel = new MeViewModel();
  @State selectedChatStyle: string = 'telegram-compact';
  @State styleOptions: ChatStyleOption[] = [];
  @State activeStyleKey: string = '';
  @State activeActionKey: string = '';

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
    this.selectedChatStyle = this.vm.settings.selectedChatStyle;
    this.styleOptions = [...this.vm.settings.styleOptions];
  }

  private isStyleSelected(styleKey: string): boolean {
    return this.selectedChatStyle === styleKey;
  }

  private selectChatStyle(styleKey: string): void {
    this.activeStyleKey = styleKey;
    this.vm.selectChatStyle(styleKey);
    this.selectedChatStyle = this.vm.settings.selectedChatStyle;
    setTimeout(() => {
      if (this.activeStyleKey === styleKey) {
        this.activeStyleKey = '';
      }
    }, 140);
  }

  private async logout(): Promise<void> {
    this.activeActionKey = 'logout';
    this.vm.logout();
    try {
      await this.getUIContext().getRouter().pushUrl({ url: 'pages/Index' });
      setTimeout(() => {
        this.getUIContext().getRouter().clear();
      }, NavigationTransition.PUSH_ENTER_MS + 20);
    } catch (_error) {
    } finally {
      setTimeout(() => {
        if (this.activeActionKey === 'logout') {
          this.activeActionKey = '';
        }
      }, 140);
    }
  }

  private goBack(): void {
    try {
      this.getUIContext().getRouter().back();
    } catch (_error) {
    }
  }

  @Builder
  styleOptionCard(item: ChatStyleOption) {
    Row({ space: 12 }) {
      Stack({ alignContent: Alignment.Center }) {
        Circle()
          .width(22)
          .height(22)
          .fill(this.isStyleSelected(item.key) ? '#0A84FF' : '#D8DEE9')
        Circle()
          .width(9)
          .height(9)
          .fill('#FFFFFF')
      }

      Column({ space: 3 }) {
        Text(item.title)
          .fontSize(15)
          .fontWeight(FontWeight.Medium)
          .fontColor('#111827')
        Text(item.subtitle)
          .fontSize(12)
          .fontColor('#667085')
      }
      .layoutWeight(1)
      .alignItems(HorizontalAlign.Start)
    }
    .width('100%')
    .padding(14)
    .backgroundColor(this.activeStyleKey === item.key ? '#DDEBFF' : (this.isStyleSelected(item.key) ? '#EAF3FF' : '#FFFFFF'))
    .borderRadius(18)
    .border({ width: 1, color: this.isStyleSelected(item.key) ? '#BED8FF' : '#EEF2F6' })
    .scale({ x: this.activeStyleKey === item.key ? 0.985 : 1, y: this.activeStyleKey === item.key ? 0.985 : 1 })
    .animation({ duration: 140, curve: Curve.Friction })
    .stateStyles({
      pressed: {
        .opacity(0.92)
      }
    })
    .onClick(() => {
      this.selectChatStyle(item.key);
    })
  }

  @Builder
  actionCard(title: string, accentColor: string, backgroundColor: string, actionKey: string, onTap: () => void) {
    Row() {
      Text(title)
        .fontSize(15)
        .fontWeight(FontWeight.Medium)
        .fontColor(accentColor)
      Blank()
      Text('>')
        .fontSize(16)
        .fontColor(accentColor)
        .opacity(0.7)
    }
    .width('100%')
    .padding(14)
    .backgroundColor(this.activeActionKey === actionKey ? '#F7DCDC' : backgroundColor)
    .borderRadius(18)
    .scale({ x: this.activeActionKey === actionKey ? 0.985 : 1, y: this.activeActionKey === actionKey ? 0.985 : 1 })
    .animation({ duration: 140, curve: Curve.Friction })
    .stateStyles({
      pressed: {
        .opacity(0.92)
      }
    })
    .onClick(() => {
      onTap();
    })
  }

  build() {
    Column({ space: 0 }) {
      Row({ space: 10 }) {
        Text('<')
          .fontSize(26)
          .fontWeight(FontWeight.Medium)
          .fontColor('#111827')
          .onClick(() => {
            this.goBack();
          })

        Text('设置')
          .fontSize(22)
          .fontWeight(FontWeight.Bold)
          .fontColor('#101828')
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 14, bottom: 14 })
      .backgroundColor('#F8FAFD')

      Scroll() {
        Column({ space: 16 }) {
          Column({ space: 10 }) {
            Text('聊天样式')
              .fontSize(17)
              .fontWeight(FontWeight.Medium)
              .fontColor('#101828')
              .width('100%')
              .textAlign(TextAlign.Start)

            ForEach(this.styleOptions, (item: ChatStyleOption) => {
              this.styleOptionCard(item)
            })
          }
          .width('100%')

          Column({ space: 10 }) {
            Text('账户')
              .fontSize(17)
              .fontWeight(FontWeight.Medium)
              .fontColor('#101828')
              .width('100%')
              .textAlign(TextAlign.Start)

            this.actionCard('退出登录', '#E5484D', '#FFECEC', 'logout', () => {
              void this.logout();
            })
          }
          .width('100%')
        }
        .width('100%')
        .padding({ left: 12, right: 12, top: 16, bottom: 24 })
      }
      .scrollBar(BarState.Off)
      .layoutWeight(1)
      .width('100%')
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F8FAFD')
  }
}
