import {act, render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import React, {useEffect} from 'react';
import {Text, TextStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Snackbar} from './Snackbar';

// If advancing a timer changes the state of a component, the timer must be run within an act.
// However, since act is `Thenable`, ESLint will issue a warning if you do not do something like await.
// For convenience, disable the relevant rule in this file.
/* eslint-disable @typescript-eslint/no-floating-promises */

function getStyle<T>(instance: ReactTestInstance) {
  return instance.props.style as T;
}

jest.useFakeTimers();

type UseSnackbarType = 'show' | 'showWithCloseButton' | 'hide';

const ChildComponent: React.FC<{type: UseSnackbarType}> = ({type}) => {
  useEffect(() => {
    switch (type) {
      case 'show':
        Snackbar.show('テストメッセージ', {messageTextStyle: {color: 'blue'}});
        break;
      case 'showWithCloseButton':
        Snackbar.showWithCloseButton('テストメッセージ', {messageTextStyle: {color: 'red'}});
        break;
      case 'hide':
        Snackbar.hide();
    }
  }, [type]);

  return <Text testID="text">test</Text>;
};

describe('Snackbar', () => {
  it('Snackbarのshowで、Snackbarが正常に表示されることを確認', () => {
    render(
      <>
        <ChildComponent type="show" />
        <Snackbar.Component />
      </>,
    );

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(screen.getByText('テストメッセージ')).color).toBe('blue');
    expect(screen.queryByText('閉じる')).toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('SnackbarのshowWithCloseButtonで、ボタン付きSnackbarが正常に表示されることを確認', async () => {
    await loadMessages(new BundledMessagesLoader());

    render(
      <>
        <ChildComponent type="showWithCloseButton" />
        <Snackbar.Component />
      </>,
    );

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(screen.getByText('テストメッセージ')).color).toBe('red');
    expect(screen.queryByText('閉じる')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('Snackbarのhideで、Snackbarが消えることを確認', () => {
    render(
      <>
        <ChildComponent type="show" />
        <Snackbar.Component />
      </>,
    );

    screen.update(
      <>
        <ChildComponent type="hide" />
        <Snackbar.Component />
      </>,
    );

    const HIDE_FADE_OUT_DURATION = 300;
    act(() => {
      jest.advanceTimersByTime(HIDE_FADE_OUT_DURATION);
    });
    expect(screen.queryByText('テストメッセージ')).toBeNull();
    expect(screen.queryByText('閉じる')).toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
