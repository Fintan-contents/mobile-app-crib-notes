import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useMemo} from 'react';
import {AppState, AppStateStatus, Platform} from 'react-native';
import {focusManager, onlineManager, QueryClient, QueryClientProvider} from 'react-query';

import {defaultMutationCache, defaultQueryCache} from '../services/defaultCache';
import {defaultOptions} from '../services/defaultOptions';

const onAppStateChange = (newAppState: AppStateStatus) => {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(newAppState === 'active');
  }
};

export const ReactQueryProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const queryClient: QueryClient = useMemo(() => {
    return new QueryClient({
      queryCache: defaultQueryCache(queryClient),
      mutationCache: defaultMutationCache(queryClient),
      defaultOptions,
    });
  }, []);

  useEffect(() => {
    // アプリがバックグラウンドからアクティブに変化した際にrefetchできるようにする
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, []);

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
