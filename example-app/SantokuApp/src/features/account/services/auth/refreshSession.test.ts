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

import {
  BACKEND_AXIOS_INSTANCE,
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
} from 'features/backend/utils/customInstance';

import {refreshSession} from './refreshSession';

describe('refreshSession', () => {
  test('ログインが行われ、再取得したCsrfTokenがデフォルトヘッダとして設定されること', async () => {
    const spyPostRequest = jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'post').mockResolvedValue({
      status: 200,
      data: {
        status: 'COMPLETE',
      },
    });
    const spyGetRequest = jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
      status: 200,
      data: {
        csrfTokenHeaderName: 'X-CSRF-TOKEN',
        csrfTokenValue: 'dummy',
      },
    });
    await refreshSession();
    expect(spyPostRequest).toHaveBeenCalledWith('/login', {accountId: '1234567890', password: '1234567890'});
    expect(spyGetRequest).toHaveBeenCalledWith('/system/csrf-token');
    expect(BACKEND_AXIOS_INSTANCE.defaults.headers.common['X-CSRF-TOKEN']).toEqual('dummy');
    expect(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.defaults.headers.common['X-CSRF-TOKEN']).toEqual('dummy');
  });
});
