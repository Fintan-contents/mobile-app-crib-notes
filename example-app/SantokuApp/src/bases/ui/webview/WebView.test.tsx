import {fireEvent, render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import React from 'react';

import {WebView} from './WebView';
import {Snackbar} from '../snackbar/Snackbar';

describe('WebView', () => {
  it('WebViewが正常にrenderできることを確認', () => {
    render(<WebView testID="webview" source={{uri: 'https://localhost/'}} />);
    expect(screen.queryByTestId('webview')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('WebViewのスクロールイベントが適切なタイミングで発行されることを確認', () => {
    const handleOnLoadStart = jest.fn();
    const handleOnScroll = jest.fn();
    const handleOnScrollEnd = jest.fn();
    const handleOnScrollEndOnce = jest.fn();

    const layoutMeasurement = {height: 600};
    const contentSize = {height: 2000};

    render(
      <WebView
        source={{uri: 'https://localhost/'}}
        onLoadStart={handleOnLoadStart}
        onScroll={handleOnScroll}
        onScrollEnd={handleOnScrollEnd}
        onScrollEndOnce={handleOnScrollEndOnce}
        testID="webview"
      />,
    );

    const webview = screen.getByTestId('webview');

    expect(webview).not.toBeNull();

    // onLoadStartイベント発生前
    expect(handleOnLoadStart).not.toHaveBeenCalled();
    fireEvent(webview, 'onLoadStart');
    // onLoadStartイベント発生後
    expect(handleOnLoadStart).toHaveBeenCalled();

    // ロード完了前はonScrollEndイベントを発行しない
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(1);
    expect(handleOnScrollEnd).not.toHaveBeenCalled();
    expect(handleOnScrollEndOnce).not.toHaveBeenCalled();

    // onLoadProgressイベントをprogress:1で発生させる
    fireEvent(webview, 'onLoadProgress', {nativeEvent: {progress: 1}});

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

    screen.update(
      <WebView
        source={{uri: 'https://localhost2/'}}
        onLoadStart={handleOnLoadStart}
        onScroll={handleOnScroll}
        onScrollEnd={handleOnScrollEnd}
        onScrollEndOnce={handleOnScrollEndOnce}
        testID="webview"
      />,
    );
    // uriが変わって再度onLoadStartイベントを発生させる
    fireEvent(webview, 'onLoadStart');
    // ロード完了前にスクロールイベントを発生させる
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1399}, layoutMeasurement, contentSize}});
    // ロード完了前はonScrollEndイベントが発生しないこと
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(2);
    // onLoadProgressイベントをprogress:1で発生させる
    fireEvent(webview, 'onLoadProgress', {nativeEvent: {progress: 1}});
    // ロード完了後にスクロール終端と判定
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1399}, layoutMeasurement, contentSize}});
    // onScrollEndイベントが発生
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(3);
    // ページが再ロードされたため、onScrollEndOnceイベントが発生
    expect(handleOnScrollEndOnce).toHaveBeenCalledTimes(2);

    screen.update(
      <WebView
        source={{uri: 'https://localhost3/'}}
        onLoadStart={handleOnLoadStart}
        onScroll={handleOnScroll}
        onScrollEnd={handleOnScrollEnd}
        onScrollEndOnce={handleOnScrollEndOnce}
        testID="webview"
      />,
    );
    // uriが変わって再度onLoadStartイベントを発生させる
    fireEvent(webview, 'onLoadStart');
    // onLoadProgressイベントをprogress:1で発生させる
    fireEvent(webview, 'onLoadProgress', {nativeEvent: {progress: 1}});
    // ロード完了後に、末尾までスクロールするイベントを発生させる
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    // URL変更直後の、オフセット0以外のスクロールイベントはonScrollEndイベントを発生させないこと。
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(3);
    // もう一度スクロールイベントを発生させる。
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    // onScrollEndイベントが発生
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(4);

    const contentSizeShort = {height: 200};
    screen.update(
      <WebView
        source={{uri: 'https://localhost4/'}}
        onLoadStart={handleOnLoadStart}
        onScroll={handleOnScroll}
        onScrollEnd={handleOnScrollEnd}
        onScrollEndOnce={handleOnScrollEndOnce}
        testID="webview"
      />,
    );
    // uriが変わって再度onLoadStartを発生させる
    fireEvent(webview, 'onLoadStart');
    // onLoadProgressイベントをprogress:1で発生させる
    fireEvent(webview, 'onLoadProgress', {nativeEvent: {progress: 1}});
    // ロード完了後に、オフセット0のスクロールするイベントを発生させる
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 0}, layoutMeasurement, contentSize: contentSizeShort}});
    // URL変更直後でも、オフセット0のスクロールイベントで終端まで表示されていればonScrollEndイベントが発生する
    expect(handleOnScrollEnd).toHaveBeenCalledTimes(5);
  });

  it('WebViewにonScrollEndのみ指定して正常にイベントが発行されることを確認', () => {
    const handleOnScrollEnd = jest.fn();

    const layoutMeasurement = {height: 600};
    const contentSize = {height: 2000};

    render(<WebView source={{uri: 'https://localhost/'}} onScrollEnd={handleOnScrollEnd} testID="webview" />);
    const webview = screen.getByTestId('webview');

    // ロード完了前のスクロールイベント
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEnd).not.toHaveBeenCalled();

    // onLoadProgressイベントをprogress:1で発生させる
    fireEvent(webview, 'onLoadProgress', {nativeEvent: {progress: 1}});

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

    render(<WebView source={{uri: 'https://localhost/'}} onScrollEndOnce={handleOnScrollEndOnce} testID="webview" />);
    const webview = screen.getByTestId('webview');

    // ロード完了前のスクロールイベント
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEndOnce).not.toHaveBeenCalled();

    // onLoadProgressイベントをprogress:1で発生させる
    fireEvent(webview, 'onLoadProgress', {nativeEvent: {progress: 1}});

    // スクロール終端判定に対して、0.1 未達
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1398.9}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEndOnce).not.toHaveBeenCalled();

    // スクロール終端と判定
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1399}, layoutMeasurement, contentSize}});
    expect(handleOnScrollEndOnce).toHaveBeenCalledTimes(1);
  });

  it('WebViewにonScrollのみ指定して正常にイベントが発行されることを確認', () => {
    const handleOnScroll = jest.fn();

    const layoutMeasurement = {height: 600};
    const contentSize = {height: 2000};

    render(<WebView source={{uri: 'https://localhost/'}} onScroll={handleOnScroll} testID="webview" />);
    const webview = screen.getByTestId('webview');

    // ロード完了前のスクロールイベント
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1400}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(1);

    // onLoadProgressイベントをprogress:1で発生させる
    fireEvent(webview, 'onLoadProgress', {nativeEvent: {progress: 1}});

    // スクロール終端判定に対して、0.1 未達
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1398.9}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(2);

    // スクロール終端と判定
    fireEvent.scroll(webview, {nativeEvent: {contentOffset: {y: 1399}, layoutMeasurement, contentSize}});
    expect(handleOnScroll).toHaveBeenCalledTimes(3);
  });

  it('WebViewのonErrorイベントで、親からonErrorを指定してない場合はSnackbar表示関数をコールすることを確認', async () => {
    const spySnackbar = jest.spyOn(Snackbar, 'showWithCloseButton').mockImplementation(() => {});
    await loadMessages(new BundledMessagesLoader());

    render(<WebView source={{uri: 'https://localhost/'}} testID="webview" />);
    const webview = screen.getByTestId('webview');

    fireEvent(webview, 'onError');
    expect(spySnackbar).toHaveBeenCalledTimes(1);
  });

  it('WebViewのonErrorイベントで、親からonErrorを指定した場合は親へイベント通知することを確認', () => {
    const handleOnError = jest.fn();

    render(<WebView source={{uri: 'https://localhost/'}} onError={handleOnError} testID="webview" />);
    const webview = screen.getByTestId('webview');

    fireEvent(webview, 'onError');
    expect(handleOnError).toHaveBeenCalledTimes(1);
  });

  it('WebViewSourceHtmlでも正常にレンダリングされること', () => {
    const handleOnError = jest.fn();

    render(<WebView source={{html: '<h1>test</h1>'}} onError={handleOnError} testID="webview" />);
    expect(screen.queryByTestId('webview')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
