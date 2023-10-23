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
