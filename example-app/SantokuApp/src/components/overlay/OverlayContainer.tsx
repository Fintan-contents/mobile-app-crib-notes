import {useWorkletCallback} from 'framework/utilities/useWorkletCallback';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Reanimated, {BaseAnimationBuilder, FadeIn, FadeOut, Keyframe} from 'react-native-reanimated';

export type ModalContainerProps = Omit<Reanimated.AnimateProps<ViewProps>, 'entering' | 'exiting'> & {
  isVisible: boolean;
  /**
   * iOSの場合、アニメーションが終わった後に呼び出されます。
   * Androidの場合、アニメーションが始まった時に呼び出されます。
   */
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  /**
   * enteringに指定したAnimationBuilderなどでwithCallbackを指定しても、本コンポーネント内で上書きしているため実行できません。
   * withCallbackで実行する関数は、enteringCallbackで指定してください。
   */
  entering?: BaseAnimationBuilder | Keyframe;
  /**
   * exitingに指定したAnimationBuilderなどでwithCallbackを指定しても、本コンポーネント内で上書きしているため実行できません。
   * withCallbackで実行する関数は、exitingCallbackで指定してください。
   */
  exiting?: BaseAnimationBuilder | Keyframe;
};

export const MODAL_CONTAINER_DEFAULT_FADE_IN_DURATION = 300;
export const MODAL_CONTAINER_DEFAULT_FADE_OUT_DURATION = 300;
export const MODAL_CONTAINER_DEFAULT_ENTERING = FadeIn.duration(MODAL_CONTAINER_DEFAULT_FADE_IN_DURATION);
export const MODAL_CONTAINER_DEFAULT_EXITING = FadeOut.duration(MODAL_CONTAINER_DEFAULT_FADE_OUT_DURATION);

export const OverlayContainer: React.FC<ModalContainerProps> = ({
  isVisible,
  entering = MODAL_CONTAINER_DEFAULT_ENTERING,
  exiting = MODAL_CONTAINER_DEFAULT_EXITING,
  enteringCallback,
  exitingCallback,
  style,
  children,
  ...animatedViewProps
}) => {
  const composedEnteringCallback = useWorkletCallback(enteringCallback);
  const composedExitingCallback = useWorkletCallback(exitingCallback);

  return (
    <>
      {isVisible && (
        <View style={styles.container} pointerEvents="box-none">
          <Reanimated.View
            style={style}
            entering={entering.withCallback(composedEnteringCallback)}
            exiting={exiting.withCallback(composedExitingCallback)}
            pointerEvents="box-none"
            {...animatedViewProps}>
            {children}
          </Reanimated.View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
