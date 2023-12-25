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

declare namespace jest {
  import Reanimated from 'react-native-reanimated';
  import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

  interface Matchers<R> {
    toHaveAnimatedStyle(
      style:
        | Reanimated.AnimateStyle<ViewStyle | ImageStyle | TextStyle>[]
        | Reanimated.AnimateStyle<ViewStyle | ImageStyle | TextStyle>,
    ): R;
  }
}

declare module 'react-native-reanimated/lib/module/reanimated2/jestUtils' {
  import {ReactTestInstance} from 'react-test-renderer';
  import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
  export const withReanimatedTimer: (test: () => unknown) => void;
  export const advanceAnimationByTime: (time: number) => void;
  export const advanceAnimationByFrame: (count: number) => void;
  export const getAnimatedStyle: <T = ViewStyle | ImageStyle | TextStyle>(instance: ReactTestInstance) => T;
}
