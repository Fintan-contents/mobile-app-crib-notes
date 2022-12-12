import {useCallback} from 'react';
import {runOnJS} from 'react-native-reanimated';

export const useWorkletCallback = <A>(callback?: (arg: A) => unknown) =>
  useCallback(
    (arg: A) => {
      'worklet';
      if (callback) {
        runOnJS(callback)(arg);
      }
    },
    [callback],
  );
