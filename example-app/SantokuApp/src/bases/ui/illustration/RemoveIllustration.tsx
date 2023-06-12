import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';
import {RestyleTheme} from '../theme/restyleTheme';

export type RemoveIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const RemoveIllustration = ({color = 'white', size = 'p24', ...rest}: RemoveIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'white'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path d="M5 13v-2h14v2Z" fill={fillColor} />
    </StyledSvgIconBase>
  );
};
