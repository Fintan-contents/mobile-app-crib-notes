import {sendErrorLog} from 'bases/logging/sendErrorLog';
import {resolveErrorMessage} from 'bases/message/resolveErrorMessage';
import React, {useEffect, useRef} from 'react';
import {Alert} from 'react-native';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {useAccountData} from '../services/account/useAccountData';

export const AccountDataLoader: React.FC = ({children}) => {
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
        sendErrorLog(error);
        Alert.alert(title, message);
      }
    }
  }, [error, errorUpdateCount, isAutoLoggedIn, isLoadingError]);

  if (isAutoLoggedIn && (isLoading || isLoadingError)) {
    return null;
  }
  return <>{children}</>;
};
