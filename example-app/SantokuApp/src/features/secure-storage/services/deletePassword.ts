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

import {sha256} from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * セキュアストレージから指定されたアカウントIDに該当するパスワードを削除します。
 * @param accountId アカウントID
 * @returns セキュアストレージに存在する場合はパスワードの文字列、存在しない場合はnull
 */
export async function deletePassword(accountId: string): Promise<void> {
  // ログインに利用するような項目は平文で保存しないでハッシュ化します。
  const hash = await sha256(accountId);
  return SecureStore.deleteItemAsync(`${hash}_${STORED_ITEM_KEYS.PASSWORD}`);
}
