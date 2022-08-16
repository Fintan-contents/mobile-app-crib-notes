/**
 * アカウントを切り替えます。
 * @param accountId アカウントID
 * @returns アカウントの切り替え結果
 */
import {AccountData} from 'features/account/types/AccountData';
import {loadPassword} from 'features/secure-storage/services/loadPassword';

import {PasswordNotFoundError} from '../../errors/PasswordNotFoundError';
import {login} from './login';

export const changeAccount = async (accountId: string): Promise<AccountData> => {
  const password = await loadPassword(accountId);
  if (!password) {
    throw new PasswordNotFoundError('The password for the account ID does not exist.');
  }
  return login(accountId, password);
};
