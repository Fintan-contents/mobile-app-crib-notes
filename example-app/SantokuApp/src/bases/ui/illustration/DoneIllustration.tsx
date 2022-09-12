import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';
import {RestyleTheme} from '../theme/restyleTheme';

export type DoneIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const DoneIllustration = ({color = 'black2', size = 'p24', ...rest}: DoneIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'black2'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        d="M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 6.99998L19.6 5.59998L9.00002 16.2Z"
        fill={fillColor}
      />
    </StyledSvgIconBase>
  );
};
