import {act, render, screen} from '@testing-library/react-native';
import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {SnackbarComponent} from './SnackbarComponent';

// If advancing a timer changes the state of a component, the timer must be run within an act.
// However, since act is `Thenable`, ESLint will issue a warning if you do not do something like await.
// For convenience, disable the relevant rule in this file.
/* eslint-disable @typescript-eslint/no-floating-promises */

jest.useFakeTimers('modern');

function getStyle<T>(instance: ReactTestInstance) {
  return instance.props.style as T;
}

const AUTO_HIDE_DURATION = 4000;
const FADE_IN_DURATION = 1000;
const FADE_OUT_DURATION = 1000;
const FORCE_FADE_OUT_DURATION = 300;
const HIDE_FADE_OUT_DURATION = 300;

describe('SnackbarComponent', () => {
  it('SnackbarComponentが正常にrenderできることを確認', () => {
    render(<SnackbarComponent message="テストメッセージ" />);

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

  it('SnackbarComponent表示中にpropsが更新された場合、フェードアウト後に更新後のpropsでSnackbarComponentが表示されることを確認', () => {
    render(<SnackbarComponent message="初回" />);

    expect(screen.queryByText('初回')).not.toBeNull();

    screen.update(<SnackbarComponent message="２回目" />);

    expect(screen.queryByText('初回')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(FORCE_FADE_OUT_DURATION);
    });

    expect(screen.queryByText('初回')).toBeNull();
    expect(screen.queryByText('２回目')).not.toBeNull();
  });

  it('SnackbarComponentの表示中に２連続propsが更新された場合、後で更新した方のpropsでSnackbarComponentが表示されることを確認', () => {
    render(<SnackbarComponent message="初回" />);

    expect(screen.queryByText('初回')).not.toBeNull();

    screen.update(<SnackbarComponent message="２回目" />);

    screen.update(<SnackbarComponent message="３回目" />);

    act(() => {
      jest.advanceTimersByTime(FORCE_FADE_OUT_DURATION);
    });

    expect(screen.queryByText('３回目')).not.toBeNull();
  });

  it('SnackbarComponentの表示後に同一のpropsを指定した場合、SnackbarComponentが表示されないことを確認', () => {
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
    render(<SnackbarComponent {...props} />);

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(FADE_IN_DURATION + AUTO_HIDE_DURATION + FADE_OUT_DURATION);
    });

    screen.update(<SnackbarComponent {...props} />);

    expect(screen.queryByText('テストメッセージ')).toBeNull();
  });

  it('SnackbarComponentの表示後にTimestamp以外同一のpropsを指定した場合、SnackbarComponentが表示されることを確認', () => {
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
    render(<SnackbarComponent {...props} timestamp={Date.now()} />);

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(FADE_IN_DURATION + AUTO_HIDE_DURATION + FADE_OUT_DURATION);
    });

    screen.update(<SnackbarComponent {...props} timestamp={Date.now()} />);

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();
  });

  it('SnackbarComponent表示中にpropsでhideを指定した場合、SnackbarComponentが消えることを確認', () => {
    render(<SnackbarComponent message="テストメッセージ" />);

    jest.advanceTimersByTime(FADE_IN_DURATION);
    expect(screen.queryByText('テストメッセージ')).not.toBeNull();

    screen.update(<SnackbarComponent message="テストメッセージ" hide />);

    act(() => {
      jest.advanceTimersByTime(HIDE_FADE_OUT_DURATION);
    });

    expect(screen.queryByText('テストメッセージ')).toBeNull();
  });

  it('SnackbarComponentに指定したpropsがrenderに反映されていることを確認', () => {
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
      <SnackbarComponent
        message="テストメッセージ"
        messageTextStyle={{color: 'black'}}
        style={{backgroundColor: 'red'}}
        positionStyle={{bottom: 50}}
        actionText="閉じる"
        actionHandler={() => {}}
        actionTextStyle={{color: 'blue'}}
      />,
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
