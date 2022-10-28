import {composePressableStyles} from 'bases/core/utils/composePressableStyles';
import React, {useMemo} from 'react';
import {Modal as RNModal, ModalProps, Pressable, PressableProps, StyleSheet, ViewProps} from 'react-native';
import Reanimated, {WithTimingConfig} from 'react-native-reanimated';

import {useModalBackdrop} from './useModalBackdrop';

export const DEFAULT_BACKGROUND_COLOR = 'black';
export const DEFAULT_OPACITY = 0.4;
export const DEFAULT_FADE_IN_DURATION = 300;
export const DEFAULT_FADE_OUT_DURATION = 150;

// React Native ReanimatedのLayout Animationsを使用すると↓の不具合が発生するため、'exiting'・'entering'の指定ができないようにしています。
// https://github.com/software-mansion/react-native-reanimated/issues/2906
export type ModalBackdropProps = Omit<Reanimated.AnimateProps<ViewProps>, 'exiting' | 'entering'> & {
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

export const ModalBackdrop: React.FC<React.PropsWithChildren<ModalBackdropProps>> = ({
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
  const {isModalVisible} = useModalBackdrop({
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
