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
