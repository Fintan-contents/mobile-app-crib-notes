import {usePrevious} from 'bases/core/utils/usePrevious';
import {useVisibility} from 'bases/core/utils/useVisibility';
import {useWorkletCallback} from 'bases/core/utils/useWorkletCallback';
import {useCallback, useEffect} from 'react';
import {BackHandler, NativeEventSubscription} from 'react-native';

type BackdropAnimationConfig = {
  isVisible: boolean;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
};

export const useOverlayBackdrop = ({isVisible, enteringCallback, exitingCallback}: BackdropAnimationConfig) => {
  const {isVisible: isOverlayVisible, setVisible: show, setInvisible: setOverlayInvisible} = useVisibility(isVisible);

  const composedEnteringCallback = useWorkletCallback(enteringCallback);
  const composedExitingCallback = useWorkletCallback(
    useCallback(
      (finished: boolean) => {
        setOverlayInvisible();
        if (exitingCallback) {
          exitingCallback(finished);
        }
      },
      [setOverlayInvisible, exitingCallback],
    ),
  );

  const isVisiblePrevious = usePrevious(isVisible);
  useEffect(() => {
    if (!isVisiblePrevious && isVisible) {
      show();
    }
  }, [isVisible, isVisiblePrevious, show]);

  useEffect(() => {
    // Androidの仮想バックキーの制御
    // オーバレイ表示中は仮想バックキーをタップしても何も動作しないようにする
    let subscription: NativeEventSubscription | undefined;
    if (isOverlayVisible) {
      subscription = BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    return () => {
      subscription?.remove();
    };
  }, [isOverlayVisible]);

  return {
    isOverlayVisible,
    show,
    composedEnteringCallback,
    composedExitingCallback,
  };
};
