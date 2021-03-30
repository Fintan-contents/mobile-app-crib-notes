import React, {useCallback, useEffect, useState} from 'react';
import {NotAuthenticated} from '../../backend/authn/AuthenticationState';
import type {BackendAuthContext} from '../../context/BackendAuthContext';
import {BackendAuthProvider} from '../../context/BackendAuthContext';
import {BackendAuthenticationUsingIDTokenUseCase} from '../../backend/authn/backend/BackendAuthenticationUsingIdTokenUseCase';
import {BackendAuthenticationState} from '../../backend/authn/backend/BackendAuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../../backend/authn/oidc/OidcAuthCodeFlowAuthenticationUseCase';
import {Spinner} from 'native-base';
import {OidcRefreshableAuthenticated} from '../../backend/authn/oidc/OidcAuthenticationState';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;
const backendAuth = BackendAuthenticationUsingIDTokenUseCase.INSTANCE;

type Props = {
  // 子要素必須なので、あえてPropsに定義
  children: React.ReactNode;
};

const WithBackendAuthContext: React.FC<Props> = ({children}) => {
  const backendNotAuthenticated = new BackendAuthenticationState(NotAuthenticated, false);
  const [backendAuthnState, setBackendAuthnState] = useState<BackendAuthenticationState>(backendNotAuthenticated);
  const [initialized, setInitialized] = useState<boolean>(false);

  const signIn = useCallback(async () => {
    const newBackendAuthnState = await backendAuth.signIn();
    setBackendAuthnState(newBackendAuthnState);
  }, []);

  const signOut = useCallback(async () => {
    await backendAuth.signOut(backendAuthnState);
    setBackendAuthnState(new BackendAuthenticationState(NotAuthenticated, false));
  }, [backendAuthnState]);

  const refreshSession = useCallback(async () => {
    const oidcAuthnState = backendAuthnState.getOidcAuthenticationState();
    if (oidcAuthnState.isAuthenticated()) {
      const newBackendAuthnState = await backendAuth.refreshSessionAsync(oidcAuthnState as OidcRefreshableAuthenticated);
      setBackendAuthnState(newBackendAuthnState);
    } else {
      setBackendAuthnState(new BackendAuthenticationState(NotAuthenticated, false));
    }
  }, [backendAuthnState]);

  const authContext: BackendAuthContext = {
    authnState: backendAuthnState,
    signIn,
    signOut,
    refreshSession,
    isLoggedIn: backendAuthnState.isAuthenticated(),
  };

  useEffect(() => {
    oidc
      .loadStoredState()
      .then((oidcAuthnState) => setBackendAuthnState(new BackendAuthenticationState(oidcAuthnState, false)))
      .finally(() => setInitialized(true));
    return () => {
      setInitialized(false);
    };
  }, []);

  if (!initialized) {
    return <Spinner />;
  } else {
    return <BackendAuthProvider value={authContext}>{children}</BackendAuthProvider>;
  }
};

export default WithBackendAuthContext;
