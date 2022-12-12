/**
 * サインアップします。
 * @returns アカウント
 */
import {generatePassword} from 'bases/core/utils/generatePassword';
import {postSignup} from 'features//backend/apis/account/account';
import {AccountLoginResponse} from 'features/backend/apis/model';

import {login} from './login';

export const signup = async (nickname: string): Promise<AccountLoginResponse> => {
  const password = await generatePassword();
  const res = await postSignup({nickname, password});
  const accountId = res.data.accountId;
  return login(accountId, password);
};
