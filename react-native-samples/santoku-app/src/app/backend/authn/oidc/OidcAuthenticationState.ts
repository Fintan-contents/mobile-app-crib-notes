import {AuthenticationState, NotAuthenticated} from '../AuthenticationState';

type OidcAuthenticatedStateProps = {
  readonly accessTokenExpirationDate: string;
  readonly accessToken: string;
  readonly idToken: string;
};

class OidcAuthenticated implements AuthenticationState {
  readonly accessTokenExpirationDate: string;
  readonly accessToken: string;
  readonly idToken: string;

  constructor(result: OidcAuthenticatedStateProps) {
    this.accessTokenExpirationDate = result.accessTokenExpirationDate;
    this.accessToken = result.accessToken;
    this.idToken = result.idToken;
  }

  public isAuthenticated(): boolean {
    // TODO: accessTokenExpirationDateをチェックする必要があるのでは？
    return true;
  }
}

class OidcRefreshableAuthenticated extends OidcAuthenticated {
  readonly refreshToken: string;

  // TODO: refreshTokenがnullじゃないことを保証したいんだけど、これでいいんだろうか、、、
  constructor(result: OidcAuthenticatedStateProps, refreshToken: string) {
    super(result);
    this.refreshToken = refreshToken;
  }
}

type OidcAuthenticatedStateTranslateProps = {
  readonly accessTokenExpirationDate?: string | null;
  readonly accessToken?: string | null;
  readonly idToken?: string | null;
  readonly refreshToken?: string | null;
};

class OidcAuthenticationStateTranslator {
  static translateFromObject(obj: OidcAuthenticatedStateTranslateProps): AuthenticationState {
    // TODO: たぶん、accessTokenExpirationDateの検証も必要なんじゃないかなぁ？
    if (!obj.accessTokenExpirationDate || !obj.accessToken || !obj.idToken) {
      return NotAuthenticated;
    }
    if (obj.refreshToken) {
      // TODO: 上でnullチェックしてるけど、objをそのまま渡すとエラーになる。うまいやり方はないものか。
      return new OidcRefreshableAuthenticated(
        {
          accessTokenExpirationDate: obj.accessTokenExpirationDate,
          accessToken: obj.accessToken,
          idToken: obj.idToken,
        },
        obj.refreshToken,
      );
    }
    return new OidcAuthenticated({
      accessTokenExpirationDate: obj.accessTokenExpirationDate,
      accessToken: obj.accessToken,
      idToken: obj.idToken,
    });
  }
}

export {OidcAuthenticationStateTranslator, OidcAuthenticated, OidcRefreshableAuthenticated};
