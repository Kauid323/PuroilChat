import { ApiClient } from './ApiClient';
import { AppConfig } from './AppConfig';
import { ApiResponse, EmailLoginRequest, LoginTokenData } from '../models/AuthModels';

class EmailLoginBody {
  email: string = '';
  password: string = '';
  deviceId: string = '';
  platform: string = '';
}

export class AuthService {
  async emailLogin(email: string, password: string): Promise<string> {
    const payload: EmailLoginRequest = {
      email,
      password,
      deviceId: AppConfig.DEVICE_ID,
      platform: AppConfig.PLATFORM
    };
    const requestBody: EmailLoginBody = new EmailLoginBody();
    requestBody.email = payload.email;
    requestBody.password = payload.password;
    requestBody.deviceId = payload.deviceId;
    requestBody.platform = payload.platform;

    const response: ApiResponse<LoginTokenData> =
      await ApiClient.postJson<ApiResponse<LoginTokenData>>('/v1/user/email-login', requestBody);
    if (response.code !== 1 || !response.data?.token) {
      throw new Error(response.msg || '登录失败');
    }
    return response.data.token;
  }
}
