import { AuthService } from '../services/AuthService';
import { CryptoTokenStore } from '../services/CryptoTokenStore';

export class LoginViewModel {
  private readonly authService = new AuthService();

  email: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  async login(): Promise<boolean> {
    if (!this.email || !this.password) {
      this.errorMessage = '请输入邮箱和密码';
      return false;
    }
    this.loading = true;
    this.errorMessage = '';
    try {
      const token: string = await this.authService.emailLogin(this.email, this.password);
      CryptoTokenStore.saveToken(token);
      return true;
    } catch (error) {
      const err: Error = error as Error;
      this.errorMessage = err.message || '登录失败';
      return false;
    } finally {
      this.loading = false;
    }
  }

  hasToken(): boolean {
    return CryptoTokenStore.getToken().length > 0;
  }
}
