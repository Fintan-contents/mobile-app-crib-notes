import { useCallback, useEffect, useState } from 'react';
import * as AppAuth from 'react-native-app-auth';
import * as SecureStore from 'expo-secure-store';
import { COGNITO_CLIENT_ID, COGNITO_DOMAIN_URL, COGNITO_REDIRECT_URL } from '@env';

export type AuthState = {
  accessTokenExpirationDate: string;
  idToken: string;
  refreshToken?: string;
  accessToken: string;
};

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

async function signInAsync(): Promise<any> {
  return await AppAuth.authorize(config);
}

async function signOutAsync({ idToken }: { idToken: string }) {
  await AppAuth.revoke(config, {
    tokenToRevoke: idToken,
    includeBasicAuth: true,
    sendClientId: true,
  });
}

async function refreshAuthAsync({ refreshToken }: { refreshToken: string }) {
  return await AppAuth.refresh(config, {
    refreshToken,
  });
}

async function _saveAuthState({ accessTokenExpirationDate, idToken, refreshToken, accessToken }: AuthState) {
  accessTokenExpirationDate && (await SecureStore.setItemAsync('authState-accessTokenExpirationDate', JSON.stringify(accessTokenExpirationDate)));
  idToken && (await SecureStore.setItemAsync('authState-idToken', JSON.stringify(idToken)));
  refreshToken && (await SecureStore.setItemAsync('authState-refreshToken', JSON.stringify(refreshToken)));
  accessToken && (await SecureStore.setItemAsync('authState-accessToken', JSON.stringify(accessToken)));
}

async function _getAuthState() {
  const accessTokenExpirationDate = await SecureStore.getItemAsync('authState-accessTokenExpirationDate');
  const idToken = await SecureStore.getItemAsync('authState-idToken');
  const refreshToken = await SecureStore.getItemAsync('authState-refreshToken');
  const accessToken = await SecureStore.getItemAsync('authState-accessToken');

  if (!accessTokenExpirationDate || !idToken || !refreshToken || !accessToken) {
    return null;
  }

  return {
    accessTokenExpirationDate: JSON.parse(accessTokenExpirationDate),
    idToken: JSON.parse(idToken),
    refreshToken: JSON.parse(refreshToken),
    accessToken: JSON.parse(accessToken),
  };
}

async function _deleteAuthState() {
  await SecureStore.deleteItemAsync('authState-accessTokenExpirationDate');
  await SecureStore.deleteItemAsync('authState-idToken');
  await SecureStore.deleteItemAsync('authState-refreshToken');
  await SecureStore.deleteItemAsync('authState-accessToken');
}

const useStatelessAuthState = () => {
  const [authState, setAuthState] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasJustSignOut, setHasJustSignOut] = useState<boolean>(false);

  const signIn = useCallback(async () => {
    setLoading(true);

    try {
      const s = await signInAsync();
      await _saveAuthState(s);
      setAuthState(s);
      setHasJustSignOut(false);
    } catch (e) {
      // TODO エラー処理
      console.log(e);
    }

    setLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    try {
      await signOutAsync(authState);
      await _deleteAuthState();
      setAuthState(null);
      setHasJustSignOut(true);
    } catch (e) {
      // TODO エラー処理
      console.log(e);
    }

    setLoading(false);
  }, [authState]);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const { accessTokenExpirationDate, idToken, accessToken } = await refreshAuthAsync(authState);
      await _saveAuthState({
        accessTokenExpirationDate,
        idToken,
        accessToken,
      });
      setAuthState((prev: any) => ({
        ...prev,
        ...{
          accessTokenExpirationDate,
          idToken,
          accessToken,
        },
      }));
    } catch (e) {
      // TODO エラー処理
      console.log(e, authState);
    }

    setLoading(false);
  }, [authState]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const _authState = await _getAuthState();
        if (_authState) {
          setAuthState(_authState);
        }
      } catch (e) {
        // TODO エラー処理
        console.log(e);
      }

      setLoading(false);
    })();

    return () => {
      setLoading(true);
      setHasJustSignOut(false);
    };
  }, []);

  return {
    authState,
    loading,
    signIn,
    signOut,
    refresh,
    hasJustSignOut,
  };
};

export default useStatelessAuthState;
