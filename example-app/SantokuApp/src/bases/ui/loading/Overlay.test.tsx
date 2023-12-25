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

import {render, screen, act} from '@testing-library/react-native';
import React from 'react';
import {Text, ViewStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Overlay} from './Overlay';

jest.useFakeTimers();

function getStyle<T>(instance: ReactTestInstance) {
  return instance.props.style as T;
}

const ChildComponent = () => {
  return <Text testID="text">test</Text>;
};

const FADE_DURATION = 200;

describe('Overlay', () => {
  it('Overlayが正常にrenderできることを確認', async () => {
    render(
      <Overlay visible>
        <ChildComponent />
      </Overlay>,
    );

    expect(screen.queryByTestId('text')).not.toBeNull();
    expect(screen.queryByText('test')).not.toBeNull();

    expect(getStyle<ViewStyle>(screen.getByTestId('overlayAnimatedView')).opacity).toBe(0);
    expect(screen).toMatchSnapshot('render直後');

    await act(() => {
      jest.advanceTimersByTime(FADE_DURATION);
    });

    expect(getStyle<ViewStyle>(screen.getByTestId('overlayAnimatedView')).opacity).toBe(1);
    expect(screen).toMatchSnapshot('フェードイン後');

    screen.rerender(
      <Overlay visible={false}>
        <ChildComponent />
      </Overlay>,
    );

    await act(() => {
      jest.advanceTimersByTime(FADE_DURATION);
    });

    expect(screen.queryByTestId('overlayAnimatedView')).toBeNull();
    expect(screen).toMatchSnapshot('フェードアウト後');
  });

  it('Overlayに指定したpropsがrenderに反映されていることを確認', async () => {
    const onHideEnd = jest.fn();
    // fadeDurationはテストコードでアニメーション時間を調整できないため検証対象外
    render(
      <Overlay visible onHideEnd={onHideEnd} style={{backgroundColor: 'red'}}>
        <ChildComponent />
      </Overlay>,
    );

    await act(() => {
      jest.advanceTimersByTime(FADE_DURATION);
    });

    expect(screen.queryByText('test')).not.toBeNull();
    expect(getStyle<ViewStyle>(screen.getByTestId('overlayAnimatedView')).backgroundColor).toBe('red');
  });
});
