/**
 * ログインします。
 * @param accountId アカウントID
 * @param password パスワード
 * @returns アカウントの切り替え結果
 */
import crashlytics from '@react-native-firebase/crashlytics';
import axios from 'axios';
import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {postLogin} from 'features/backend/apis/account/account';
import {AccountLoginResponse} from 'features/backend/apis/model';
import {refreshCsrfToken} from 'features/backend/utils/refreshCsrfToken';
import {saveActiveAccountId} from 'features/secure-storage/services/saveActiveAccountId';
import {savePassword} from 'features/secure-storage/services/savePassword';

import {UnauthorizedError} from '../../errors/UnauthorizedError';

export const login = async (accountId: string, password: string): Promise<AccountLoginResponse> => {
  try {
    const response = await postLogin({accountId, password});
    await refreshCsrfToken();
    await saveActiveAccountId(accountId);
    await crashlytics().setUserId(accountId);
    await savePassword(accountId, password);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 401) {
        throw new UnauthorizedError(e, 'LoginError');
      }
    }
    throw new RuntimeError(e, 'LoginError');
  }
};
