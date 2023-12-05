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

import NetInfo from '@react-native-community/netinfo';
import {focusManager, onlineManager, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect, useMemo} from 'react';
import {AppState, AppStateStatus, Platform} from 'react-native';

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
      // no more errors on the console for tests
      // https://tanstack.com/query/v4/docs/react/guides/testing#turn-off-network-error-logging
      logger:
        process.env.NODE_ENV === 'test'
          ? {
              log: () => {},
              warn: () => {},
              error: () => {},
            }
          : undefined,
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
