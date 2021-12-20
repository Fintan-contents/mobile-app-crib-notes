import {render, waitFor} from '@testing-library/react-native';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React, {useEffect} from 'react';
import {Text, TextStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {WithSnackbar, useSnackbar} from './WithSnackbar';

function getStyle<T>(instance: ReactTestInstance) {
  return instance.props.style as T;
}

jest.useFakeTimers();

type UseSnackbarType = 'show' | 'showWithCloseButton' | 'hide';

const ChildComponent: React.FC<{type: UseSnackbarType}> = ({type}) => {
  const snackbar = useSnackbar();

  useEffect(() => {
    switch (type) {
      case 'show':
        snackbar.show('テストメッセージ', {messageTextStyle: {color: 'blue'}});
        break;
      case 'showWithCloseButton':
        snackbar.showWithCloseButton('テストメッセージ', {messageTextStyle: {color: 'red'}});
        break;
      case 'hide':
        snackbar.hide();
    }
  }, [snackbar, type]);

  return <Text testID="text">test</Text>;
};

describe('WithSnackbar', () => {
  it('useSnackbarのshowで、Snackbarが正常に表示されることを確認', () => {
    const renderResult = render(
      <WithSnackbar>
        <ChildComponent type="show" />
      </WithSnackbar>,
    );

    expect(renderResult.queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(renderResult.getByText('テストメッセージ')).color).toBe('blue');
    expect(renderResult.queryByText('閉じる')).toBeNull();
    expect(renderResult).toMatchSnapshot();
  });

  it('useSnackbarのshowWithCloseButtonで、ボタン付きSnackbarが正常に表示されることを確認', async () => {
    await loadMessages(new BundledMessagesLoader());

    const renderResult = render(
      <WithSnackbar>
        <ChildComponent type="showWithCloseButton" />
      </WithSnackbar>,
    );

    expect(renderResult.queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(renderResult.getByText('テストメッセージ')).color).toBe('red');
    expect(renderResult.queryByText('閉じる')).not.toBeNull();
    expect(renderResult).toMatchSnapshot();
  });

  it('useSnackbarのhideで、Snackbarが消えることを確認', async () => {
    const renderResult = render(
      <WithSnackbar>
        <ChildComponent type="show" />
      </WithSnackbar>,
    );

    renderResult.update(
      <WithSnackbar>
        <ChildComponent type="hide" />
      </WithSnackbar>,
    );

    await waitFor(() => {
      const HIDE_FADE_OUT_DURATION = 300;
      jest.advanceTimersByTime(HIDE_FADE_OUT_DURATION);
      expect(renderResult.queryByText('テストメッセージ')).toBeNull();
      expect(renderResult.queryByText('閉じる')).toBeNull();
      expect(renderResult).toMatchSnapshot();
    });
  });
});
