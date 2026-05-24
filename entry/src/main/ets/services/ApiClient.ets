import http from '@ohos.net.http';
import { AppConfig } from './AppConfig';
import { CryptoTokenStore } from './CryptoTokenStore';

interface RequestHeaders {
  token: string;
  'device-id': string;
}

interface ProtoRequestHeaders extends RequestHeaders {
  'content-type': string;
  accept: string;
}

interface JsonRequestHeaders extends RequestHeaders {
  'content-type': string;
  accept: string;
}

export class ApiClient {
  private static buildHeaders(): RequestHeaders {
    return {
      token: CryptoTokenStore.getToken(),
      'device-id': AppConfig.DEVICE_ID
    };
  }

  private static buildJsonHeaders(): JsonRequestHeaders {
    return {
      token: CryptoTokenStore.getToken(),
      'device-id': AppConfig.DEVICE_ID,
      'content-type': 'application/json',
      accept: 'application/json'
    };
  }

  private static buildProtoHeaders(): ProtoRequestHeaders {
    return {
      token: CryptoTokenStore.getToken(),
      'device-id': AppConfig.DEVICE_ID,
      'content-type': 'application/x-protobuf',
      accept: 'application/x-protobuf'
    };
  }

  static async postJson<T>(path: string, body: Object): Promise<T> {
    const request: http.HttpRequest = http.createHttp();
    try {
      const options: http.HttpRequestOptions = {
        method: http.RequestMethod.POST,
        header: ApiClient.buildJsonHeaders(),
        extraData: body,
        expectDataType: http.HttpDataType.STRING,
        connectTimeout: 12000,
        readTimeout: 12000
      };
      let response: http.HttpResponse;
      try {
        response = await request.request(`${AppConfig.API_BASE}${path}`, options);
      } catch (error) {
        const err: Error = error as Error;
        throw new Error(err.message || 'json request failed');
      }
      if (response.responseCode < 200 || response.responseCode >= 300) {
        throw new Error(`HTTP ${response.responseCode}`);
      }
      if (typeof response.result !== 'string') {
        throw new Error('Invalid JSON response type');
      }
      return JSON.parse(response.result) as T;
    } finally {
      try {
        request.destroy();
      } catch (_error) {
      }
    }
  }

  static async postProto(path: string): Promise<Uint8Array> {
    const request: http.HttpRequest = http.createHttp();
    try {
      const options: http.HttpRequestOptions = {
        method: http.RequestMethod.POST,
        header: ApiClient.buildProtoHeaders(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
        connectTimeout: 12000,
        readTimeout: 12000
      };
      let response: http.HttpResponse;
      try {
        response = await request.request(`${AppConfig.API_BASE}${path}`, options);
      } catch (error) {
        const err: Error = error as Error;
        throw new Error(err.message || 'protobuf request failed');
      }
      if (response.responseCode < 200 || response.responseCode >= 300) {
        throw new Error(`HTTP ${response.responseCode}`);
      }
      if (!(response.result instanceof ArrayBuffer)) {
        throw new Error('Invalid protobuf response type');
      }
      return new Uint8Array(response.result);
    } finally {
      try {
        request.destroy();
      } catch (_error) {
      }
    }
  }

  static async getProto(path: string): Promise<Uint8Array> {
    const request: http.HttpRequest = http.createHttp();
    try {
      const options: http.HttpRequestOptions = {
        method: http.RequestMethod.GET,
        header: ApiClient.buildProtoHeaders(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
        connectTimeout: 12000,
        readTimeout: 12000
      };
      let response: http.HttpResponse;
      try {
        response = await request.request(`${AppConfig.API_BASE}${path}`, options);
      } catch (error) {
        const err: Error = error as Error;
        throw new Error(err.message || 'protobuf request failed');
      }
      if (response.responseCode < 200 || response.responseCode >= 300) {
        throw new Error(`HTTP ${response.responseCode}`);
      }
      if (!(response.result instanceof ArrayBuffer)) {
        throw new Error('Invalid protobuf response type');
      }
      return new Uint8Array(response.result);
    } finally {
      try {
        request.destroy();
      } catch (_error) {
      }
    }
  }

  static async postProtoWithBody(path: string, body: ArrayBuffer): Promise<Uint8Array> {
    const request: http.HttpRequest = http.createHttp();
    try {
      const options: http.HttpRequestOptions = {
        method: http.RequestMethod.POST,
        header: ApiClient.buildProtoHeaders(),
        extraData: body,
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
        connectTimeout: 12000,
        readTimeout: 12000
      };
      let response: http.HttpResponse;
      try {
        response = await request.request(`${AppConfig.API_BASE}${path}`, options);
      } catch (error) {
        const err: Error = error as Error;
        throw new Error(err.message || 'protobuf request failed');
      }
      if (response.responseCode < 200 || response.responseCode >= 300) {
        throw new Error(`HTTP ${response.responseCode}`);
      }
      if (!(response.result instanceof ArrayBuffer)) {
        throw new Error('Invalid protobuf response type');
      }
      return new Uint8Array(response.result);
    } finally {
      try {
        request.destroy();
      } catch (_error) {
      }
    }
  }
}
