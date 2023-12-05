/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
