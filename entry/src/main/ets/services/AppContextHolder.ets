import { common } from '@kit.AbilityKit';

export class AppContextHolder {
  private static context: common.UIAbilityContext | undefined = undefined;

  static setContext(context: common.UIAbilityContext): void {
    AppContextHolder.context = context;
  }

  static getContext(): common.UIAbilityContext | undefined {
    return AppContextHolder.context;
  }
}
