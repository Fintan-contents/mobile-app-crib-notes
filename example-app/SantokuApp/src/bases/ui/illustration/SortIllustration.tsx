import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';
import {RestyleTheme} from '../theme/restyleTheme';

export type SortIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const SortIllustration = ({color = 'black', size = 'p24', ...rest}: SortIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'black'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z" fill={fillColor} />
    </StyledSvgIconBase>
  );
};
