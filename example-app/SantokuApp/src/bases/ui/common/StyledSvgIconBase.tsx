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

import {createRestyleComponent, createVariant, spacing, SpacingProps, VariantProps} from '@shopify/restyle';
import {Svg, SvgProps} from 'react-native-svg';

import {RestyleTheme} from '../theme/restyleTheme';

const themeKey = 'sizeVariants';
const property = 'size';
const variants = createVariant<RestyleTheme, typeof themeKey, typeof property>({property, themeKey});
export type StyledSvgIconBaseProps = SpacingProps<RestyleTheme> &
  VariantProps<RestyleTheme, typeof themeKey, typeof property> &
  Omit<SvgProps, 'color' | 'width' | 'height'>;
export const StyledSvgIconBase = createRestyleComponent<StyledSvgIconBaseProps, RestyleTheme>([variants, spacing], Svg);
