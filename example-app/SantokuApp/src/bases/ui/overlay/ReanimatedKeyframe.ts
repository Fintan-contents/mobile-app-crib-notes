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

import {ReduceMotion} from 'react-native-reanimated';

// WORKAROUND: React Native ReanimatedのKeyframeを引数として受ける際に利用できる適切な型がなかったので、独自に定義して利用しています。

export interface ReanimatedKeyframe {
  duration(durationMs: number): this;
  delay(delayMs: number): this;
  reduceMotion(reduceMotionV: ReduceMotion): this;
  withCallback(callback: (finished: boolean) => void): this;
}
