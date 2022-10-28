import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {ViewProps} from 'react-native';
import Reanimated, {ZoomIn, ZoomOut} from 'react-native-reanimated';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MODAL_CONTAINER_DEFAULT_ENTERING, MODAL_CONTAINER_DEFAULT_EXITING, OverlayContainer} from './OverlayContainer';

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
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

describe('OverlayContainer only with required props', () => {
  it('returns null if not visible', () => {
    render(<OverlayContainer isVisible={false} />, {wrapper: Wrapper});
    // OverlayContainerがnullを返していることを確認したいがうまくやる方法が見当たらないので`toJSON`でnullになることを確認する。
    expect(screen.toJSON()).toBeNull();
  });

  it('renders successfully only with required props', () => {
    render(<OverlayContainer isVisible testID="containerAnimated" />, {wrapper: Wrapper});
    const animatedView = screen.getByTestId('containerAnimated');
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    // Animated.Viewのentering/exitingをテストで実行することができなかったため、entering/exitingにデフォルトアニメーションが設定されていることのみを確認する。
    expect(screen).toMatchSnapshot('AnimatedView with visible.');
    expect(animatedView).not.toBeNull();
    expect(animatedViewProps.entering).toBe(MODAL_CONTAINER_DEFAULT_ENTERING);
    expect(animatedViewProps.exiting).toBe(MODAL_CONTAINER_DEFAULT_EXITING);

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    screen.update(<OverlayContainer isVisible={false} />);
    const animatedView2 = screen.queryByTestId('containerAnimated');
    expect(screen).toMatchSnapshot('AnimatedView with invisible.');
    expect(animatedView2).toBeNull();
  });
});

describe('OverlayContainer with all props', () => {
  it('should be applied properly', () => {
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
      <OverlayContainer
        isVisible
        testID="animatedView"
        animatedProps={{pointerEvents: 'none'}}
        style={{backgroundColor: 'green'}}
        entering={entering}
        exiting={exiting}
      />,
      {wrapper: Wrapper},
    );
    expect(screen).toMatchSnapshot('OverlayContainer with all props.');
    const animatedView = screen.getByTestId('animatedView');

    // assert animatedView
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    expect(animatedViewProps.style).toEqual({backgroundColor: 'green'});
    expect(animatedViewProps.entering).toBe(entering);
    expect(animatedViewProps.exiting).toBe(exiting);
  });
});
