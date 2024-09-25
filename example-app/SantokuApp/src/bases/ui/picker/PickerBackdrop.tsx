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

import {composePressableStyles} from 'bases/core/utils/composePressableStyles';
import React, {useMemo} from 'react';
import {Modal as RNModal, ModalProps, Pressable, PressableProps, StyleSheet, ViewProps} from 'react-native';
import {AnimatedProps, WithTimingConfig} from 'react-native-reanimated';

import {usePickerBackdrop} from './usePickerBackdrop';

export const DEFAULT_BACKGROUND_COLOR = 'black';
export const DEFAULT_OPACITY = 0.4;
export const DEFAULT_FADE_IN_DURATION = 300;
export const DEFAULT_FADE_OUT_DURATION = 150;

// React Native ReanimatedのLayout Animationsを使用すると↓の不具合が発生するため、指定できないようにしています。
// https://github.com/software-mansion/react-native-reanimated/issues/2906
export type PickerBackdropProps = Omit<AnimatedProps<ViewProps>, 'exiting' | 'entering'> & {
  isVisible: boolean;
  onPress?: () => unknown;
  afterFadeIn?: (finished?: boolean) => unknown;
  afterFadeOut?: (finished?: boolean) => unknown;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  opacity?: number;
  pressableProps?: PressableProps;
  modalProps?: ModalProps;
  fadeInConfig?: WithTimingConfig;
  fadeOutConfig?: WithTimingConfig;
};

export const PickerBackdrop: React.FC<React.PropsWithChildren<PickerBackdropProps>> = ({
  isVisible,
  opacity = DEFAULT_OPACITY,
  onPress,
  afterFadeIn,
  afterFadeOut,
  fadeInDuration = DEFAULT_FADE_IN_DURATION,
  fadeOutDuration = DEFAULT_FADE_OUT_DURATION,
  pressableProps: {style: pressableStyle, ...pressableProps} = {},
  modalProps: {style: modalStyle, ...modalProps} = {},
  fadeInConfig,
  fadeOutConfig,
  children,
}) => {
  const {isModalVisible} = usePickerBackdrop({
    isVisible,
    opacity,
    afterFadeIn,
    afterFadeOut,
    fadeInDuration,
    fadeOutDuration,
    fadeInConfig,
    fadeOutConfig,
  });

  const composedPressableStyles = useMemo(
    () => composePressableStyles([styles.pressable, pressableStyle]),
    [pressableStyle],
  );

  return !isModalVisible ? null : (
    <RNModal
      visible
      statusBarTranslucent
      animationType="fade"
      transparent
      // 戻るボタンが押されたとき（onRequestClose）は、背景がタップされたときと同じ振る舞いになるようにしておく。
      onRequestClose={onPress}
      style={modalStyle}
      {...modalProps}>
      <Pressable onPress={onPress} style={composedPressableStyles} {...pressableProps} />
      {children}
    </RNModal>
  );
};

const styles = StyleSheet.create({
  pressable: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    opacity: 0.4,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  backdrop: {
    flex: 1,
  },
});
