import {createUseContextAndProvider} from 'framework/utilities';
import React, {useMemo, useState} from 'react';

import {LoadingOverlay} from './LoadingOverlay';

type LoadingOverlayContextType = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const [useLoadingOverlay, LoadingOverlayContextProvider] = createUseContextAndProvider<LoadingOverlayContextType>();

const WithLoadingOverlay: React.FC = ({children}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const loadingOverlayContext = useMemo<LoadingOverlayContextType>(() => ({setVisible}), []);
  return (
    <LoadingOverlayContextProvider value={loadingOverlayContext}>
      <LoadingOverlay visible={visible}>{children}</LoadingOverlay>
    </LoadingOverlayContextProvider>
  );
};

export {WithLoadingOverlay, useLoadingOverlay};
