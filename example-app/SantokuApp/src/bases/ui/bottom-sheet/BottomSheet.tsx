import React from 'react';
import RNEBottomSheet, {BottomSheetProps} from 'react-native-elements/dist/bottomSheet/BottomSheet';

export const BottomSheet: React.FC<BottomSheetProps> = ({children, ...props}) => {
  return <RNEBottomSheet {...props}>{children}</RNEBottomSheet>;
};
