import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';
import {RestyleTheme} from '../theme/restyleTheme';

export type ThumbUpIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const ThumbUpIllustration = ({color = 'black', size = 'p48', ...rest}: ThumbUpIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'black'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 48 48" fill="none" {...rest}>
      <Path
        d="M2 42H10V18H2V42ZM46 20C46 17.8 44.2 16 42 16H29.38L31.28 6.86L31.34 6.22C31.34 5.4 31 4.64 30.46 4.1L28.34 2L15.18 15.18C14.44 15.9 14 16.9 14 18V38C14 40.2 15.8 42 18 42H36C37.66 42 39.08 41 39.68 39.56L45.72 25.46C45.9 25 46 24.52 46 24V20Z"
        fill={fillColor}
      />
    </StyledSvgIconBase>
  );
};
