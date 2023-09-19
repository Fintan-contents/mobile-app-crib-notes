declare namespace jest {
  import Reanimated from 'react-native-reanimated';
  import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

  interface Matchers<R> {
    toHaveAnimatedStyle(
      style:
        | Reanimated.AnimateStyle<ViewStyle | ImageStyle | TextStyle>[]
        | Reanimated.AnimateStyle<ViewStyle | ImageStyle | TextStyle>,
    ): R;
  }
}

declare module 'react-native-reanimated/lib/module/reanimated2/jestUtils' {
  import {ReactTestInstance} from 'react-test-renderer';
  import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
  export const withReanimatedTimer: (test: () => unknown) => void;
  export const advanceAnimationByTime: (time: number) => void;
  export const advanceAnimationByFrame: (count: number) => void;
  export const getAnimatedStyle: <T = ViewStyle | ImageStyle | TextStyle>(instance: ReactTestInstance) => T;
}
