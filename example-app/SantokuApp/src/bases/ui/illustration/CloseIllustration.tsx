/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';
import {RestyleTheme} from '../theme/restyleTheme';

export type CloseIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const CloseIllustration = ({color = 'black', size = 'p24', ...rest}: CloseIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'black'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill={fillColor}
      />
    </StyledSvgIconBase>
  );
};
