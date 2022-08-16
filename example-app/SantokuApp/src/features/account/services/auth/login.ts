/**
 * ログインします。
 * @param accountId アカウントID
 * @param password パスワード
 * @returns アカウントの切り替え結果
 */
import crashlytics from '@react-native-firebase/crashlytics';
import axios from 'axios';
import {AccountData} from 'features/account/types/AccountData';
import {postLogin} from 'features/backend/apis/account/account';
import {refreshCsrfToken} from 'features/backend/utils/refreshCsrfToken';
import {saveActiveAccountId} from 'features/secure-storage/services/saveActiveAccountId';
import {savePassword} from 'features/secure-storage/services/savePassword';

import {UnauthorizedError} from '../../errors/UnauthorizedError';
import {getAccountData} from '../account/getAccountData';

export const login = async (accountId: string, password: string): Promise<AccountData> => {
  try {
    await postLogin({accountId, password});
    await refreshCsrfToken();
    await saveActiveAccountId(accountId);
    await crashlytics().setUserId(accountId);
    await savePassword(accountId, password);
    return getAccountData();
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 401) {
        throw new UnauthorizedError(e);
      }
    }
    throw e;
  }
};
