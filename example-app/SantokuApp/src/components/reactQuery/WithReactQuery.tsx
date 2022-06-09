import NetInfo from '@react-native-community/netinfo';
import React, {useCallback, useEffect, useMemo} from 'react';
import {AppState, AppStateStatus, Platform} from 'react-native';
import {focusManager, onlineManager, QueryClient, QueryClientProvider} from 'react-query';

import {useDefaultQueryCache, useDefaultMutationCache} from './useDefaultCache';
import {useDefaultOptions} from './useDefaultOptions';

const WithReactQuery: React.FC = ({children}) => {
  const queryCache = useDefaultQueryCache();
  const mutationCache = useDefaultMutationCache();
  const defaultOptions = useDefaultOptions();

  const queryClient = useMemo(() => {
    return new QueryClient({
      queryCache,
      mutationCache,
      defaultOptions,
    });
  }, [queryCache, mutationCache, defaultOptions]);

  const onAppStateChange = useCallback((newAppState: AppStateStatus) => {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(newAppState === 'active');
    }
  }, []);

  useEffect(() => {
    // アプリがバックグラウンドからアクティブに変化した際にrefetchできるようにする
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, [onAppStateChange]);

  useEffect(() => {
    // オフライン状態からオンライン状態に変化した際にrefetchできるようにする
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(state.isConnected ?? false);
      });
    });
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export {WithReactQuery};
