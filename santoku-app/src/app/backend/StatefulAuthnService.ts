import type {Cookie} from '@react-native-community/cookies';
import CookieManager from '@react-native-community/cookies';

import axios from 'axios';
import {AppConfig} from '../AppConfig';
import {log} from '../../framework/logging';

const SESSION_ID_KEY = 'NABLARCH_SID';

export interface LoginCredential {
  userId: string;
  password: string;
}

export type SessionId = Cookie | null;

export interface StatefulAuthnService {
  clearSessionId: () => Promise<void>;
  getSessionId: () => Promise<Cookie>;
  login: (loginCredential: LoginCredential) => Promise<void>;
  logout: () => Promise<void>;
}

async function clearSessionId(): Promise<void> {
  // CookieManager.clearByNameはiOSでしか使えない
  await CookieManager.clearAll();
}

async function getSessionId(): Promise<Cookie> {
  const cookies = await CookieManager.get(AppConfig.STATEFUL_AUTH_DOMAIN);
  return cookies[SESSION_ID_KEY];
}

async function login({userId, password}: LoginCredential): Promise<void> {
  try {
    await axios.post(
      `${AppConfig.STATEFUL_AUTH_BASE_URL}/login`,
      JSON.stringify({
        loginId: userId,
        userPassword: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (e) {
    // 入力チェックエラーのハンドリングはコンポーネントに委ねる
    if (e.response.status === 400) {
      throw e;
    }

    // TODO エラー処理
    log.error(() => 'Exception occurred while calling login api. exception: %o', e);
  }
}

async function logout(): Promise<void> {
  try {
    await axios({
      baseURL: AppConfig.STATEFUL_AUTH_BASE_URL,
      url: '/logout',
      method: 'post',
      headers: {
        contentType: 'application/json',
      },
    });
  } catch (e) {
    // TODO エラー処理
    log.error(() => 'Exception occurred while calling logout api. exception: %o', e);
  }
}

export const statefulAuthnService: StatefulAuthnService = {
  clearSessionId,
  getSessionId,
  login,
  logout,
};
