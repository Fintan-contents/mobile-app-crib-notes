import {handleErrorWithAlert} from 'bases/core/errors/handleErrorWithAlert';
import {resolveErrorMessage} from 'bases/message/resolveErrorMessage';
import React, {useEffect, useRef} from 'react';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {useAccountData} from '../services/account/useAccountData';

export const AccountDataLoader: React.FC<React.PropsWithChildren> = ({children}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const isAutoLoggedIn = useRef(isLoggedIn).current;
  const {isLoading, isLoadingError, errorUpdateCount, error} = useAccountData({
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

  if (isAutoLoggedIn && (isLoading || isLoadingError)) {
    return null;
  }
  return <>{children}</>;
};
