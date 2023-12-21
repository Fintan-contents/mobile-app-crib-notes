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
 * アクティブなアカウントIDとそれに該当するパスワードがセキュアストアに存在するかをチェックします。
 * @returns 自動ログイン可能な場合はtrue、そうでない場合はfalse
 */
import {loadActiveAccountId} from 'features/secure-storage/services/loadActiveAccountId';
import {loadPassword} from 'features/secure-storage/services/loadPassword';

export const canAutoLogin = async (): Promise<boolean> => {
  try {
    const accountId = await loadActiveAccountId();
    if (!accountId) {
      return false;
    }
    const password = await loadPassword(accountId);
    return !!password;
  } catch {
    return false;
  }
};
