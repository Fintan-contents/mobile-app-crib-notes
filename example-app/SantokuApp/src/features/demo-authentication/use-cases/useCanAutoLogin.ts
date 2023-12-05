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

import {canAutoLogin as accountCanAutoLogin} from 'features/account/services/auth/canAutoLogin';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';

export const useCanAutoLogin = () => {
  const canAutoLogin = useCallback(async () => {
    try {
      const res = await accountCanAutoLogin();
      alert(res ? '自動ログイン可能です' : '自動ログインできません');
    } catch (e) {
      handleError(e);
    }
  }, []);
  return {canAutoLogin};
};
