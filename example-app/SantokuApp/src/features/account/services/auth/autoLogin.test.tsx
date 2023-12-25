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
import * as loadActiveAccountId from 'features/secure-storage/services/loadActiveAccountId';
import * as loadPassword from 'features/secure-storage/services/loadPassword';

import {autoLogin} from './autoLogin';
import {BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION} from '../../../backend/utils/customInstance';

jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
  status: 200,
  data: {
    csrfTokenHeaderName: 'X-CSRF-TOKEN',
    csrfTokenValue: 'dummy',
  },
});

describe('autoLogin', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {headers: new AxiosHeaders()},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(loadActiveAccountId, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(loadPassword, 'loadPassword');

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await autoLogin();
    expect(res).toEqual({
      status: 'COMPLETE',
    });
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spyRefreshCsrfToken).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    expect(__mocks.crashlytics.setUserId).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const res = await autoLogin();
    expect(res).toBeUndefined();
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const res = await autoLogin();
    expect(res).toBeUndefined();
  });
});
