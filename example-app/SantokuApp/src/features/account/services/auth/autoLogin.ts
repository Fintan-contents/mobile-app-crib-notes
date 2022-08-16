import {isUnauthorizedError} from 'features/account/errors/UnauthorizedError';
import {AccountData} from 'features/account/types/AccountData';
import {loadActiveAccountId} from 'features/secure-storage/services/loadActiveAccountId';

import {ActiveAccountIdNotFoundError} from '../../errors/ActiveAccountIdNotFoundError';
import {canAutoLogin} from './canAutoLogin';
import {changeAccount} from './changeAccount';

/**
 * 自動ログインします。
 * @returns アカウントのログイン結果
 */
export const autoLogin = async (): Promise<AccountData | undefined> => {
  if (!(await canAutoLogin())) {
    return undefined;
  }
  const accountId = await loadActiveAccountId();
  if (!accountId) {
    throw new ActiveAccountIdNotFoundError('There is no auto-login enabled account.');
  }
  try {
    return changeAccount(accountId);
  } catch (e) {
    if (isUnauthorizedError(e)) {
      // 認証エラーは処理成功として扱う
      return undefined;
    } else {
      throw e;
    }
  }
};
