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

import {act, render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import React, {useEffect} from 'react';
import {Text, TextStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Snackbar} from './Snackbar';

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

  it('Snackbarのhideで、Snackbarが消えることを確認', async () => {
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

    await act(() => {
      jest.advanceTimersByTime(HIDE_FADE_OUT_DURATION);
    });
    expect(screen.queryByText('テストメッセージ')).toBeNull();
    expect(screen.queryByText('閉じる')).toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
