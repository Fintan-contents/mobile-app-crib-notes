import {useCallback, useState} from 'react';
import {AppState, AppStateEvent, AppStateStatus, Platform} from 'react-native';

import {useIsMounted} from '../../../framework/utilities/useIsMounted';

export type StateChangedEventRecord = {
  event: AppStateEvent;
  state: AppStateStatus;
  timestamp: Date;
};

export const useAppStateHistory = () => {
  const [appStateHistory, setAppStateHistory] = useState<StateChangedEventRecord[]>([]);
  const isMounted = useIsMounted();

  const saveEvent = useCallback(
    (event: AppStateEvent, next: AppStateStatus) => {
      if (isMounted()) {
        setAppStateHistory((history) => {
          return [...history, {event, timestamp: new Date(), state: next}];
        });
      }
    },
    [isMounted],
  );

  const registerEventListener = useCallback(
    (event: AppStateEvent) => {
      if (Platform.OS !== 'android' && (event === 'focus' || event === 'blur')) {
        return;
      }

      const listener = (next: AppStateStatus) => saveEvent(event, next);
      AppState.addEventListener(event, listener);
      // 0.65からは、addEventListenerからの返り値をそのままreturnすれば良くなっている。（以下のコードの実装時は0.63.4を利用）
      // https://reactnative.dev/docs/0.65/appstate
      // https://reactnative.dev/docs/0.64/appstate
      return () => AppState.removeEventListener(event, listener);
    },
    [saveEvent],
  );

  const registerEventListeners = useCallback(() => {
    const states: AppStateEvent[] = ['focus', 'blur', 'change', 'memoryWarning'];
    const unregisterEventListeners = states.map((event) => registerEventListener(event));
    return () => {
      unregisterEventListeners.forEach((unregister) => unregister?.());
    };
  }, [registerEventListener]);

  const historyKeyExtractor = useCallback((_: unknown, index: number) => index.toString(), []);

  return {
    appStateHistory,
    registerEventListeners,
    historyKeyExtractor,
  };
};
