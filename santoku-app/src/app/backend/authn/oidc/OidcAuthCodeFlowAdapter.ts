import * as AppAuth from 'react-native-app-auth';
import { COGNITO_CLIENT_ID, COGNITO_DOMAIN_URL, COGNITO_REDIRECT_URL } from '@env';
import { AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import { AuthenticationState, NotAuthenticated } from '../AuthenticationState';
import { OidcAuthenticated, OidcRefreshableAuthenticated } from './OidcAuthenticationState';

// TODO: Cognito用のクラスを作るとかしたほうがよさそう。
const config: AppAuth.AuthConfiguration = {
  scopes: ['openid', 'profile'],
  clientId: COGNITO_CLIENT_ID,
  redirectUrl: COGNITO_REDIRECT_URL,
  usePKCE: true,
  serviceConfiguration: {
    authorizationEndpoint: `${COGNITO_DOMAIN_URL}/oauth2/authorize`,
    tokenEndpoint: `${COGNITO_DOMAIN_URL}/oauth2/token`,
    revocationEndpoint: `${COGNITO_DOMAIN_URL}/oauth2/revoke`,
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
      return translateAppAuthResult(
        await AppAuth.refresh(config, {
          refreshToken: authnState.refreshToken,
        })
      );
    }
    return authnState;
  }
}

export { OidcAuthCodeFlowAppAuthAdapter as OidcAuthCodeFlowAdapter };
