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
