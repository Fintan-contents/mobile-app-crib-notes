import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {isUnauthorizedError} from 'features/account/errors/UnauthorizedError';
import {AccountLoginResponse} from 'features/backend/apis/model';
import {loadActiveAccountId} from 'features/secure-storage/services/loadActiveAccountId';

import {canAutoLogin} from './canAutoLogin';
import {changeAccount} from './changeAccount';
import {ActiveAccountIdNotFoundError} from '../../errors/ActiveAccountIdNotFoundError';

/**
 * 自動ログインします。
 * @returns アカウントのログイン結果
 */
export const autoLogin = async (): Promise<AccountLoginResponse | undefined> => {
  if (!(await canAutoLogin())) {
    return undefined;
  }
  const accountId = await loadActiveAccountId();
  if (!accountId) {
    throw new ActiveAccountIdNotFoundError('There is no auto-login enabled account.', 'AutoLoginError');
  }
  try {
    return await changeAccount(accountId);
  } catch (e) {
    if (isUnauthorizedError(e)) {
      // 認証エラーは処理成功として扱う
      return undefined;
    } else {
      throw new RuntimeError(e, 'AutoLoginError');
    }
  }
};
