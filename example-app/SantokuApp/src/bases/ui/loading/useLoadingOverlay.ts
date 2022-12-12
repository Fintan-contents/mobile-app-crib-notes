import {useEffect} from 'react';

import {LoadingOverlay} from './LoadingOverlay';

export const useLoadingOverlay = (visible: boolean) => {
  useEffect(() => {
    LoadingOverlay.visible(visible);
    return () => LoadingOverlay.visible(false);
  }, [visible]);
};
