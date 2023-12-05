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

import React, {useMemo} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {Rect, useSafeAreaFrame} from 'react-native-safe-area-context';

export type SpacerProps = {
  widthRatio?: number;
  heightRatio?: number;
} & ViewProps;

export const Spacer: React.FC<SpacerProps> = React.memo(({widthRatio = 0, heightRatio = 0, style, ...viewProps}) => {
  const rect = useSafeAreaFrame();
  const spacing = useMemo(() => spacingFactory(rect, widthRatio, heightRatio), [rect, heightRatio, widthRatio]);
  const composedStyle = StyleSheet.compose(spacing, style);

  return <View testID="Spacer" style={composedStyle} {...viewProps} />;
});

const spacingFactory = (rect: Rect, widthRatio: number, heightRatio: number): StyleProp<ViewStyle> => ({
  width: rect.width * widthRatio,
  height: rect.height * heightRatio,
});
