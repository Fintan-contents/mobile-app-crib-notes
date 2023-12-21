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

import {BoxProps, ColorProps, createBox, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

export const RestyleActivityIndicator = createBox<RestyleTheme, ActivityIndicatorProps>(ActivityIndicator);
export type StyledActivityIndicatorProps = BoxProps<RestyleTheme> &
  ColorProps<RestyleTheme> &
  Omit<ActivityIndicatorProps, 'color'>;
export const StyledActivityIndicator: React.FC<StyledActivityIndicatorProps> = ({
  color = 'activityIndicator',
  ...rest
}) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const indicatorColor = responsiveColor ? theme.colors[responsiveColor] : undefined;
  return <RestyleActivityIndicator color={indicatorColor} {...rest} />;
};
