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

import * as Crypto from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {savePassword} from './savePassword';

describe('savePassword', () => {
  test('アカウントIDをハッシュ化してSecureStore.setItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'setItemAsync');
    const spyCrypto = jest.spyOn(Crypto, 'sha256').mockReturnValue(Promise.resolve('abcdef'));
    await savePassword('1234567890', 'password');

    expect(spySecureStore).toHaveBeenCalledWith('abcdef_password', 'password', {
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
    });
    expect(spyCrypto).toHaveBeenCalledWith('1234567890');
  });
});
