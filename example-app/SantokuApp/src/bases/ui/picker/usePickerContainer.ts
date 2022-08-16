import {usePrevious} from 'bases/core/utils/usePrevious';
import {useVisibility} from 'bases/core/utils/useVisibility';
import {useCallback, useEffect, useState} from 'react';
import {Dimensions, LayoutChangeEvent, useWindowDimensions} from 'react-native';
import {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

type ContainerAnimationConfig = {
  isVisible: boolean;
  afterSlideIn?: (finished?: boolean) => unknown;
  afterSlideOut?: (finished?: boolean) => unknown;
  slideInDuration?: number;
  slideOutDuration?: number;
  slideInConfig?: WithTimingConfig;
  slideOutConfig?: WithTimingConfig;
};

export const usePickerContainer = ({
  isVisible,
  afterSlideIn,
  afterSlideOut,
  slideInDuration,
  slideOutDuration,
  slideInConfig,
  slideOutConfig,
}: ContainerAnimationConfig) => {
  const {
    isVisible: isPickerVisible,
    setVisible: setPickerIsVisible,
    setInvisible: setPickerIsNotVisible,
  } = useVisibility(false);

  const isVisiblePrevious = usePrevious(isVisible);

  // PickerContainerが表示された状態で、画面分割や回転などで画面サイズが変更されたときに、できるだけ違和感なく動くように調整する。
  const {height: windowHeight} = useWindowDimensions();
  const [contentHeight, setContentHeight] = useState(Dimensions.get('screen').height);
  const updateContentHeight = useCallback((e: LayoutChangeEvent) => {
    setContentHeight(e.nativeEvent.layout.height);
  }, []);

  const clock = useSharedValue(1);
  const yOffset = useDerivedValue(() => {
    return clock.value * contentHeight;
  }, [contentHeight, windowHeight]);

  const show = useCallback(() => {
    setPickerIsVisible();
    cancelAnimation(clock);
    clock.value = withTiming(
      0,
      {
        easing: Easing.out(Easing.quad),
        duration: slideInDuration,
        ...slideInConfig,
      },
      finished => {
        afterSlideIn && runOnJS(afterSlideIn)(finished);
      },
    );
  }, [afterSlideIn, clock, setPickerIsVisible, slideInConfig, slideInDuration]);

  const hide = useCallback(() => {
    cancelAnimation(clock);
    clock.value = withTiming(
      1,
      {
        easing: Easing.in(Easing.quad),
        duration: slideOutDuration,
        ...slideOutConfig,
      },
      finished => {
        if (finished) {
          runOnJS(setPickerIsNotVisible)();
        }
        afterSlideOut && runOnJS(afterSlideOut)(finished);
      },
    );
  }, [afterSlideOut, clock, setPickerIsNotVisible, slideOutConfig, slideOutDuration]);

  const transform = useAnimatedStyle(() => ({transform: [{translateY: yOffset.value}]}));

  useEffect(() => {
    if (isVisible && !isVisiblePrevious) {
      show();
    } else if (!isVisible && isVisiblePrevious) {
      hide();
    }
  }, [hide, isVisible, isVisiblePrevious, show]);

  return {isPickerVisible, transform, updateContentHeight};
};
