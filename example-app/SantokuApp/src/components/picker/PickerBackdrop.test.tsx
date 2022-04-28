import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {ModalProps, PressableProps, ViewProps} from 'react-native';
import Reanimated, {ZoomIn, ZoomOut} from 'react-native-reanimated';

import {PICKER_BACKDROP_DEFAULT_ENTERING, PICKER_BACKDROP_DEFAULT_EXITING, PickerBackdrop} from './PickerBackdrop';

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

describe('PickerBackdrop only with required props', () => {
  it('returns null if not visible', () => {
    const sut = render(<PickerBackdrop isVisible={false} />);
    // PickerBackdropがnullを返していることを確認したいがうまくやる方法が見当たらないので`toJSON`でnullになることを確認する。
    expect(sut.toJSON()).toBeNull();
  });

  it('renders successfully only with required props', () => {
    const sut = render(<PickerBackdrop isVisible testID="backdropAnimated" />);
    const animatedView = sut.getByTestId('backdropAnimated');
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    // Animated.Viewのentering/exitingをテストで実行することができなかったため、entering/exitingにデフォルトアニメーションが設定されていることのみを確認する。
    expect(sut).toMatchSnapshot('AnimatedView with visible.');
    expect(animatedView).not.toBeNull();
    expect(animatedViewProps.entering).toBe(PICKER_BACKDROP_DEFAULT_ENTERING);
    expect(animatedViewProps.exiting).toBe(PICKER_BACKDROP_DEFAULT_EXITING);

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    sut.update(<PickerBackdrop isVisible={false} />);
    const animatedView2 = sut.queryByTestId('backdropAnimated');
    expect(sut).toMatchSnapshot('AnimatedView with invisible.');
    expect(animatedView2).toBeNull();
  });
});

describe('PickerBackdrop with `onPress', () => {
  it('should be called on pressed', () => {
    const onPress = jest.fn();
    const sut = render(
      <PickerBackdrop
        isVisible
        onPress={onPress}
        testID="pickerBackDrop"
        pressableProps={{testID: 'pressable'}}
        modalProps={{testID: 'modal'}}
      />,
    );
    fireEvent.press(sut.getByTestId('pressable'));
    expect(onPress).toHaveBeenCalledTimes(1);
    fireEvent(sut.getByTestId('modal'), 'onRequestClose');
    expect(onPress).toHaveBeenCalledTimes(2);
  });
});
//
describe('PickerBackdrop with all props', () => {
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
    const sut = render(
      <PickerBackdrop
        isVisible
        testID="animatedView"
        onPress={onPress}
        modalProps={{
          testID: 'modal',
          style: {backgroundColor: 'yellow'},
          statusBarTranslucent: false,
          animationType: 'fade',
          transparent: false,
          presentationStyle: 'fullScreen',
        }}
        pressableProps={{testID: 'pressable', style: {display: 'none'}, onLongPress}}
        animatedProps={{pointerEvents: 'none'}}
        style={{backgroundColor: 'green', borderColor: 'red'}}
        entering={entering}
        exiting={exiting}
      />,
    );
    expect(sut).toMatchSnapshot('PickerBackdrop with all props.');
    const modal = sut.getByTestId('modal');
    const pressable = sut.getByTestId('pressable');
    const animatedView = sut.getByTestId('animatedView');

    // assert modal
    fireEvent(modal, 'onRequestClose');
    const modalProps = modal.props as ModalProps;
    expect(modalProps.visible).toBe(true);
    expect(modalProps.statusBarTranslucent).toBe(false);
    expect(modalProps.animationType).toBe('fade');
    expect(modalProps.transparent).toBe(false);
    expect(modalProps.style).toEqual({backgroundColor: 'yellow'});
    expect(modalProps.presentationStyle).toBe('fullScreen');
    expect(onPress).toHaveBeenCalledTimes(1);

    // assert pressable
    fireEvent.press(pressable);
    fireEvent(pressable, 'onLongPress');
    const pressableProps = pressable.props as PressableProps;
    expect(pressableProps.style).toEqual({bottom: 0, display: 'none', left: 0, position: 'absolute', right: 0, top: 0});
    expect(onPress).toHaveBeenCalledTimes(2);
    expect(onLongPress).toHaveBeenCalledTimes(1);

    // assert animatedView
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    expect(animatedViewProps.style).toEqual({flex: 1, backgroundColor: 'green', borderColor: 'red'});
    expect(animatedViewProps.entering).toBe(entering);
    expect(animatedViewProps.exiting).toBe(exiting);
  });
});
