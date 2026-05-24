export class ApiResponse<T> {
  code: number = 0;
  msg: string = '';
  data?: T;
}

export class LoginTokenData {
  token: string = '';
}

export class EmailLoginRequest {
  email: string = '';
  password: string = '';
  deviceId: string = '';
  platform: string = '';
}
