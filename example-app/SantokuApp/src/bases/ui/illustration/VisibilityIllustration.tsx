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

export type VisibilityIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const VisibilityIllustration = ({color = 'grey1', size = 'p24', ...rest}: VisibilityIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'grey1'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7ZM12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14Z"
        fill={fillColor}
      />
    </StyledSvgIconBase>
  );
};
