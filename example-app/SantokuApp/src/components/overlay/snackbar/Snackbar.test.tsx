import {act} from '@testing-library/react-hooks';
import {render, screen, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Snackbar} from './Snackbar';

jest.useFakeTimers();

function getStyle<T>(instance: ReactTestInstance) {
  return instance.props.style as T;
}

const ChildComponent = () => {
  return <Text testID="text">test</Text>;
};

const AUTO_HIDE_DURATION = 4000;
const FADE_IN_DURATION = 1000;
const FADE_OUT_DURATION = 1000;
const FORCE_FADE_OUT_DURATION = 300;
const HIDE_FADE_OUT_DURATION = 300;

describe('Snackbar', () => {
  it('Snackbarが正常にrenderできることを確認', () => {
    render(
      <Snackbar message="テストメッセージ">
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByTestId('text')).not.toBeNull();
    expect(screen.queryByText('テストメッセージ')).not.toBeNull();

    expect(getStyle<ViewStyle>(screen.getByTestId('snackbarAnimatedView')).opacity).toBe(0);
    expect(screen).toMatchSnapshot('render直後');

    act(() => {
      jest.advanceTimersByTime(FADE_IN_DURATION);
    });
    expect(getStyle<ViewStyle>(screen.getByTestId('snackbarAnimatedView')).opacity).toBe(1);
    expect(screen).toMatchSnapshot('フェードイン後');

    act(() => {
      jest.advanceTimersByTime(AUTO_HIDE_DURATION + FADE_OUT_DURATION);
    });
    expect(screen.queryByTestId('snackbarAnimatedView')).toBeNull();
    expect(screen).toMatchSnapshot('フェードアウト後');
  });

  it('Snackbar表示中にpropsが更新された場合、フェードアウト後に更新後のpropsでSnackbarが表示されることを確認', async () => {
    render(
      <Snackbar message="初回">
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByText('初回')).not.toBeNull();

    screen.update(
      <Snackbar message="２回目">
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByText('初回')).not.toBeNull();

    await waitFor(() => {
      jest.advanceTimersByTime(FORCE_FADE_OUT_DURATION);

      expect(screen.queryByText('初回')).toBeNull();
      expect(screen.queryByText('２回目')).not.toBeNull();
    });
  });

  it('Snackbarの表示中に２連続propsが更新された場合、後で更新した方のpropsでSnackbarが表示されることを確認', async () => {
    render(
      <Snackbar message="初回">
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByText('初回')).not.toBeNull();

    screen.update(
      <Snackbar message="２回目">
        <ChildComponent />
      </Snackbar>,
    );

    screen.update(
      <Snackbar message="３回目">
        <ChildComponent />
      </Snackbar>,
    );

    await waitFor(() => {
      jest.advanceTimersByTime(FORCE_FADE_OUT_DURATION);

      expect(screen.queryByText('３回目')).not.toBeNull();
    });
  });

  it('Snackbarの表示後に同一のpropsを指定した場合、Snackbarが表示されないことを確認', () => {
    const props = {
      message: 'テストメッセージ',
      messageTextStyle: {color: 'white'},
      style: {backgroundColor: 'aqua'},
      positionStyle: {minHeight: 60},
      actionText: 'close',
      actionHandler: jest.fn(),
      actionTextStyle: {color: 'red'},
      autoHideDuration: 100,
      fadeInDuration: 200,
      fadeOutDuration: 300,
      forceFadeOutDuration: 400,
      timestamp: Date.now(),
    };
    render(
      <Snackbar {...props}>
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(FADE_IN_DURATION + AUTO_HIDE_DURATION + FADE_OUT_DURATION);
    });

    screen.update(
      <Snackbar {...props}>
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByText('テストメッセージ')).toBeNull();
  });

  it('Snackbarの表示後にTimestamp以外同一のpropsを指定した場合、Snackbarが表示されることを確認', () => {
    const props = {
      message: 'テストメッセージ',
      messageTextStyle: {color: 'white'},
      style: {backgroundColor: 'aqua'},
      positionStyle: {minHeight: 60},
      actionText: 'close',
      actionHandler: jest.fn(),
      actionTextStyle: {color: 'red'},
      autoHideDuration: 100,
      fadeInDuration: 200,
      fadeOutDuration: 300,
      forceFadeOutDuration: 400,
    };
    render(
      <Snackbar {...props} timestamp={Date.now()}>
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(FADE_IN_DURATION + AUTO_HIDE_DURATION + FADE_OUT_DURATION);
    });

    screen.update(
      <Snackbar {...props} timestamp={Date.now()}>
        <ChildComponent />
      </Snackbar>,
    );

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();
  });

  it('Snackbar表示中にpropsでhideを指定した場合、Snackbarが消えることを確認', async () => {
    render(
      <Snackbar message="テストメッセージ">
        <ChildComponent />
      </Snackbar>,
    );

    jest.advanceTimersByTime(FADE_IN_DURATION);
    expect(screen.queryByText('テストメッセージ')).not.toBeNull();

    screen.update(
      <Snackbar message="テストメッセージ" hide>
        <ChildComponent />
      </Snackbar>,
    );

    await waitFor(() => {
      jest.advanceTimersByTime(HIDE_FADE_OUT_DURATION);
      expect(screen.queryByText('テストメッセージ')).toBeNull();
    });
  });

  it('Snackbarに指定したpropsがrenderに反映されていることを確認', () => {
    /**
     * 下記項目は対象外
     * - autoHideDuration / fadeInDuration / fadeOutDuration / forceFadeOutDuration / hideFadeOutDuration
     *     テストコードでアニメーション時間を調整できない
     * - actionHandler
     *     setVisibleSnackbarProps()でpropsをセットした時点で、指定したモック関数ではなくなっており、追跡できない
     * - hide
     *     テスト済
     */
    render(
      <Snackbar
        message="テストメッセージ"
        messageTextStyle={{color: 'black'}}
        style={{backgroundColor: 'red'}}
        positionStyle={{bottom: 50}}
        actionText="閉じる"
        actionHandler={() => {}}
        actionTextStyle={{color: 'blue'}}>
        <ChildComponent />
      </Snackbar>,
    );

    jest.advanceTimersByTime(FADE_IN_DURATION);

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(screen.getByText('テストメッセージ')).color).toBe('black');
    expect(getStyle<ViewStyle>(screen.getByTestId('snackbarStyleView')).backgroundColor).toBe('red');
    expect(getStyle<ViewStyle>(screen.getByTestId('snackbarAnimatedView')).bottom).toBe(50);
    expect(screen.queryByText('閉じる')).not.toBeNull();
    expect(getStyle<TextStyle>(screen.getByText('閉じる')).color).toBe('blue');
  });
});
