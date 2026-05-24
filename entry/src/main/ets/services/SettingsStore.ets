import { preferences } from '@kit.ArkData';
import { AppContextHolder } from './AppContextHolder';

const STORE_NAME: string = 'lite_settings_store';
const CHAT_STYLE_KEY: string = 'chat_style_name';

export class SettingsStore {
  private static cachedChatStyle: string = '';
  private static initialized: boolean = false;

  private static ensureStore(): preferences.Preferences | undefined {
    const context = AppContextHolder.getContext();
    if (context === undefined) {
      return undefined;
    }
    try {
      return preferences.getPreferencesSync(context, { name: STORE_NAME });
    } catch (_error) {
      return undefined;
    }
  }

  static initPersistence(): void {
    if (SettingsStore.initialized) {
      return;
    }
    const store: preferences.Preferences | undefined = SettingsStore.ensureStore();
    if (store === undefined) {
      return;
    }
    let storedValue: preferences.ValueType = 'telegram-compact';
    try {
      storedValue = store.getSync(CHAT_STYLE_KEY, 'telegram-compact');
    } catch (_error) {
      storedValue = 'telegram-compact';
    }
    SettingsStore.cachedChatStyle = typeof storedValue === 'string' ? storedValue : 'telegram-compact';
    AppStorage.setOrCreate<string>(CHAT_STYLE_KEY, SettingsStore.cachedChatStyle);
    SettingsStore.initialized = true;
  }

  static getChatStyle(): string {
    const inMemory: string | undefined = AppStorage.get<string>(CHAT_STYLE_KEY);
    if (inMemory !== undefined && inMemory.length > 0) {
      return inMemory;
    }
    if (SettingsStore.cachedChatStyle.length > 0) {
      return SettingsStore.cachedChatStyle;
    }
    SettingsStore.initPersistence();
    if (SettingsStore.cachedChatStyle.length > 0) {
      return SettingsStore.cachedChatStyle;
    }
    return 'telegram-compact';
  }

  static saveChatStyle(styleName: string): void {
    const safeStyle: string = styleName.length > 0 ? styleName : 'telegram-compact';
    SettingsStore.cachedChatStyle = safeStyle;
    AppStorage.setOrCreate<string>(CHAT_STYLE_KEY, safeStyle);
    const store: preferences.Preferences | undefined = SettingsStore.ensureStore();
    if (store === undefined) {
      return;
    }
    try {
      store.putSync(CHAT_STYLE_KEY, safeStyle);
      store.flushSync();
    } catch (_error) {
    }
  }
}
