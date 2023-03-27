import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';
import {RestyleTheme} from '../theme/restyleTheme';

export type GoBackIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const GoBackIllustration = ({color = 'white', size = 'p20', ...rest}: GoBackIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'white'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 20 20" {...rest}>
      <Path d="M7 14L8.41 12.59L3.83 8H20V6H3.83L8.42 1.41L7 0L0 7L7 14Z" fill={fillColor} />
    </StyledSvgIconBase>
  );
};
