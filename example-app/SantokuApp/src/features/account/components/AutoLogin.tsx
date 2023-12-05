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
import React, {useEffect} from 'react';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {useAuthCommands} from '../services/auth/useAuthCommands';

export const AutoLogin: React.FC<React.PropsWithChildren> = ({children}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const {autoLogin} = useAuthCommands();
  useEffect(() => {
    autoLogin().catch(e => {
      if (!isUnauthorizedError(e)) {
        const {title, message} = resolveErrorMessage(e);
        handleErrorWithAlert(e, title, message);
      }
    });
  }, [autoLogin]);
  // オートログイン時にエラーが発生した場合は、isLoggedInには何も値が設定されない
  // isLoggedInに値が設定されたタイミングでオートログインの処理完了とみなす
  if (isLoggedIn == null) {
    return null;
  }
  return <>{children}</>;
};
