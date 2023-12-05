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
 * ログインします。
 * @param accountId アカウントID
 * @param password パスワード
 * @returns アカウントの切り替え結果
 */
import crashlytics from '@react-native-firebase/crashlytics';
import axios from 'axios';
import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {postLogin} from 'features/backend/apis/account/account';
import {AccountLoginResponse} from 'features/backend/apis/model';
import {refreshCsrfToken} from 'features/backend/utils/refreshCsrfToken';
import {saveActiveAccountId} from 'features/secure-storage/services/saveActiveAccountId';
import {savePassword} from 'features/secure-storage/services/savePassword';

import {UnauthorizedError} from '../../errors/UnauthorizedError';

export const login = async (accountId: string, password: string): Promise<AccountLoginResponse> => {
  try {
    const response = await postLogin({accountId, password});
    await refreshCsrfToken();
    await saveActiveAccountId(accountId);
    await crashlytics().setUserId(accountId);
    await savePassword(accountId, password);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 401) {
        throw new UnauthorizedError(e, 'LoginError');
      }
    }
    throw new RuntimeError(e, 'LoginError');
  }
};
