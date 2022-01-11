import {createUseContextAndProvider} from 'framework/utilities';
import {AppNavigatorOptions} from 'navigation/types';
import React, {useEffect, useMemo, useState} from 'react';

import {initialize, hideSplashScreen} from './initialize';

type InitializeContextValue = {
  initialized: boolean;
  navigatorOptions: AppNavigatorOptions;
};

const [useInitializeContext, InitializeContextProvider] = createUseContextAndProvider<InitializeContextValue>();

const WithInitializeContext: React.FC = ({children}) => {
  const [error, setError] = useState<unknown>();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [navigatorOptions, setNavigatorOptions] = useState<AppNavigatorOptions>({});
  const contextValue = useMemo(() => {
    return {
      initialized,
      navigatorOptions,
    };
  }, [initialized, navigatorOptions]);

  useEffect(() => {
    initialize()
      .then((navigatorOptions: AppNavigatorOptions) => {
        setNavigatorOptions(navigatorOptions);
        setInitialized(true);
        hideSplashScreen().catch(() => {});
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  useEffect(() => {
    if (error) {
      // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
      throw error;
    }
  }, [error]);

  if (initialized) {
    return <InitializeContextProvider value={contextValue}>{children}</InitializeContextProvider>;
  } else {
    return null;
  }
};

export {useInitializeContext, WithInitializeContext};
