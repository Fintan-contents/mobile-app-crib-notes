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

import {useIsMounted} from 'bases/core/utils/useIsMounted';
import React, {useCallback, useEffect, useState} from 'react';
import {AppState, AppStateEvent, AppStateStatus, Platform} from 'react-native';

import {AppStateTemplate} from '../components/AppStateTemplate';
import {StateChangedEventRecord} from '../types/StateChangedEventRecord';

export const keyExtractor = (_: unknown, index: number) => index.toString();

export const AppStatePage: React.FC = () => {
  const isMounted = useIsMounted();
  const [appStateHistory, setAppStateHistory] = useState<StateChangedEventRecord[]>([]);
  const saveEvent = useCallback(
    (event: AppStateEvent, next: AppStateStatus) => {
      if (isMounted()) {
        setAppStateHistory(history => {
          return [...(history ?? []), {event, timestamp: new Date(), state: next}];
        });
      }
    },
    [isMounted, setAppStateHistory],
  );

  const registerEventListener = useCallback(
    (event: AppStateEvent) => {
      if (Platform.OS !== 'android' && (event === 'focus' || event === 'blur')) {
        return;
      }

      const listener = (next: AppStateStatus) => saveEvent(event, next);
      const subscription = AppState.addEventListener(event, listener);
      return () => subscription.remove();
    },
    [saveEvent],
  );

  const registerEventListeners = useCallback(() => {
    const states: AppStateEvent[] = ['focus', 'blur', 'change', 'memoryWarning'];
    const unregisterEventListeners = states.map(event => registerEventListener(event));
    return () => {
      unregisterEventListeners.forEach(unregister => unregister?.());
    };
  }, [registerEventListener]);

  useEffect(() => registerEventListeners(), [registerEventListeners]);

  return <AppStateTemplate testID="AppStateScreen" history={appStateHistory} keyExtractor={keyExtractor} />;
};
