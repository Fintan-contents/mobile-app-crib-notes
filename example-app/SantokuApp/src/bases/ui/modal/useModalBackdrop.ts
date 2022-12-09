import {usePrevious} from 'bases/core/utils/usePrevious';
import {useVisibility} from 'bases/core/utils/useVisibility';
import {useCallback, useEffect} from 'react';
import {cancelAnimation, Easing, runOnJS, useSharedValue, withTiming, WithTimingConfig} from 'react-native-reanimated';

type BackdropAnimationConfig = {
  isVisible: boolean;
  opacity: number;
  afterFadeIn?: (finished?: boolean) => unknown;
  afterFadeOut?: (finished?: boolean) => unknown;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  fadeInConfig?: WithTimingConfig;
  fadeOutConfig?: WithTimingConfig;
};

export const useModalBackdrop = ({
  isVisible,
  opacity,
  afterFadeIn,
  afterFadeOut,
  fadeInDuration,
  fadeOutDuration,
  fadeInConfig,
  fadeOutConfig,
}: BackdropAnimationConfig) => {
  const {
    isVisible: isModalVisible,
    setVisible: setModalVisible,
    setInvisible: setModalInvisible,
  } = useVisibility(isVisible);

  const animatedOpacity = useSharedValue(0);

  const show = useCallback(() => {
    setModalVisible();
    cancelAnimation(animatedOpacity);
    animatedOpacity.value = withTiming(
      opacity,
      {
        easing: Easing.inOut(Easing.quad),
        duration: fadeInDuration,
        ...fadeInConfig,
      },
      afterFadeIn && (finished => runOnJS(afterFadeIn)(finished)),
    );
  }, [animatedOpacity, fadeInConfig, fadeInDuration, setModalVisible, afterFadeIn, opacity]);

  const hide = useCallback(() => {
    cancelAnimation(animatedOpacity);
    animatedOpacity.value = withTiming(
      0,
      {
        easing: Easing.inOut(Easing.quad),
        duration: fadeOutDuration,
        ...fadeOutConfig,
      },
      finished => {
        if (finished) {
          runOnJS(setModalInvisible)();
        }
        afterFadeOut && runOnJS(afterFadeOut)(finished);
      },
    );
  }, [animatedOpacity, fadeOutConfig, fadeOutDuration, setModalInvisible, afterFadeOut]);

  const isVisiblePrevious = usePrevious(isVisible);
  useEffect(() => {
    if (!isVisiblePrevious && isVisible) {
      show();
    } else if (isVisiblePrevious && !isVisible) {
      hide();
    }
  }, [isVisiblePrevious, isVisible, show, hide]);

  return {
    isModalVisible,
    animatedOpacity,
    show,
    hide,
  };
};
