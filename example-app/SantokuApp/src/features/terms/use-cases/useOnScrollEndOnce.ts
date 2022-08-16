import {useCallback} from 'react';

import {useButtonDisable} from '../client-states/useButtonDisable';

export const useOnScrollEndOnce = () => {
  const [, setButtonDisable] = useButtonDisable();
  const onScrollEndOnce = useCallback(() => setButtonDisable(false), [setButtonDisable]);
  return {onScrollEndOnce};
};
