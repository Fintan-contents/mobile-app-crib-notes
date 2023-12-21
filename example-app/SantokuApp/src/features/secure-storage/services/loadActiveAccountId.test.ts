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

import {loadActiveAccountId} from './loadActiveAccountId';

describe('loadActiveAccountId', () => {
  test('SecureStore.getItemAsyncに正しく引数を渡しているかと戻り値の確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'getItemAsync').mockResolvedValue('1234567890');
    const result = await loadActiveAccountId();

    expect(spySecureStore).toHaveBeenCalledWith('activeAccountId');
    expect(result).toEqual('1234567890');
  });
});
