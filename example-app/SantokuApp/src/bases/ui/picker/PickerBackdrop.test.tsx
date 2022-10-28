import {fireEvent, render, screen, act} from '@testing-library/react-native';
import React from 'react';
import {ModalProps, PressableProps} from 'react-native';

import {DEFAULT_FADE_OUT_DURATION, PickerBackdrop} from './PickerBackdrop';

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

describe('PickerBackdrop only with required props', () => {
  it('returns null if not visible', () => {
    render(<PickerBackdrop isVisible={false} />);
    // PickerBackdropがnullを返していることを確認したいがうまくやる方法が見当たらないので`toJSON`でnullになることを確認する。
    expect(screen.toJSON()).toBeNull();
  });

  it('renders successfully only with required props', () => {
    render(<PickerBackdrop isVisible pressableProps={{testID: 'pressable'}} />);
    //////////////////////////////////////////////////////////////////////////////////
    // 初期表示
    //////////////////////////////////////////////////////////////////////////////////
    // エラーが起きずにレンダリングされること
    const pressable = screen.queryByTestId('pressable');
    expect(pressable).not.toBeNull();
    expect(screen).toMatchSnapshot('Before animation started');

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    screen.update(<PickerBackdrop isVisible={false} pressableProps={{testID: 'pressable'}} />);
    act(() => {
      jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION);
    });
    const pressable2 = screen.queryByTestId('pressable');
    expect(pressable2).toBeNull();
    expect(screen).toMatchSnapshot('Just After fade out animation completed');
  });
});

describe('PickerBackdrop with `onPress', () => {
  it('should be called on pressed', () => {
    const onPress = jest.fn();
    render(
      <PickerBackdrop
        isVisible
        onPress={onPress}
        pressableProps={{testID: 'pressable'}}
        modalProps={{testID: 'modal'}}
      />,
    );
    fireEvent.press(screen.getByTestId('pressable'));
    expect(onPress).toHaveBeenCalledTimes(1);
    fireEvent(screen.getByTestId('modal'), 'onRequestClose');
    expect(onPress).toHaveBeenCalledTimes(2);
  });
});
//
describe('PickerBackdrop with all props', () => {
  it('should be applied properly', () => {
    const onPress = jest.fn();
    const onLongPress = jest.fn();
    const afterFadeIn = jest.fn();
    /**
     * WithTimingConfigのeasingを取得できなかったため、以下のPropsは検証できていません。
     * - fadeIntConfig
     * - fadeOutConfig
     *
     * animatedPropsは取得できなかったため（Snapshot上にも存在していない）、検証できていません
     */
    render(
      <PickerBackdrop
        isVisible
        onPress={onPress}
        modalProps={{
          testID: 'modal',
          style: {backgroundColor: 'yellow'},
          statusBarTranslucent: false,
          animationType: 'fade',
          transparent: false,
          presentationStyle: 'fullScreen',
        }}
        pressableProps={{
          testID: 'pressable',
          style: {display: 'none', backgroundColor: 'red', opacity: 0.8},
          onLongPress,
        }}
        animatedProps={{pointerEvents: 'none'}}
        style={{backgroundColor: 'green', borderColor: 'red'}}
        fadeInDuration={200}
        afterFadeIn={afterFadeIn}
      />,
    );
    expect(screen).toMatchSnapshot('PickerBackdrop with all props.');
    const modal = screen.getByTestId('modal');
    const pressable = screen.getByTestId('pressable');

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

    // fadeInDurationで指定した時間の1msc前ではafterFadeInは実行されない
    act(() => {
      jest.advanceTimersByTime(199);
    });
    expect(afterFadeIn).not.toHaveBeenCalled();
    // fadeInDurationで指定した時間経過後は、afterFadeInが実行される
    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(afterFadeIn).toHaveBeenCalled();

    // assert pressable
    fireEvent.press(pressable);
    fireEvent(pressable, 'onLongPress');
    const pressableProps = pressable.props as PressableProps;
    expect(pressableProps.style).toEqual({
      backgroundColor: 'red',
      opacity: 0.8,
      bottom: 0,
      display: 'none',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    });
    expect(onPress).toHaveBeenCalledTimes(2);
    expect(onLongPress).toHaveBeenCalledTimes(1);

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    const afterFadeOut = jest.fn();
    screen.update(<PickerBackdrop isVisible={false} afterFadeOut={afterFadeOut} fadeOutDuration={100} />);

    // fadeOutDurationで指定した時間の1msc前ではafterFadeOutは実行されない
    act(() => {
      jest.advanceTimersByTime(99);
    });
    expect(afterFadeOut).not.toHaveBeenCalled();
    // fadeOutDurationで指定した時間経過後は、afterFadeOutが実行される
    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(afterFadeOut).toHaveBeenCalled();
  });
});
