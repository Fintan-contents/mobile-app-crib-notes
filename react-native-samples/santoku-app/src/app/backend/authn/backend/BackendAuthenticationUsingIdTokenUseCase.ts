import {AuthenticationState, NotAuthenticated} from '../AuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../oidc/OidcAuthCodeFlowAuthenticationUseCase';
import {OidcAuthenticated, OidcRefreshableAuthenticated} from '../oidc/OidcAuthenticationState';
import {log} from '../../../../framework/logging';
import {BackendAuthnService} from '../../BackendAuthnService';
import {BackendAuthenticationState} from './BackendAuthenticationState';
import * as LocalAuthentication from 'expo-local-authentication';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;

class BackendAuthenticationUsingIDTokenUseCase {
  static INSTANCE = new BackendAuthenticationUsingIDTokenUseCase();

  async signInBackend(oidcAuthnState: OidcAuthenticated): Promise<BackendAuthenticationState> {
    try {
      await BackendAuthnService.login(oidcAuthnState.idToken);
      return new BackendAuthenticationState(oidcAuthnState, true);
    } catch (e) {
      // Backend server returns 4xx, 5xx or timeout.
      log.error(() => 'Exception occurred while login backend server. exception: %o', e);
      return new BackendAuthenticationState(NotAuthenticated, false);
    }
  }

  async signOutBackend(): Promise<void> {
    await BackendAuthnService.logout();
  }

  async localAuthenticationAsync(): Promise<boolean> {
    const result = await LocalAuthentication.authenticateAsync();
    return result.success;
  }

  async establishNewSessionAsync(): Promise<BackendAuthenticationState> {
    const newOidcAuthnState = await oidc.signIn();
    if (!newOidcAuthnState.isAuthenticated()) {
      // Authentication failed or canceled (e.g. close in-app browser)
      const backendNotAuthenticated = new BackendAuthenticationState(NotAuthenticated, false);
      return backendNotAuthenticated;
    }
    const oidcAuthnState = newOidcAuthnState as OidcAuthenticated;
    return await this.signInBackend(oidcAuthnState);
  }

  async refreshSessionAsync(storedOidcAuthnState: OidcRefreshableAuthenticated): Promise<BackendAuthenticationState> {
    const localAuthenticationSuccess = await this.localAuthenticationAsync();
    if (!localAuthenticationSuccess) {
      // local authentication canceled
      return await this.establishNewSessionAsync();
    }
    const refreshedOidcAuthnState = await oidc.refresh(storedOidcAuthnState);
    if (!refreshedOidcAuthnState.isAuthenticated()) {
      // Refresh token expired, invalid, user deleted or Cognito server down.
      // TODO: delete stored refresh token
      return await this.establishNewSessionAsync();
    }
    const oidcAuthnState = refreshedOidcAuthnState as OidcAuthenticated;
    return await this.signInBackend(oidcAuthnState);
  }

  async signIn(): Promise<BackendAuthenticationState> {
    try {
      const storedOidcAuthnState = await oidc.loadStoredState();
      if (storedOidcAuthnState.isAuthenticated() && storedOidcAuthnState instanceof OidcRefreshableAuthenticated) {
        // Refresh token exists
        return await this.refreshSessionAsync(storedOidcAuthnState);
      } else {
        // No refresh token
        return await this.establishNewSessionAsync();
      }
    } catch (e) {
      log.error(() => 'Exception occurred while signing in. exception: %o', e);
      const backendNotAuthenticated = new BackendAuthenticationState(NotAuthenticated, false);
      return backendNotAuthenticated;
    }
  }

  async signOut(backendAuthnState: AuthenticationState): Promise<void> {
    try {
      if (backendAuthnState instanceof BackendAuthenticationState) {
        const oidcAuthnState = backendAuthnState.getOidcAuthenticationState();
        if (oidcAuthnState instanceof OidcAuthenticated) {
          // OIDC認証破棄
          await oidc.signOut(oidcAuthnState);
        }
      }
      // バックエンド認証破棄
      await this.signOutBackend();
    } catch (e) {
      log.error(() => 'Exception occurred while signing out. exception: %o', e);
    }
  }
}

export {BackendAuthenticationUsingIDTokenUseCase};
