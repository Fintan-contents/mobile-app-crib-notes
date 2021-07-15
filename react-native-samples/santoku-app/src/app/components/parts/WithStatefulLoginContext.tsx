import React, {useCallback, useState} from 'react';
import type {StatefulLoginContext, LoginApiAdapter, LogoutApiAdapter} from '../../context/StatefulLoginContext';
import {StatefulLoginProvider} from '../../context/StatefulLoginContext';
import type {LoginCredential, SessionId} from '../../backend/StatefulAuthnService';
import {statefulAuthnService} from '../../backend/StatefulAuthnService';

type Props = {
  // 子要素必須なので、あえてPropsにて定義
  children: React.ReactNode;
};

const WithStatefulLoginContext: React.FC<Props> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<SessionId>(null);

  const clearSessionId = useCallback(async () => {
    await statefulAuthnService.clearSessionId();
    setSessionId(null);
    setIsAuthenticated(false);
  }, []);

  const login = useCallback<LoginApiAdapter>(async (credential: LoginCredential) => {
    await statefulAuthnService.login(credential);
    const newSessionId = await statefulAuthnService.getSessionId();
    setSessionId(newSessionId);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback<LogoutApiAdapter>(async () => {
    await statefulAuthnService.logout();
    setIsAuthenticated(false);
    await clearSessionId();
  }, [clearSessionId]);

  const loginContext: StatefulLoginContext = {
    login,
    logout,
    isAuthenticated,
    sessionId,
  };

  return <StatefulLoginProvider value={loginContext}>{children}</StatefulLoginProvider>;
};

export default WithStatefulLoginContext;
