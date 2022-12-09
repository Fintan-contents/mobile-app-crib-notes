import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Reanimated, {WithTimingConfig} from 'react-native-reanimated';

import {usePickerContainer} from './usePickerContainer';

export const DEFAULT_SLIDE_IN_DURATION = 300;
export const DEFAULT_SLIDE_OUT_DURATION = 300;

// React Native ReanimatedのLayout Animationsを使用すると↓の不具合が発生するため、指定できないようにしています。
// https://github.com/software-mansion/react-native-reanimated/issues/2906
export type PickerContainerProps = Omit<Reanimated.AnimateProps<ViewProps>, 'exiting' | 'entering'> & {
  isVisible: boolean;
  afterSlideIn?: (finished?: boolean) => unknown;
  afterSlideOut?: (finished?: boolean) => unknown;
  slideInDuration?: number;
  slideOutDuration?: number;
  slideInConfig?: WithTimingConfig;
  slideOutConfig?: WithTimingConfig;
};

export const PickerContainer: React.FC<React.PropsWithChildren<PickerContainerProps>> = ({
  isVisible,
  style,
  afterSlideIn,
  afterSlideOut,
  slideInDuration = DEFAULT_SLIDE_IN_DURATION,
  slideOutDuration = DEFAULT_SLIDE_OUT_DURATION,
  slideInConfig,
  slideOutConfig,
  children,
  ...animatedViewProps
}) => {
  const {isPickerVisible, transform, updateContentHeight} = usePickerContainer({
    isVisible,
    afterSlideIn,
    afterSlideOut,
    slideInDuration,
    slideOutDuration,
    slideInConfig,
    slideOutConfig,
  });
  return !isPickerVisible ? null : (
    <View style={[styles.container]} pointerEvents="box-none">
      <Reanimated.View style={[style, transform]} onLayout={updateContentHeight} {...animatedViewProps}>
        {children}
      </Reanimated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
