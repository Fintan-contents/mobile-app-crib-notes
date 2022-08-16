import {useCallback} from 'react';

import {useButtonDisable} from '../client-states/useButtonDisable';
import {useIsExited} from '../client-states/useIsExited';

export const useComposedExitingCallback = (exitingCallback?: (finished: boolean) => unknown) => {
  const [, setButtonDisable] = useButtonDisable();
  const [, setIsExited] = useIsExited();
  const composedExitingCallback = useCallback(
    (finished: boolean) => {
      try {
        exitingCallback?.(finished);
      } finally {
        setButtonDisable(true);
        setIsExited(true);
      }
    },
    [exitingCallback, setButtonDisable, setIsExited],
  );
  return {composedExitingCallback};
};
