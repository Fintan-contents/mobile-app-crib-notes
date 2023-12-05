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

import * as SecureStore from 'expo-secure-store';

import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * セキュアストレージからアクティブなアカウントのIDを取得します。
 * @returns セキュアストレージに存在する場合はアクティブなアカウントIDの文字列、存在しない場合はnull
 */
export function loadActiveAccountId(): Promise<string | null> {
  return SecureStore.getItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}
