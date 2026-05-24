import { router } from '@kit.ArkUI';
import { LoginViewModel } from '../viewmodels/LoginViewModel';
import { CryptoTokenStore } from '../services/CryptoTokenStore';
import { NavigationTransition } from '../services/NavigationTransition';

@Entry
@Component
struct Index {
  private vm: LoginViewModel = new LoginViewModel();
  @State email: string = '';
  @State password: string = '';
  @State loading: boolean = false;
  @State errorMessage: string = '';
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
    CryptoTokenStore.initPersistence();
    void this.checkSavedTokenAndRoute();
  }

  private async checkSavedTokenAndRoute(): Promise<void> {
    if (this.vm.hasToken()) {
      await this.goHomeAndResetStack();
    }
  }

  private async goHomeAndResetStack(): Promise<void> {
    try {
      await this.getUIContext().getRouter().pushUrl({ url: 'pages/Home' });
      setTimeout(() => {
        this.getUIContext().getRouter().clear();
      }, NavigationTransition.PUSH_ENTER_MS + 20);
    } catch (_err) {
    }
  }

  private async doLogin(): Promise<void> {
    this.vm.email = this.email;
    this.vm.password = this.password;
    const success: boolean = await this.vm.login();
    this.syncFromVm();
    if (success) {
      await this.goHomeAndResetStack();
    }
  }

  private syncFromVm(): void {
    this.loading = this.vm.loading;
    this.errorMessage = this.vm.errorMessage;
  }

  build() {
    Column({ space: 20 }) {
      Column({ space: 8 }) {
        Text('Welcome Back')
          .fontSize(36)
          .fontWeight(FontWeight.Bold)
          .fontColor('#111827')

        Text('Sign in to continue')
          .fontSize(16)
          .fontColor('#6B7280')
      }
      .width('86%')
      .alignItems(HorizontalAlign.Start)
      .margin({ bottom: 8 })

      Column({ space: 0 }) {
        TextInput({ placeholder: 'Email', text: this.email })
          .onChange((value: string) => {
            this.email = value;
          })
          .width('100%')
          .height(54)
          .padding({ left: 16, right: 16 })
          .backgroundColor('#F3F4F6')
          .borderRadius({ topLeft: 14, topRight: 14, bottomLeft: 0, bottomRight: 0 })

        Divider()
          .strokeWidth(1)
          .color('#E5E7EB')

        TextInput({ placeholder: 'Password', text: this.password })
          .type(InputType.Password)
          .onChange((value: string) => {
            this.password = value;
          })
          .width('100%')
          .height(54)
          .padding({ left: 16, right: 16 })
          .backgroundColor('#F3F4F6')
          .borderRadius({ topLeft: 0, topRight: 0, bottomLeft: 14, bottomRight: 14 })
      }
      .width('86%')

      Button(this.loading ? 'Signing in...' : 'Continue')
        .width('86%')
        .height(52)
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .fontColor(Color.White)
        .backgroundColor('#0A84FF')
        .borderRadius(14)
        .margin({ top: 6, bottom: 4 })
        .enabled(!this.loading)
        .onClick(() => {
          this.loading = true;
          this.errorMessage = '';
          this.doLogin().finally(() => {
            this.syncFromVm();
          });
        })

      if (this.errorMessage.length > 0) {
        Text(this.errorMessage)
          .fontSize(13)
          .fontColor('#E5484D')
      }

      Text('Email/password login, token will be encrypted in local storage')
        .fontSize(13)
        .fontColor('#9CA3AF')
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
    .backgroundColor('#F8FAFC')
  }
}
