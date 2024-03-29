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

export type QuestionAnswerIllustrationProps = StyledSvgIconBaseProps & ColorProps<RestyleTheme>;

export const QuestionAnswerIllustration = ({
  color = 'white',
  size = 'p24',
  ...rest
}: QuestionAnswerIllustrationProps) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const fillColor = theme.colors[responsiveColor ?? 'white'];
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        d="M15 5V12H5.17L4.58 12.59L4 13.17V5H15ZM16 3H3C2.45 3 2 3.45 2 4V18L6 14H16C16.55 14 17 13.55 17 13V4C17 3.45 16.55 3 16 3ZM21 7H19V16H6V18C6 18.55 6.45 19 7 19H18L22 23V8C22 7.45 21.55 7 21 7Z"
        fill={fillColor}
      />
    </StyledSvgIconBase>
  );
};
