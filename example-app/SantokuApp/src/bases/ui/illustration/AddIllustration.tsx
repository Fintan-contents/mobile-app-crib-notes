import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';
import {RestyleTheme} from '../theme/restyleTheme';

export type AddIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const AddIllustration = ({color = 'white', size = 'p24', ...rest}: AddIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'white'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <G clip-path="url(#clip0_5404_1261)">
        <Path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={fillColor} />
      </G>
      <Defs>
        <ClipPath id="clip0_5404_1261">
          <Rect width="24" height="24" fill={fillColor} />
        </ClipPath>
      </Defs>
    </StyledSvgIconBase>
  );
};
