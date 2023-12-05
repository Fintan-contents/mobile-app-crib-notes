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

import {handleErrorWithAlert} from 'bases/core/errors/handleErrorWithAlert';
import {resolveErrorMessage} from 'bases/message/resolveErrorMessage';
import React, {useEffect, useRef} from 'react';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {useAccountData} from '../services/account/useAccountData';

export const AccountDataLoader: React.FC<React.PropsWithChildren> = ({children}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const isAutoLoggedIn = useRef(isLoggedIn).current;
  const {isInitialLoading, isLoadingError, errorUpdateCount, error} = useAccountData({
    enabled: isLoggedIn,
    meta: {disableGlobalErrorHandler: true},
  });

  useEffect(() => {
    // オートログイン済で初回のデータ取得時にエラーが発生した場合は
    if (isAutoLoggedIn && isLoadingError) {
      if (errorUpdateCount === 1) {
        const {title, message} = resolveErrorMessage(error);
        handleErrorWithAlert(error, title, message);
      }
    }
  }, [error, errorUpdateCount, isAutoLoggedIn, isLoadingError]);

  /**
   * 未ログインの場合はアカウント情報を取得ないので、isLoadingが常にtrueになってしまう。
   * そのため、isInitialLoading(isFetching && isLoading)で判定する。
   * @see https://tanstack.com/query/v4/docs/react/reference/useQuery
   */
  if (isAutoLoggedIn && (isInitialLoading || isLoadingError)) {
    return null;
  }
  return <>{children}</>;
};
