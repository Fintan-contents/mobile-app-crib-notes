import * as AppAuth from 'react-native-app-auth';
import {AuthorizeResult, RefreshResult} from 'react-native-app-auth';
import {AppConfig} from '../../../AppConfig';
import {AuthenticationState, NotAuthenticated} from '../AuthenticationState';
import {OidcAuthenticated, OidcRefreshableAuthenticated} from './OidcAuthenticationState';

// TODO: Cognito用のクラスを作るとかしたほうがよさそう。
const config: AppAuth.AuthConfiguration = {
  scopes: ['openid', 'profile'],
  clientId: AppConfig.COGNITO_CLIENT_ID,
  redirectUrl: AppConfig.COGNITO_REDIRECT_URL,
  usePKCE: true,
  serviceConfiguration: {
    authorizationEndpoint: `${AppConfig.COGNITO_DOMAIN_URL}/oauth2/authorize`,
    tokenEndpoint: `${AppConfig.COGNITO_DOMAIN_URL}/oauth2/token`,
    revocationEndpoint: `${AppConfig.COGNITO_DOMAIN_URL}/oauth2/revoke`,
  },
};

const translateAppAuthResult: (result: AuthorizeResult | RefreshResult) => AuthenticationState = (result: AuthorizeResult | RefreshResult) => {
  if (!result.accessTokenExpirationDate || !result.accessToken || !result.idToken) {
    // TODO: このチェックいる？AppAuthの仕様次第では必要ないような気がしている
    return NotAuthenticated;
  }
  if (result.refreshToken) {
    return new OidcRefreshableAuthenticated(result, result.refreshToken);
  }
  return new OidcAuthenticated(result);
};

interface OidcAuthCodeFlowAdapter {
  signIn(): Promise<AuthenticationState>;

  signOut(authnState: OidcAuthenticated): Promise<void>;

  refresh(authnState: OidcAuthenticated): Promise<AuthenticationState>;
}

class OidcAuthCodeFlowAppAuthAdapter implements OidcAuthCodeFlowAdapter {
  async signIn(): Promise<AuthenticationState> {
    return translateAppAuthResult(await AppAuth.authorize(config));
  }

  async signOut(authnState: OidcAuthenticated): Promise<void> {
    const idToken = authnState.idToken;
    await AppAuth.revoke(config, {
      tokenToRevoke: idToken,
      includeBasicAuth: true,
      sendClientId: true,
    });
  }

  async refresh(authnState: OidcAuthenticated): Promise<AuthenticationState> {
    if (authnState instanceof OidcRefreshableAuthenticated) {
      const result = await AppAuth.refresh(config, {
        refreshToken: authnState.refreshToken,
      });

      return translateAppAuthResult({
        accessToken: result.accessToken,
        accessTokenExpirationDate: result.accessTokenExpirationDate,
        idToken: result.idToken,
        tokenType: result.tokenType,
        refreshToken: result.refreshToken ? result.refreshToken : authnState.refreshToken,
      });
    }
    return authnState;
  }
}

export {OidcAuthCodeFlowAppAuthAdapter as OidcAuthCodeFlowAdapter};
