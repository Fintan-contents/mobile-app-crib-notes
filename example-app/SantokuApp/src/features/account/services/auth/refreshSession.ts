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

import axios, {AxiosResponse} from 'axios';
import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {handleError} from 'bases/core/errors/handleError';
import {
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
  setAxiosResponseInterceptor,
} from 'features/backend/utils/customInstance';
import {refreshCsrfToken} from 'features/backend/utils/refreshCsrfToken';
import {loadActiveAccountId} from 'features/secure-storage/services/loadActiveAccountId';
import {loadPassword} from 'features/secure-storage/services/loadPassword';

// 共通リトライ処理に必要なAPI呼び出しだけは、自動生成コードに依存しない形で用意する
const autoLogin = async () => {
  const accountId = await loadActiveAccountId();
  if (!accountId) {
    throw new ApplicationError('There is no auto-login enabled account.');
  }
  const password = await loadPassword(accountId);
  if (!password) {
    throw new ApplicationError('The password for the account ID does not exist.');
  }
  await BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.post('/login', {accountId, password});
};

const refreshSession = async () => {
  await autoLogin();
  await refreshCsrfToken();
};

const setRefreshSessionInterceptor = () => {
  const onFulfilled = (response: AxiosResponse) => {
    return response;
  };
  const onRejected = async (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        try {
          await refreshSession();
          if (error.config) {
            return await BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.request(error.config);
          } else {
            // レスポンスとしてステータスコードが返却されているのに、リクエストのConfigが存在しない場合は基本的に想定していない
            handleError(new RuntimeError('Axios request config is not found.', 'RefreshSessionError'));
          }
        } catch (e) {
          handleError(new RuntimeError(e, 'RefreshSessionError'));
          throw error;
        }
      }
    }
    throw error;
  };
  setAxiosResponseInterceptor(onFulfilled, onRejected);
};

export {refreshSession, setRefreshSessionInterceptor};
