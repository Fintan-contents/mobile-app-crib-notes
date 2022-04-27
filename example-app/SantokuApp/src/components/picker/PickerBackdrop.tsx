import {composePressableStyles} from 'framework/utilities';
import React, {useMemo} from 'react';
import {Modal as RNModal, ModalProps, Omit, Pressable, PressableProps, StyleSheet, ViewProps} from 'react-native';
import Reanimated, {BaseAnimationBuilder, FadeIn, FadeOut, Keyframe} from 'react-native-reanimated';

import {usePickerBackdropUseCase} from './usePickerBackdropUseCase';

export const DEFAULT_COLOR = 'rgba(0,0,0,0.4)';
export const DEFAULT_FADE_IN_DURATION = 300;
export const DEFAULT_FADE_OUT_DURATION = 150;
export const DEFAULT_ENTERING = FadeIn.duration(DEFAULT_FADE_IN_DURATION);
export const DEFAULT_EXITING = FadeOut.duration(DEFAULT_FADE_OUT_DURATION);

export type PickerBackdropProps = Omit<Reanimated.AnimateProps<ViewProps>, 'entering' | 'exiting'> & {
  isVisible: boolean;
  onPress?: () => unknown;
  /**
   * iOSの場合、アニメーションが終わった後に呼び出されます。
   * Androidの場合、アニメーションが始まった時に呼び出されます。
   */
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  pressableProps?: PressableProps;
  modalProps?: ModalProps;
  /**
   * enteringに指定したAnimationBuilderなどでwithCallbackを指定しても、このコンポーネントの中で上書きしているため実行できません。
   * withCallbackで実行する関数は、enteringCallbackで指定してください。
   */
  entering?: BaseAnimationBuilder | Keyframe;
  /**
   * exitingに指定したAnimationBuilderなどでwithCallbackを指定しても、このコンポーネントの中で上書きしているため実行できません。
   * withCallbackで実行する関数は、exitingCallbackで指定してください。
   */
  exiting?: BaseAnimationBuilder | Keyframe;
};

export const PickerBackdrop: React.FC<PickerBackdropProps> = ({
  isVisible,
  onPress,
  entering = DEFAULT_ENTERING,
  exiting = DEFAULT_EXITING,
  enteringCallback,
  exitingCallback,
  pressableProps: {style: pressableStyle, ...pressableProps} = {},
  modalProps: {style: modalStyle, ...modalProps} = {},
  /**
   * このコンポーネントでは、ReanimatedのEntering/Exitingを使用してアニメーションを実現しています。
   * Entering/Exitingを使用した場合は、opacityを設定しても反映されません。
   * backgroundColorにrgbaで指定してください。（e.g. backgroundColor: rgba(0,0,0,0.4)）
   */
  style,
  children,
  ...animatedViewProps
}) => {
  const {isModalVisible, composedEnteringCallback, composedExitingCallback} = usePickerBackdropUseCase({
    isVisible,
    enteringCallback,
    exitingCallback,
  });

  const composedPressableStyles = useMemo(
    () => composePressableStyles([styles.pressable, pressableStyle]),
    [pressableStyle],
  );

  return !isModalVisible ? null : (
    <RNModal
      visible
      statusBarTranslucent
      animationType="none"
      transparent
      // 戻るボタンが押されたとき（onRequestClose）は、背景がタップされたときと同じ振る舞いになるようにしておく。
      onRequestClose={onPress}
      style={modalStyle}
      {...modalProps}>
      {isVisible && (
        <Pressable onPress={onPress} style={composedPressableStyles} {...pressableProps}>
          <Reanimated.View
            entering={entering.withCallback(composedEnteringCallback)}
            exiting={exiting.withCallback(composedExitingCallback)}
            style={StyleSheet.flatten([styles.backdrop, style])}
            {...animatedViewProps}
          />
        </Pressable>
      )}
      {children}
    </RNModal>
  );
};

const styles = StyleSheet.create({
  pressable: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
  },
  backdrop: {
    flex: 1,
    backgroundColor: DEFAULT_COLOR,
  },
});
