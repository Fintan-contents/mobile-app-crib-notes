import {fireEvent, render, act} from '@testing-library/react-native';
import React from 'react';
import {View, ViewProps} from 'react-native';
import Reanimated from 'react-native-reanimated';

import {DEFAULT_SLIDE_IN_DURATION, DEFAULT_SLIDE_OUT_DURATION, PickerContainer} from './PickerContainer';

jest.useFakeTimers();

// TODO: Jest v27にアップデートできたら、withReanimatedTimerでテストを実装できるか検証する。
//       （JestのバージョンはExpoに依存しているので、Expoでのアップデートを待っている状態）
const startAnimation = () =>
  act(() => {
    jest.advanceTimersByTime(1);
  });

jest.runAllTimers();

jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn().mockReturnValue({width: 400, height: 1000}),
  set: jest.fn(),
  addEventListener: jest.fn().mockReturnValue({remove: jest.fn()}),
}));

describe('PickerContainer only with required props', () => {
  it('returns null if not visible', () => {
    const sut = render(<PickerContainer isVisible={false} />);
    // PickerContainerがnullを返していることを確認したいがうまくやる方法が見当たらないので`toJSON`でnullになることを確認する。
    expect(sut.toJSON()).toBeNull();
  });

  it('renders successfully only with required props', async () => {
    const sut = render(
      <PickerContainer isVisible testID="containerAnimated">
        <View style={{height: 400, width: '100%'}} />
      </PickerContainer>,
    );
    const animatedView = sut.getByTestId('containerAnimated');
    fireEvent(animatedView, 'onLayout', {nativeEvent: {layout: {height: 300}}});
    //////////////////////////////////////////////////////////////////////////////////
    // 初期表示
    //////////////////////////////////////////////////////////////////////////////////
    // エラーが起きずにレンダリングされること
    expect(sut).toMatchSnapshot('Before animation started');
    expect(animatedView).toHaveAnimatedStyle({transform: [{translateY: 1000}]});

    await startAnimation();

    // アニメーション中は`transform`が変化すること
    await act(() => {
      jest.advanceTimersByTime(DEFAULT_SLIDE_IN_DURATION / 2);
    });
    expect(animatedView).toHaveAnimatedStyle({transform: [{translateY: 75}]});
    expect(sut).toMatchSnapshot('Animating (slide in)');

    // アニメーションが完了すると`transform`が設定値に到達していること
    await act(() => {
      jest.advanceTimersByTime(DEFAULT_SLIDE_IN_DURATION / 2);
    });
    expect(animatedView).toHaveAnimatedStyle({transform: [{translateY: 0}]});
    expect(sut).toMatchSnapshot('Just After slide in animation completed');

    // アニメーションが完了したあとは変化しないこと
    await act(() => {
      jest.advanceTimersByTime(10);
    });
    expect(animatedView).toHaveAnimatedStyle({transform: [{translateY: 0}]});
    expect(sut).toMatchSnapshot('Just After slide in animation completed');

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    sut.update(<PickerContainer isVisible={false} />);
    //////////////////////////////////////////////////////////////////////////////////

    await startAnimation();

    // アニメーション中は`transform`が変化すること
    await act(() => {
      jest.advanceTimersByTime(DEFAULT_SLIDE_OUT_DURATION / 2);
    });
    expect(animatedView).toHaveAnimatedStyle({transform: [{translateY: 75}]});
    expect(sut).toMatchSnapshot('Animating (slide out)');

    // アニメーションが完了するとコンポーネントが消えること
    await act(() => {
      jest.advanceTimersByTime(DEFAULT_SLIDE_OUT_DURATION / 2);
    });
    expect(sut.container.children).toEqual([]);
    expect(sut).toMatchSnapshot('Just After slide out animation completed');

    // アニメーションが完了した後も少し時間を進めて、何も変わらないことを確認する
    await act(() => {
      jest.advanceTimersByTime(10);
    });
    expect(sut.container.children).toEqual([]);
    expect(sut).toMatchSnapshot('Just After slide out animation completed');
  });
});

describe('PickerContainer with all props', () => {
  it('should be applied properly', async () => {
    const afterSlideIn = jest.fn();
    /**
     * WithTimingConfigのeasingを取得できなかったため、以下のPropsは検証できていません。
     * - slideIntConfig
     * - slideOutConfig
     *
     * animatedPropsは取得できなかったため（Snapshot上にも存在していない）、検証できていません
     */
    const sut = render(
      <PickerContainer
        isVisible
        testID="animatedView"
        animatedProps={{pointerEvents: 'none'}}
        style={{backgroundColor: 'green'}}
        slideInDuration={200}
        afterSlideIn={afterSlideIn}
      />,
    );
    expect(sut).toMatchSnapshot('PickerContainer with all props.');
    const animatedView = sut.getByTestId('animatedView');

    // assert animatedView
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    expect(animatedViewProps.style).toEqual({backgroundColor: 'green', transform: [{translateY: 1000}]});

    // slideInDurationで指定した時間の1msc前ではafterSlideInは実行されない
    await act(() => {
      jest.advanceTimersByTime(199);
    });
    expect(afterSlideIn).not.toHaveBeenCalled();
    // slideInDurationで指定した時間経過後は、afterSlideInが実行される
    await act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(afterSlideIn).toHaveBeenCalled();

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    const afterSlideOut = jest.fn();
    sut.update(<PickerContainer isVisible={false} afterSlideOut={afterSlideOut} slideOutDuration={100} />);

    await startAnimation();
    // slideOutDurationで指定した時間の1msc前ではafterSlideOutは実行されない
    await act(() => {
      jest.advanceTimersByTime(99);
    });
    expect(afterSlideOut).not.toHaveBeenCalled();
    // slideOutDurationで指定した時間経過後は、afterSlideOutが実行される
    await act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(afterSlideOut).toHaveBeenCalled();
  });
});
