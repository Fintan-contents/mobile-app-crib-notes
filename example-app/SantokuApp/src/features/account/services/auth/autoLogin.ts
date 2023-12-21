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
