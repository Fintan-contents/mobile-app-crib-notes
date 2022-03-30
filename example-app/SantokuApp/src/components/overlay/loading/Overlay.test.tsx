import {act} from '@testing-library/react-hooks';
import {render} from '@testing-library/react-native';
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
  it('Overlayが正常にrenderできることを確認', () => {
    const renderResult = render(
      <Overlay visible>
        <ChildComponent />
      </Overlay>,
    );

    const {queryByTestId, queryByText, getByTestId} = renderResult;

    expect(queryByTestId('text')).not.toBeNull();
    expect(queryByText('test')).not.toBeNull();

    expect(getStyle<ViewStyle>(getByTestId('overlayAnimatedView')).opacity).toBe(0);
    expect(renderResult).toMatchSnapshot('render直後');

    act(() => {
      jest.advanceTimersByTime(FADE_DURATION);
    });

    expect(getStyle<ViewStyle>(getByTestId('overlayAnimatedView')).opacity).toBe(1);
    expect(renderResult).toMatchSnapshot('フェードイン後');

    renderResult.rerender(
      <Overlay visible={false}>
        <ChildComponent />
      </Overlay>,
    );

    act(() => {
      jest.advanceTimersByTime(FADE_DURATION);
    });

    expect(queryByTestId('overlayAnimatedView')).toBeNull();
    expect(renderResult).toMatchSnapshot('フェードアウト後');
  });

  it('Overlayに指定したpropsがrenderに反映されていることを確認', () => {
    const onHideEnd = jest.fn();
    // fadeDurationはテストコードでアニメーション時間を調整できないため検証対象外
    const {queryByText, getByTestId} = render(
      <Overlay visible onHideEnd={onHideEnd} style={{backgroundColor: 'red'}}>
        <ChildComponent />
      </Overlay>,
    );

    act(() => {
      jest.advanceTimersByTime(FADE_DURATION);
    });

    expect(queryByText('test')).not.toBeNull();
    expect(getStyle<ViewStyle>(getByTestId('overlayAnimatedView')).backgroundColor).toBe('red');
  });
});
