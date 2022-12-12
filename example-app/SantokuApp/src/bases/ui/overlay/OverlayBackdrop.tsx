import {composePressableStyles} from 'bases/core/utils/composePressableStyles';
import React, {useMemo} from 'react';
import {Omit, Pressable, PressableProps, StyleSheet, View, ViewProps} from 'react-native';
import Reanimated, {BaseAnimationBuilder, FadeIn, FadeOut, Keyframe} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {useOverlayBackdrop} from './useOverlayBackdrop';

export const OVERLAY_BACKDROP_DEFAULT_COLOR = 'rgba(0,0,0,0.4)';
export const OVERLAY_BACKDROP_DEFAULT_FADE_IN_DURATION = 300;
export const OVERLAY_BACKDROP_DEFAULT_FADE_OUT_DURATION = 300;
export const OVERLAY_BACKDROP_DEFAULT_ENTERING = FadeIn.duration(OVERLAY_BACKDROP_DEFAULT_FADE_IN_DURATION);
export const OVERLAY_BACKDROP_DEFAULT_EXITING = FadeOut.duration(OVERLAY_BACKDROP_DEFAULT_FADE_OUT_DURATION);

export type OverlayBackdropProps = Omit<Reanimated.AnimateProps<ViewProps>, 'entering' | 'exiting'> & {
  isVisible: boolean;
  onPress?: () => unknown;
  /**
   * iOSの場合、アニメーションが終わった後に呼び出されます。
   * Androidの場合、アニメーションが始まった時に呼び出されます。
   */
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  pressableProps?: PressableProps;
  backdropViewProps?: ViewProps;
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

/**
 * Overlayで表示するレイヤー。
 * 同じようなコンポーネントとして{@link PickerBackdrop}がありますが、スプラッシュを表示中にPickerBackdropを表示してしまうと、
 * スプラッシュを非表示にできない問題があります。
 * OverlayBackdropでは、react-nativeのModalを利用しないでOverlay表示することにより、上記問題に対応しています。
 */
export const OverlayBackdrop: React.FC<React.PropsWithChildren<OverlayBackdropProps>> = ({
  isVisible,
  onPress,
  entering = OVERLAY_BACKDROP_DEFAULT_ENTERING,
  exiting = OVERLAY_BACKDROP_DEFAULT_EXITING,
  enteringCallback,
  exitingCallback,
  pressableProps: {style: pressableStyle, ...pressableProps} = {},
  backdropViewProps: {style: modalStyle, ...modalProps} = {},
  /**
   * このコンポーネントでは、ReanimatedのEntering/Exitingを使用してアニメーションを実現しています。
   * Entering/Exitingを使用した場合は、opacityを設定しても反映されません。
   * backgroundColorにrgbaで指定してください。（e.g. backgroundColor: rgba(0,0,0,0.4)）
   */
  style,
  children,
  ...animatedViewProps
}) => {
  const {isOverlayVisible, composedEnteringCallback, composedExitingCallback} = useOverlayBackdrop({
    isVisible,
    enteringCallback,
    exitingCallback,
  });

  const styles = useStyles();

  const composedPressableStyles = useMemo(
    () => composePressableStyles([styles.pressable, pressableStyle]),
    [pressableStyle, styles.pressable],
  );

  return !isOverlayVisible ? null : (
    <View style={StyleSheet.flatten([styles.overlay, modalStyle])} {...modalProps}>
      {isVisible && (
        <Pressable onPress={onPress} style={composedPressableStyles} {...pressableProps}>
          <Reanimated.View
            entering={entering.withCallback(composedEnteringCallback)}
            exiting={exiting.withCallback(composedExitingCallback)}
            style={[styles.backdrop, style]}
            {...animatedViewProps}
          />
        </Pressable>
      )}
      {children}
    </View>
  );
};

const useStyles = () => {
  const {width, height} = useSafeAreaFrame();
  return useMemo(
    () =>
      StyleSheet.create({
        overlay: {
          position: 'absolute',
          bottom: 0,
          width,
          height,
        },
        pressable: {
          ...StyleSheet.absoluteFillObject,
        },
        backdrop: {
          flex: 1,
          backgroundColor: OVERLAY_BACKDROP_DEFAULT_COLOR,
        },
      } as const),
    [height, width],
  );
};
