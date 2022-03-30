import React from 'react';
import {ActivityIndicator} from 'react-native';

import {FullWindowOverlay} from '../FullWindowOverlay';
import {Overlay, OverlayProps} from './Overlay';

const LoadingOverlay: React.FC<OverlayProps> = ({children, ...props}) => {
  return (
    <>
      {children}
      <FullWindowOverlay>
        <Overlay {...props}>
          <ActivityIndicator size="large" color="#0000ff" />
        </Overlay>
      </FullWindowOverlay>
    </>
  );
};

export {LoadingOverlay};
