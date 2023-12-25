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

import {createBox, createText} from '@shopify/restyle';
import {
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

export const Box = createBox<RestyleTheme>();
export const Text = createText<RestyleTheme>();
export const StyledTouchableOpacity = createBox<RestyleTheme, TouchableOpacityProps>(TouchableOpacity);
export const StyledSafeAreaView = createBox<RestyleTheme, ViewProps>(SafeAreaView);
export const StyledScrollView = createBox<RestyleTheme, ScrollViewProps>(ScrollView);
