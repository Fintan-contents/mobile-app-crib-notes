import React from 'react';
import {Path, Circle} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';

export type PersonIllustrationProps = StyledSvgIconBaseProps;

export const PersonIllustration = ({size = 'p40', ...rest}: PersonIllustrationProps) => {
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 40 40" fill="none" {...rest}>
      <Circle cx="20" cy="20" r="20" fill="#E6E6E6" />
      <Path
        d="M20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20ZM20 22C17.33 22 12 23.34 12 26V28H28V26C28 23.34 22.67 22 20 22Z"
        fill="#B8B8B8"
      />
    </StyledSvgIconBase>
  );
};
