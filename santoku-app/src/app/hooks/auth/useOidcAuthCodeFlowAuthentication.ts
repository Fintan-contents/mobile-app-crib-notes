import { useCallback, useEffect, useState } from 'react';
import { AuthenticationState, NotAuthenticated } from '../../backend/authn/AuthenticationState';
import { OidcAuthenticated, OidcRefreshableAuthenticated } from '../../backend/authn/oidc/OidcAuthenticationState';
import { OidcAuthCodeFlowAuthenticationUseCase } from '../../backend/authn/oidc/OidcAuthCodeFlowAuthenticationUseCase';

interface OidcAuthCodeTokenClaimCallback {
  (): Promise<void>;
}

interface OidcLogoutCallback {
  (): Promise<void>;
}

interface OidcRefreshTokenCallback {
  (): Promise<void>;
}

interface OidcAuthCodeFlowAuthenticationHook {
  signIn: OidcAuthCodeTokenClaimCallback;
  signOut: OidcLogoutCallback;
  refresh: OidcRefreshTokenCallback;
  authState: AuthenticationState;
  loading: boolean;
  // TODO: 本当はこいつはここじゃなくて画面側で持ちたい気がする。
  hasJustSignOut: boolean;
}

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;

function useOidcAuthCodeFlowAuthentication(): OidcAuthCodeFlowAuthenticationHook {
  const [authnState, setAuthnState] = useState<AuthenticationState>(NotAuthenticated);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasJustSignOut, setHasJustSignOut] = useState<boolean>(false);

  const signIn = useCallback(async () => {
    setLoading(true);
    setAuthnState(await oidc.signIn());
    setHasJustSignOut(false);
    setLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    if (authnState instanceof OidcAuthenticated) {
      await oidc.signOut(authnState);
    }
    setAuthnState(NotAuthenticated);
    setHasJustSignOut(true);
    setLoading(false);
  }, [authnState]);

  const refresh = useCallback(async () => {
    setLoading(true);
    if (authnState instanceof OidcRefreshableAuthenticated) {
      const s = await oidc.refresh(authnState);
      if (s.isAuthenticated()) {
        setAuthnState(s);
      }
    }

    setLoading(false);
  }, [authnState]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setAuthnState(await oidc.loadStoredState());
      setLoading(false);
    })();

    return () => {
      setLoading(true);
      setHasJustSignOut(false);
    };
  }, []);

  return {
    authState: authnState,
    loading,
    signIn,
    signOut,
    refresh,
    hasJustSignOut,
  };
}

export type { AuthenticationState };
export { useOidcAuthCodeFlowAuthentication, OidcAuthenticated, OidcRefreshableAuthenticated };
