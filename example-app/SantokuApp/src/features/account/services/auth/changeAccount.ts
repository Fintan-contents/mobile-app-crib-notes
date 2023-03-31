/**
 * アカウントを切り替えます。
 * @param accountId アカウントID
 * @returns アカウントの切り替え結果
 */
import {AccountLoginResponse} from 'features/backend/apis/model';
import {loadPassword} from 'features/secure-storage/services/loadPassword';

import {login} from './login';
import {PasswordNotFoundError} from '../../errors/PasswordNotFoundError';

export const changeAccount = async (accountId: string): Promise<AccountLoginResponse> => {
  const password = await loadPassword(accountId);
  if (!password) {
    throw new PasswordNotFoundError('The password for the account ID does not exist.', 'ChangeAccountError');
  }
  return login(accountId, password);
};
