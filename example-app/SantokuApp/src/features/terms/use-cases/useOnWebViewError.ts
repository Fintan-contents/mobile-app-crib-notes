import {useCallback} from 'react';

import {useIsWebViewError} from '../client-states/useIsWebViewError';

export const useOnWebViewError = () => {
  const [, setIsWebViewError] = useIsWebViewError();
  const onWebViewError = useCallback(() => {
    setIsWebViewError(true);
  }, [setIsWebViewError]);
  return {onWebViewError};
};
