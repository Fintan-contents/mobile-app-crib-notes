import {AuthenticationState, NotAuthenticated} from '../AuthenticationState';
import {SecureStorageAdapter} from './SecureStorageAdapter';
import {OidcAuthCodeFlowAdapter} from './OidcAuthCodeFlowAdapter';
import {OidcAuthenticated} from './OidcAuthenticationState';
import {log} from '../../../../framework/logging';

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
      log.error(() => 'Exception occurred while signing in. exception: %o', e);
    }
    return NotAuthenticated;
  }

  async signOut(authnState: OidcAuthenticated): Promise<void> {
    try {
      await this.api.signOut(authnState);
      await this.storage.delete();
    } catch (e) {
      // TODO エラー処理
      log.error(() => 'Exception occurred while signing out. exception: %o', e);
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
      log.error(() => 'Exception occurred while refreshing OIDC tokens. state: %o, exception: %o', authnState, e);
    }
    return NotAuthenticated;
  }

  async loadStoredState(): Promise<AuthenticationState> {
    try {
      return this.storage.load();
    } catch (e) {
      // TODO エラー処理
      log.error(() => 'Exception occurred while loading OIDC tokens from storage. exception: %o', e);
    }
    return NotAuthenticated;
  }
}

export {OidcAuthCodeFlowAuthenticationUseCase};
