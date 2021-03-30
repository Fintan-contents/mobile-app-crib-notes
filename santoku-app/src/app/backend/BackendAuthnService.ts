import axios from 'axios';
import {AppConfig} from '../AppConfig';
import {log} from '../../framework/logging';

const login = async (idToken: string) => {
  try {
    await axios.post(
      `${AppConfig.STATEFUL_AUTH_BASE_URL}/token/login`,
      JSON.stringify({
        idToken: idToken,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (e) {
    // TODO エラー処理
    log.error(() => 'Exception occurred while calling token login api. exception: %o', e);
    throw e;
  }
};

const logout = async () => {
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
    throw e;
  }
};

const getClients = async () => {
  try {
    return await axios.get(`${AppConfig.STATEFUL_AUTH_BASE_URL}/clients`);
  } catch (e) {
    // TODO エラー処理
    log.error(() => 'Exception occured while calling get clients api. exception: %o', e);
    throw e;
  }
};

export const BackendAuthnService = {
  login,
  logout,
  getClients,
};
