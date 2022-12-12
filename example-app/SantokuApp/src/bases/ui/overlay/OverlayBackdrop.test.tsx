import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {PressableProps, ViewProps} from 'react-native';
import Reanimated, {ZoomIn, ZoomOut} from 'react-native-reanimated';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {OVERLAY_BACKDROP_DEFAULT_ENTERING, OVERLAY_BACKDROP_DEFAULT_EXITING, OverlayBackdrop} from './OverlayBackdrop';

// If advancing a timer changes the state of a component, the timer must be run within an act.
// However, since act is `Thenable`, ESLint will issue a warning if you do not do something like await.
// For convenience, disable the relevant rule in this file.
/* eslint-disable @typescript-eslint/no-floating-promises */

// To get react-native-reanimated v2 animations to work with timer mocks, you need to use the `modern` timer.
// By default, Jest v26 uses `legacy` timer. So if you use `withReanimatedTimer` that use the default timer, animation does not start.
// https://jestjs.io/ja/docs/timer-mocks
jest.useFakeTimers('modern');

// TODO: Jest v27にアップデートできたら、withReanimatedTimerでテストを実装できるか検証する。
//       （JestのバージョンはExpoに依存しているので、Expoでのアップデートを待っている状態）

jest.runAllTimers();

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaProvider
      initialMetrics={{frame: {width: 200, height: 400, x: 0, y: 0}, insets: {top: 0, left: 0, right: 0, bottom: 0}}}>
      {children}
    </SafeAreaProvider>
  );
};

describe('OverlayBackdrop only with required props', () => {
  it('returns null if not visible', () => {
    render(<OverlayBackdrop isVisible={false} />, {wrapper: Wrapper});
    // OverlayBackdropがnullを返していることを確認したいがうまくやる方法が見当たらないので`toJSON`でnullになることを確認する。
    expect(screen.toJSON()).toBeNull();
  });

  it('renders successfully only with required props', () => {
    render(<OverlayBackdrop isVisible testID="backdropAnimated" />, {wrapper: Wrapper});
    const animatedView = screen.getByTestId('backdropAnimated');
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    // Animated.Viewのentering/exitingをテストで実行することができなかったため、entering/exitingにデフォルトアニメーションが設定されていることのみを確認する。
    expect(screen).toMatchSnapshot('AnimatedView with visible.');
    expect(animatedView).not.toBeNull();
    expect(animatedViewProps.entering).toBe(OVERLAY_BACKDROP_DEFAULT_ENTERING);
    expect(animatedViewProps.exiting).toBe(OVERLAY_BACKDROP_DEFAULT_EXITING);

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    screen.update(<OverlayBackdrop isVisible={false} />);
    const animatedView2 = screen.queryByTestId('backdropAnimated');
    expect(screen).toMatchSnapshot('AnimatedView with invisible.');
    expect(animatedView2).toBeNull();
  });
});

describe('OverlayBackdrop with `onPress', () => {
  it('should be called on pressed', () => {
    const onPress = jest.fn();
    render(
      <OverlayBackdrop
        isVisible
        onPress={onPress}
        testID="pickerBackDrop"
        pressableProps={{testID: 'pressable'}}
        backdropViewProps={{testID: 'modal'}}
      />,
      {wrapper: Wrapper},
    );
    fireEvent.press(screen.getByTestId('pressable'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
//
describe('OverlayBackdrop with all props', () => {
  it('should be applied properly', () => {
    const onPress = jest.fn();
    const onLongPress = jest.fn();
    const entering = ZoomIn.duration(500);
    const exiting = ZoomOut.duration(300);
    /**
     * entering/exitingを実行できなかったため、以下のPropsは検証できていません
     * - enteringCallback
     * - exitingCallback
     *
     * animatedPropsは取得できなかったため（Snapshot上にも存在していない）、検証できていません
     */
    render(
      <OverlayBackdrop
        isVisible
        testID="animatedView"
        onPress={onPress}
        pressableProps={{testID: 'pressable', style: {display: 'none'}, onLongPress}}
        animatedProps={{pointerEvents: 'none'}}
        backdropViewProps={{testID: 'modal', style: {bottom: 10, right: 10}, pointerEvents: 'box-none'}}
        style={{backgroundColor: 'green', borderColor: 'red'}}
        entering={entering}
        exiting={exiting}
      />,
      {wrapper: Wrapper},
    );
    expect(screen).toMatchSnapshot('OverlayBackdrop with all props.');
    const modal = screen.getByTestId('modal');
    const pressable = screen.getByTestId('pressable');
    const animatedView = screen.getByTestId('animatedView');

    // assert modal
    const modalProps = modal.props as ViewProps;
    expect(modalProps.style).toEqual({bottom: 10, right: 10, position: 'absolute', width: 200, height: 400});
    expect(modalProps.pointerEvents).toEqual('box-none');

    // assert pressable
    fireEvent.press(pressable);
    fireEvent(pressable, 'onLongPress');
    const pressableProps = pressable.props as PressableProps;
    expect(pressableProps.style).toEqual({bottom: 0, display: 'none', left: 0, position: 'absolute', right: 0, top: 0});
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onLongPress).toHaveBeenCalledTimes(1);

    // assert animatedView
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    expect(animatedViewProps.style).toEqual({flex: 1, backgroundColor: 'green', borderColor: 'red'});
    expect(animatedViewProps.entering).toBe(entering);
    expect(animatedViewProps.exiting).toBe(exiting);
  });
});
