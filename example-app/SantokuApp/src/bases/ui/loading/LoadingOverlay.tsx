import React, {useMemo, useState} from 'react';

import {FullWindowOverlay} from '../overlay/FullWindowOverlay';
import {LoadingOverlayComponent} from './LoadingOverlayComponent';

type LoadingOverlayType = {
  visible: (visible: boolean) => void;
  Component: typeof Component;
};

const Component: React.VFC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  LoadingOverlay = useMemo<LoadingOverlayType>(
    () => ({...LoadingOverlay, visible: (visible: boolean) => setVisible(visible)}),
    [],
  );
  return (
    <>
      <FullWindowOverlay>
        <LoadingOverlayComponent visible={visible} />
      </FullWindowOverlay>
    </>
  );
};

let LoadingOverlay: LoadingOverlayType = {
  visible: () => {
    throw new Error('LoadingOverlay.Component is required.');
  },
  Component,
};

export {LoadingOverlay};
