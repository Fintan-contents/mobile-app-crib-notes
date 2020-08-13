import { AuthenticationState, NotAuthenticated } from '../AuthenticationState';
import { SecureStorageAdapter } from './SecureStorageAdapter';
import { OidcAuthCodeFlowAdapter } from './OidcAuthCodeFlowAdapter';
import { OidcAuthenticated } from './OidcAuthenticationState';

const _api = new OidcAuthCodeFlowAdapter();
const _storage = new SecureStorageAdapter();

class OidcAuthCodeFlowAuthenticationUseCase {
  static INSTANCE = new OidcAuthCodeFlowAuthenticationUseCase(_api, _storage);

  constructor(private api: OidcAuthCodeFlowAdapter, private storage: SecureStorageAdapter) {}

  async signIn(): Promise<AuthenticationState> {
    try {
      const s = await this.api.signIn();
      if (s instanceof OidcAuthenticated) {
        await this.storage.save(s);
      }
      return s;
    } catch (e) {
      // TODO エラー処理
      console.log(e);
    }
    return NotAuthenticated;
  }

  async signOut(authnState: OidcAuthenticated): Promise<void> {
    try {
      await this.api.signOut(authnState);
      await this.storage.delete();
    } catch (e) {
      // TODO エラー処理
      console.log(e);
    }
  }

  async refresh(authnState: OidcAuthenticated): Promise<AuthenticationState> {
    try {
      const s = await this.api.refresh(authnState);
      if (s instanceof OidcAuthenticated) {
        await this.storage.save(s);
      }
      return s;
    } catch (e) {
      // TODO エラー処理
      console.log(e, authnState);
    }
    return NotAuthenticated;
  }

  async loadStoredState(): Promise<AuthenticationState> {
    try {
      return this.storage.load();
    } catch (e) {
      // TODO エラー処理
      console.log(e);
    }
    return NotAuthenticated;
  }
}

export { OidcAuthCodeFlowAuthenticationUseCase };
