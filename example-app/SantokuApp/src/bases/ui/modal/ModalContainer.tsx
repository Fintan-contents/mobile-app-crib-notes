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

import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Reanimated, {WithTimingConfig} from 'react-native-reanimated';

import {useModalContainer} from './useModalContainer';

export const DEFAULT_SLIDE_IN_DURATION = 300;
export const DEFAULT_SLIDE_OUT_DURATION = 300;

// React Native ReanimatedのLayout Animationsを使用すると↓の不具合が発生するため、'exiting'・'entering'の指定ができないようにしています。
// https://github.com/software-mansion/react-native-reanimated/issues/2906
export type ModalContainerProps = Omit<Reanimated.AnimateProps<ViewProps>, 'exiting' | 'entering'> & {
  isVisible: boolean;
  afterSlideIn?: (finished?: boolean) => unknown;
  afterSlideOut?: (finished?: boolean) => unknown;
  slideInDuration?: number;
  slideOutDuration?: number;
  slideInConfig?: WithTimingConfig;
  slideOutConfig?: WithTimingConfig;
};

export const ModalContainer: React.FC<React.PropsWithChildren<ModalContainerProps>> = ({
  isVisible,
  style,
  afterSlideIn,
  afterSlideOut,
  slideInDuration = DEFAULT_SLIDE_IN_DURATION,
  slideOutDuration = DEFAULT_SLIDE_OUT_DURATION,
  slideInConfig,
  slideOutConfig,
  children,
  ...animatedViewProps
}) => {
  const {isModalVisible, transform, updateContentHeight} = useModalContainer({
    isVisible,
    afterSlideIn,
    afterSlideOut,
    slideInDuration,
    slideOutDuration,
    slideInConfig,
    slideOutConfig,
  });
  return !isModalVisible ? null : (
    <View style={[styles.container]} pointerEvents="box-none">
      <Reanimated.View style={[style, transform]} onLayout={updateContentHeight} {...animatedViewProps}>
        {children}
      </Reanimated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
