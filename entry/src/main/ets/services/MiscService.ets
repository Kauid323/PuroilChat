import { ApiClient } from './ApiClient';
import { WebSocketConfigureDistributionResponse, WebSocketRouteConfig } from '../models/WebSocketModels';

export class MiscService {
  async getWebSocketRoute(): Promise<WebSocketRouteConfig> {
    const response: WebSocketConfigureDistributionResponse =
      await ApiClient.getJson<WebSocketConfigureDistributionResponse>('/v1/misc/configure-distribution');
    if (response.code !== 1 || response.data.websocketUrl.length === 0) {
      throw new Error(response.msg || 'load websocket route failed');
    }

    const config: WebSocketRouteConfig = new WebSocketRouteConfig();
    config.websocketUrl = response.data.websocketUrl;
    return config;
  }
}
