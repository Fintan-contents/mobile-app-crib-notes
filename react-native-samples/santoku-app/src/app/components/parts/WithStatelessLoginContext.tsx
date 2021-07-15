import React, {useCallback, useState, useEffect} from 'react';
import {Spinner} from 'native-base';
import {AuthenticationState, NotAuthenticated} from '../../backend/authn/AuthenticationState';
import type {
  StatelessLoginContext,
  OidcAuthCodeTokenClaimCallback,
  OidcLogoutCallback,
  OidcRefreshTokenCallback,
} from '../../context/StatelessLoginContext';
import {StatelessLoginProvider} from '../../context/StatelessLoginContext';
import {OidcAuthenticated, OidcRefreshableAuthenticated} from '../../backend/authn/oidc/OidcAuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../../backend/authn/oidc/OidcAuthCodeFlowAuthenticationUseCase';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;

type Props = {
  // 子要素必須なので、あえてPropsに定義
  children: React.ReactNode;
};

const WithStatelessLoginContext: React.FC<Props> = ({children}) => {
  const [authnState, setAuthnState] = useState<AuthenticationState>(NotAuthenticated);
  const [initialized, setInitialized] = useState<boolean>(false);

  const signIn = useCallback<OidcAuthCodeTokenClaimCallback>(async () => {
    setAuthnState(await oidc.signIn());
  }, []);

  const signOut = useCallback<OidcLogoutCallback>(async () => {
    if (authnState instanceof OidcAuthenticated) {
      await oidc.signOut(authnState);
    }
    setAuthnState(NotAuthenticated);
  }, [authnState]);

  const refresh = useCallback<OidcRefreshTokenCallback>(async () => {
    if (authnState instanceof OidcRefreshableAuthenticated) {
      const s = await oidc.refresh(authnState);
      if (s.isAuthenticated()) {
        setAuthnState(s);
      }
    }
  }, [authnState]);

  useEffect(() => {
    oidc
      .loadStoredState()
      .then((result) => setAuthnState(result))
      .finally(() => setInitialized(true));

    return () => {
      setInitialized(false);
    };
  }, []);

  const loginContext: StatelessLoginContext = {
    authState: authnState,
    signIn,
    signOut,
    refresh,
  };

  if (initialized === false) {
    return <Spinner />;
  }

  return <StatelessLoginProvider value={loginContext}>{children}</StatelessLoginProvider>;
};

export default WithStatelessLoginContext;
