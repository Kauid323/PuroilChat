import util from '@ohos.util';
import { preferences } from '@kit.ArkData';
import { AppContextHolder } from './AppContextHolder';

const TOKEN_KEY: string = 'auth_token_cipher';
const STORE_NAME: string = 'lite_auth_store';
const SECRET_KEY: string = 'lite-arkuix-secret-v1';
const BASE64_HELPER: util.Base64Helper = new util.Base64Helper();
const UTF8_ENCODER: util.TextEncoder = util.TextEncoder.create('utf-8');
const UTF8_DECODER: util.TextDecoder = util.TextDecoder.create('utf-8');

function xorBytes(input: Uint8Array, key: Uint8Array): Uint8Array {
  const output: Uint8Array = new Uint8Array(input.length);
  if (key.length === 0) {
    return output;
  }
  for (let i = 0; i < input.length; i++) {
    output[i] = input[i] ^ key[i % key.length];
  }
  return output;
}

function encryptToken(token: string): string {
  const plain: Uint8Array = UTF8_ENCODER.encodeInto(token);
  const key: Uint8Array = UTF8_ENCODER.encodeInto(SECRET_KEY);
  const cipher: Uint8Array = xorBytes(plain, key);
  return BASE64_HELPER.encodeToStringSync(cipher);
}

function decryptToken(cipherText: string): string {
  const cipher: Uint8Array = BASE64_HELPER.decodeSync(cipherText);
  const key: Uint8Array = UTF8_ENCODER.encodeInto(SECRET_KEY);
  const plain: Uint8Array = xorBytes(cipher, key);
  return UTF8_DECODER.decodeToString(plain);
}

export class CryptoTokenStore {
  private static cachedEncryptedToken: string = '';
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
    if (CryptoTokenStore.initialized) {
      return;
    }
    const store: preferences.Preferences | undefined = CryptoTokenStore.ensureStore();
    if (store === undefined) {
      return;
    }
    let storedValue: preferences.ValueType = '';
    try {
      storedValue = store.getSync(TOKEN_KEY, '');
    } catch (_error) {
      storedValue = '';
    }
    if (typeof storedValue === 'string') {
      CryptoTokenStore.cachedEncryptedToken = storedValue;
    } else {
      CryptoTokenStore.cachedEncryptedToken = '';
    }
    AppStorage.setOrCreate<string>(TOKEN_KEY, CryptoTokenStore.cachedEncryptedToken);
    CryptoTokenStore.initialized = true;
  }

  static saveToken(token: string): void {
    const encrypted: string = encryptToken(token);
    CryptoTokenStore.cachedEncryptedToken = encrypted;
    AppStorage.setOrCreate<string>(TOKEN_KEY, encrypted);

    const store: preferences.Preferences | undefined = CryptoTokenStore.ensureStore();
    if (store === undefined) {
      return;
    }
    try {
      store.putSync(TOKEN_KEY, encrypted);
      store.flushSync();
    } catch (_error) {
    }
  }

  static getToken(): string {
    let encrypted: string = '';
    const storedInMemory: string | undefined = AppStorage.get<string>(TOKEN_KEY);
    if (storedInMemory !== undefined && storedInMemory.length > 0) {
      encrypted = storedInMemory;
    } else if (CryptoTokenStore.cachedEncryptedToken.length > 0) {
      encrypted = CryptoTokenStore.cachedEncryptedToken;
    } else {
      const store: preferences.Preferences | undefined = CryptoTokenStore.ensureStore();
      if (store !== undefined) {
        let storedValue: preferences.ValueType = '';
        try {
          storedValue = store.getSync(TOKEN_KEY, '');
        } catch (_error) {
          storedValue = '';
        }
        if (typeof storedValue === 'string') {
          encrypted = storedValue;
          CryptoTokenStore.cachedEncryptedToken = encrypted;
          AppStorage.setOrCreate<string>(TOKEN_KEY, encrypted);
        }
      }
    }

    if (encrypted.length === 0) {
      return '';
    }
    try {
      return decryptToken(encrypted);
    } catch (_error) {
      return '';
    }
  }

  static clearToken(): void {
    CryptoTokenStore.cachedEncryptedToken = '';
    AppStorage.setOrCreate<string>(TOKEN_KEY, '');

    const store: preferences.Preferences | undefined = CryptoTokenStore.ensureStore();
    if (store === undefined) {
      return;
    }
    try {
      store.deleteSync(TOKEN_KEY);
      store.flushSync();
    } catch (_error) {
    }
  }
}
