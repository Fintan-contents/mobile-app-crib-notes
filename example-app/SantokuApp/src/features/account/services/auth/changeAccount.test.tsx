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

import {AxiosHeaders} from 'axios';
import * as accountApi from 'features/backend/apis/account/account';
import {AccountLoginResponseStatus} from 'features/backend/apis/model';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import * as loadPassword from 'features/secure-storage/services/loadPassword';

import {changeAccount} from './changeAccount';
import {PasswordNotFoundError} from '../../errors/PasswordNotFoundError';

describe('changeAccount', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {headers: new AxiosHeaders()},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();

  test('セキュアストレージからパスワードを取得してログインAPIを呼び出しているかの検証', async () => {
    const spySecureStorageAdapter = jest.spyOn(loadPassword, 'loadPassword').mockResolvedValue('password123');
    const res = await changeAccount('123456789');
    expect(res).toEqual({
      status: 'COMPLETE',
    });
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spyRefreshCsrfToken).toHaveBeenCalled();
    expect(spySecureStorageAdapter).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからパスワードを取得できなかった場合の検証', async () => {
    jest.spyOn(loadPassword, 'loadPassword').mockResolvedValue(null);
    const changeAccountPromise = changeAccount('123456789');
    await expect(changeAccountPromise).rejects.toThrow(PasswordNotFoundError);
  });
});
