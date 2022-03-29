import {fireEvent, render} from '@testing-library/react-native';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';

import {WebView} from './WebView';

const mockedShowWithCloseButton = jest.fn();

jest.mock('components/overlay', () => ({
  useSnackbar: () => ({
    showWithCloseButton: mockedShowWithCloseButton,
  }),
}));

describe('WebView', () => {
  it('WebViewが正常にrenderできることを確認', () => {
    const renderResult = render(<WebView testID="webview" source={{uri: 'https://localhost/'}} />);
    expect(renderResult.queryByTestId('webview')).not.toBeNull();
    expect(renderResult).toMatchSnapshot();
  });

  it('WebViewのスクロールイベントが適切なタイミングで発行されることを確認', () => {
    const handleOnScroll = jest.fn();
    const handleOnScrollEnd = jest.fn();
    const handleOnScrollEndOnce = jest.fn();

    const layoutMeasurement = {height: 600};
    const contentSize = {height: 2000};

    const webview = render(
      <WebView
        source={{uri: 'https://localhost/'}}
        onScroll={handleOnScroll}
        onScrollEnd={handleOnScrollEnd}
        onScrollEndOnce={handleOnScrollEndOnce}
        testID="webview"
      />,
    ).getByTestId('webview');

    expect(webview).not.toBeNull();

    // onLoadEndイベント発生前はonScrollEndイベントを発行しない
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(1);
    expect(handleOnScrollEnd).not.toHaveBeenCalled();
    expect(handleOnScrollEndOnce).not.toHaveBeenCalled();

    fireEvent(webview, 'onLoadEnd');

    // スクロール終端判定に対して、0.1 未達
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1398.9}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(2);
    expect(handleOnScrollEnd).not.toHaveBeenCalled();
    expect(handleOnScrollEndOnce).not.toHaveBeenCalled();

    // スクロール終端と判定（１回目）
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1399}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(3);
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(1);
    expect(handleOnScrollEndOnce).toHaveBeenCalledTimes(1);

    // スクロール終端と判定（２回目のため、onScrollEndOnceイベントは発生しない）
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(4);
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(2);
    expect(handleOnScrollEndOnce).toHaveBeenCalledTimes(1);
  });

  it('WebViewにonScrollEndのみ指定して正常にイベントが発行されることを確認', () => {
    const handleOnScrollEnd = jest.fn();

    const layoutMeasurement = {height: 600};
    const contentSize = {height: 2000};

    const webview = render(
      <WebView source={{uri: 'https://localhost/'}} onScrollEnd={handleOnScrollEnd} testID="webview" />,
    ).getByTestId('webview');

    fireEvent(webview, 'onLoadEnd');

    // スクロール終端判定に対して、0.1 未達
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1398.9}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEnd).not.toHaveBeenCalled();

    // スクロール終端と判定
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1399}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(1);
  });

  it('WebViewにonScrollEndOnceのみ指定して正常にイベントが発行されることを確認', () => {
    const handleOnScrollEndOnce = jest.fn();

    const layoutMeasurement = {height: 600};
    const contentSize = {height: 2000};

    const webview = render(
      <WebView source={{uri: 'https://localhost/'}} onScrollEndOnce={handleOnScrollEndOnce} testID="webview" />,
    ).getByTestId('webview');

    fireEvent(webview, 'onLoadEnd');

    // スクロール終端判定に対して、0.1 未達
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1398.9}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEndOnce).not.toHaveBeenCalled();

    // スクロール終端と判定
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1399}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEndOnce).toHaveBeenCalledTimes(1);
  });

  it('WebViewのonErrorイベントで、親からonErrorを指定してない場合はSnackbar表示関数をコールすることを確認', async () => {
    await loadMessages(new BundledMessagesLoader());

    const webview = render(<WebView source={{uri: 'https://localhost/'}} testID="webview" />).getByTestId('webview');

    fireEvent(webview, 'onError');
    expect(mockedShowWithCloseButton).toHaveBeenCalledTimes(1);
  });

  it('WebViewのonErrorイベントで、親からonErrorを指定した場合は親へイベント通知することを確認', () => {
    const handleOnError = jest.fn();

    const webview = render(
      <WebView source={{uri: 'https://localhost/'}} onError={handleOnError} testID="webview" />,
    ).getByTestId('webview');

    fireEvent(webview, 'onError');
    expect(handleOnError).toHaveBeenCalledTimes(1);
  });
});
