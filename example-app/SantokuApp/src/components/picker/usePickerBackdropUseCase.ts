import {usePrevious, useVisibility} from 'framework/utilities';
import {useWorkletCallback} from 'framework/utilities/useWorkletCallback';
import {useCallback, useEffect} from 'react';

type BackdropAnimationConfig = {
  isVisible: boolean;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
};

export const usePickerBackdropUseCase = ({isVisible, enteringCallback, exitingCallback}: BackdropAnimationConfig) => {
  const {
    isVisible: isModalVisible,
    setVisible: setModalVisible,
    setInvisible: setModalInvisible,
  } = useVisibility(isVisible);

  const show = useCallback(() => {
    setModalVisible();
  }, [setModalVisible]);

  const composedEnteringWorkletCallback = useWorkletCallback(enteringCallback);
  const composedExitingCallback = useCallback(
    (finished: boolean) => {
      setModalInvisible();
      if (exitingCallback) {
        exitingCallback(finished);
      }
    },
    [setModalInvisible, exitingCallback],
  );
  const composedExitingWorkletCallback = useWorkletCallback(composedExitingCallback);

  const isVisiblePrevious = usePrevious(isVisible);
  useEffect(() => {
    if (!isVisiblePrevious && isVisible) {
      show();
    }
  }, [isVisiblePrevious, isVisible, show, exitingCallback, composedExitingCallback]);

  return {
    isModalVisible,
    show,
    composedEnteringCallback: composedEnteringWorkletCallback,
    composedExitingCallback: composedExitingWorkletCallback,
  };
};
