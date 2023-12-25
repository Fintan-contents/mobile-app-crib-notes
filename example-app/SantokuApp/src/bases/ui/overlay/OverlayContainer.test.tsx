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

import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {ViewProps} from 'react-native';
import Reanimated, {ZoomIn, ZoomOut} from 'react-native-reanimated';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MODAL_CONTAINER_DEFAULT_ENTERING, MODAL_CONTAINER_DEFAULT_EXITING, OverlayContainer} from './OverlayContainer';

jest.useFakeTimers();

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
