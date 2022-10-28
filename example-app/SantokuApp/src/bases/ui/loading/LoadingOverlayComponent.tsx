import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Overlay, OverlayProps} from './Overlay';

const LoadingOverlayComponent: React.FC<OverlayProps> = ({...props}) => {
  return (
    <Overlay {...props}>
      <ActivityIndicator size="large" color="#0000ff" />
    </Overlay>
  );
};

export {LoadingOverlayComponent};
