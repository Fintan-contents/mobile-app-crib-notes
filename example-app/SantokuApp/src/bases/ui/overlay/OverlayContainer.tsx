import {useWorkletCallback} from 'bases/core/utils/useWorkletCallback';
import React, {useMemo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Reanimated, {BaseAnimationBuilder, FadeIn, FadeOut, Keyframe} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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

export const OverlayContainer: React.FC<React.PropsWithChildren<ModalContainerProps>> = ({
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

  const {top, bottom, left, right} = useSafeAreaInsets();
  const containerStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.container,
        // WORKAROUND: FullWindowOverlayを使用した場合に、iOSでSafeAreaViewが正常に動作しない事象の対応
        // FullWindowOverlayのwidth/heightにスクリーンサイズを設定することでSafeAreaViewが動作するようにはなりますが、
        // width/heightを指定した場合は、OverlayContainerがアウンマウントされたタイミングでFullWindowOverlayもアンマウントする必要があります。
        // （FullWindowOverlayをアンマウントしないと、画面全体にFullWindowOverlayが残ってしまい、真っ白な画面が表示されてしまいます。）
        // しかし、FullWindowOverlayはNavigationContainerの中でアンマウントすると、クラッシュする不具合があります。
        // そのため、ここではuseSafeAreaInsetsから取得したInsetsをpaddingに設定することで回避しています。
        // https://github.com/th3rdwave/react-native-safe-area-context/issues/289
        // https://github.com/software-mansion/react-native-screens/issues/1202
        // https://github.com/software-mansion/react-native-screens/pull/1375
        {paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right},
      ]),
    [bottom, left, right, top],
  );
  return (
    <>
      {isVisible && (
        <View style={containerStyle} pointerEvents="box-none">
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
