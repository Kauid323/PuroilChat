import { NavigationTransition } from '../services/NavigationTransition';
import { MeViewModel } from '../viewmodels/MeViewModel';
import { ChatStyleOption, WebSocketLogViewItem, WebSocketStatusViewState } from '../models/MeModels';

@Component
@Entry
struct Settings {
  private vm: MeViewModel = new MeViewModel();
  @State selectedChatStyle: string = 'telegram-compact';
  @State styleOptions: ChatStyleOption[] = [];
  @State activeStyleKey: string = '';
  @State activeActionKey: string = '';
  @State webSocketLogs: WebSocketLogViewItem[] = [];
  @State webSocketStatus: WebSocketStatusViewState = new WebSocketStatusViewState();

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
    this.vm.onWebSocketLogsUpdated = () => {
      this.webSocketLogs = [...this.vm.webSocketLogs];
    };
    this.vm.onWebSocketStatusUpdated = () => {
      this.webSocketStatus = this.vm.webSocketStatus;
    };
    this.vm.bindWebSocketLogs();
    this.webSocketLogs = [...this.vm.webSocketLogs];
    this.webSocketStatus = this.vm.webSocketStatus;
  }

  aboutToDisappear(): void {
    this.vm.unbindWebSocketLogs();
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

  private clearLogs(): void {
    this.vm.clearWebSocketLogs();
    this.webSocketLogs = [...this.vm.webSocketLogs];
  }

  private statusColor(): string {
    if (this.webSocketStatus.status === 'connected') {
      return '#039855';
    }
    if (this.webSocketStatus.status === 'connecting') {
      return '#0A84FF';
    }
    if (this.webSocketStatus.status === 'error') {
      return '#E5484D';
    }
    return '#667085';
  }

  private async startWebSocket(): Promise<void> {
    this.activeActionKey = 'ws-start';
    try {
      await this.vm.startWebSocket();
    } catch (_error) {
    } finally {
      setTimeout(() => {
        if (this.activeActionKey === 'ws-start') {
          this.activeActionKey = '';
        }
      }, 140);
    }
  }

  private async stopWebSocket(): Promise<void> {
    this.activeActionKey = 'ws-stop';
    try {
      await this.vm.stopWebSocket();
    } catch (_error) {
    } finally {
      setTimeout(() => {
        if (this.activeActionKey === 'ws-stop') {
          this.activeActionKey = '';
        }
      }, 140);
    }
  }

  private async restartWebSocket(): Promise<void> {
    this.activeActionKey = 'ws-restart';
    try {
      await this.vm.restartWebSocket();
    } catch (_error) {
    } finally {
      setTimeout(() => {
        if (this.activeActionKey === 'ws-restart') {
          this.activeActionKey = '';
        }
      }, 140);
    }
  }

  private logLevelColor(level: string): string {
    if (level === 'error') {
      return '#E5484D';
    }
    if (level === 'warn') {
      return '#F79009';
    }
    return '#0A84FF';
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

  @Builder
  webSocketLogCard(item: WebSocketLogViewItem) {
    Column({ space: 6 }) {
      Row({ space: 8 }) {
        Text(item.timeText)
          .fontSize(11)
          .fontColor('#667085')
        Text(item.level.toUpperCase())
          .fontSize(10)
          .fontWeight(FontWeight.Medium)
          .fontColor(this.logLevelColor(item.level))
        Text(item.tag)
          .fontSize(10)
          .fontColor('#344054')
      }
      .width('100%')

      Text(item.message)
        .width('100%')
        .fontSize(12)
        .fontColor('#101828')
        .textAlign(TextAlign.Start)
        .copyOption(CopyOptions.LocalDevice)
    }
    .width('100%')
    .alignItems(HorizontalAlign.Start)
    .padding(12)
    .backgroundColor('#FFFFFF')
    .borderRadius(14)
    .border({ width: 1, color: '#EEF2F6' })
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

          Column({ space: 10 }) {
            Text('WebSocket 状态')
              .fontSize(17)
              .fontWeight(FontWeight.Medium)
              .fontColor('#101828')
              .width('100%')
              .textAlign(TextAlign.Start)

            Column({ space: 8 }) {
              Row({ space: 8 }) {
                Text('status')
                  .fontSize(12)
                  .fontColor('#667085')
                Text(this.webSocketStatus.status)
                  .fontSize(12)
                  .fontWeight(FontWeight.Medium)
                  .fontColor(this.statusColor())
              }
              .width('100%')

              Row({ space: 8 }) {
                Text('started')
                  .fontSize(12)
                  .fontColor('#667085')
                Text(this.webSocketStatus.started ? 'true' : 'false')
                  .fontSize(12)
                  .fontWeight(FontWeight.Medium)
                  .fontColor('#101828')
              }
              .width('100%')

              Row({ space: 8 }) {
                Text('reconnect')
                  .fontSize(12)
                  .fontColor('#667085')
                Text(`${this.webSocketStatus.reconnectAttempt}`)
                  .fontSize(12)
                  .fontWeight(FontWeight.Medium)
                  .fontColor('#101828')
              }
              .width('100%')

              Text(this.webSocketStatus.message.length > 0 ? this.webSocketStatus.message : '-')
                .width('100%')
                .fontSize(12)
                .fontColor('#344054')
                .copyOption(CopyOptions.LocalDevice)
            }
            .width('100%')
            .padding(14)
            .backgroundColor('#FFFFFF')
            .borderRadius(18)
            .border({ width: 1, color: '#EEF2F6' })

            Row({ space: 8 }) {
              Button('启动')
                .layoutWeight(1)
                .height(34)
                .fontSize(13)
                .backgroundColor('#EAF3FF')
                .fontColor('#0A84FF')
                .borderRadius(17)
                .onClick(() => {
                  void this.startWebSocket();
                })

              Button('停止')
                .layoutWeight(1)
                .height(34)
                .fontSize(13)
                .backgroundColor('#FFF1F3')
                .fontColor('#E5484D')
                .borderRadius(17)
                .onClick(() => {
                  void this.stopWebSocket();
                })

              Button('重连')
                .layoutWeight(1)
                .height(34)
                .fontSize(13)
                .backgroundColor('#EEF2FF')
                .fontColor('#4F46E5')
                .borderRadius(17)
                .onClick(() => {
                  void this.restartWebSocket();
                })
            }
            .width('100%')
          }
          .width('100%')

          Column({ space: 10 }) {
            Row() {
              Text('WebSocket 实时日志')
                .fontSize(17)
                .fontWeight(FontWeight.Medium)
                .fontColor('#101828')
              Blank()
              Button('清空')
                .fontSize(12)
                .height(30)
                .backgroundColor('#EAF3FF')
                .fontColor('#0A84FF')
                .borderRadius(15)
                .onClick(() => {
                  this.clearLogs();
                })
            }
            .width('100%')

            Text(`共 ${this.webSocketLogs.length} 条`)
              .width('100%')
              .fontSize(12)
              .fontColor('#667085')

            if (this.webSocketLogs.length === 0) {
              Text('暂无日志')
                .width('100%')
                .fontSize(13)
                .fontColor('#98A2B3')
                .padding({ top: 8, bottom: 8 })
            } else {
              Column({ space: 8 }) {
                ForEach(this.webSocketLogs, (item: WebSocketLogViewItem) => {
                  this.webSocketLogCard(item)
                }, (item: WebSocketLogViewItem) => item.id)
              }
              .width('100%')
            }
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
