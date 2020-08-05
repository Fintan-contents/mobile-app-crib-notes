import { useState, useCallback } from 'react';
import CookieManager from '@react-native-community/cookies';
import type { Cookie } from '@react-native-community/cookies';

import axios from 'axios';
import { STATEFUL_AUTH_BASE_URL, STATEFUL_AUTH_DOMAIN } from '@env';
const SESSION_ID_KEY = 'NABLARCH_SID';

async function clearSessionId(): Promise<void> {
  // CookieManager.clearByNameはiOSでしか使えない
  await CookieManager.clearAll();
}

async function getSessionId(): Promise<Cookie> {
  const cookies = await CookieManager.get(STATEFUL_AUTH_DOMAIN);
  return cookies[SESSION_ID_KEY];
}

async function callLoginApi(userId: string, password: string): Promise<void> {
  try {
    await axios.post(
      `${STATEFUL_AUTH_BASE_URL}/login`,
      JSON.stringify({
        loginId: userId,
        userPassword: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (e) {
    throw e;
  }
}
async function callLogoutApi(): Promise<void> {
  try {
    await axios({
      baseURL: STATEFUL_AUTH_BASE_URL,
      url: '/logout',
      method: 'post',
      headers: {
        contentType: 'application/json',
      },
    });
  } catch (e) {
    // TODO エラー処理
    console.error(e);
  }
}

const useStatefulAuthnService = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionId, setSessionId] = useState<Cookie | null>(null);

  const _clearSessionId = useCallback(async () => {
    await clearSessionId();
    setSessionId(null);
    setIsAuthenticated(false);
  }, []);

  const login = useCallback(async (userId: string, password: string) => {
    await callLoginApi(userId, password);
    const newSessionId = await getSessionId();
    setSessionId(newSessionId);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(async () => {
    await callLogoutApi();
    setIsAuthenticated(false);
    await _clearSessionId();
  }, [_clearSessionId]);

  return {
    login,
    logout,
    isAuthenticated,
    sessionId,
  };
};

export { useStatefulAuthnService };
