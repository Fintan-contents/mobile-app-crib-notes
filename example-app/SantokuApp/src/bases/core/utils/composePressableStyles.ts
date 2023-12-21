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

import {PressableProps, PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle} from 'react-native';

export const composePressableStyles = (style: PressableProps['style'] | PressableProps['style'][]) => {
  if (typeof style === 'function') {
    return style;
  }
  if (Array.isArray(style)) {
    if (style.some(s => typeof s === 'function')) {
      return (state: PressableStateCallbackType) => {
        return StyleSheet.flatten(
          style.map(sty => {
            return typeof sty === 'function' ? sty(state) : sty;
          }),
        );
      };
    } else {
      // 関数が含まれていないことは確認しているので、型アサートしても問題ない
      return StyleSheet.flatten(style as StyleProp<ViewStyle>);
    }
  }
  return style;
};
