import {m} from 'bases/message/Message';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {WebView as RNWebView, WebViewProps} from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
  WebViewProgressEvent,
  WebViewScrollEvent,
  WebViewSource,
  WebViewSourceUri,
} from 'react-native-webview/lib/WebViewTypes';

import {Snackbar} from '../snackbar/Snackbar';

type Props = WebViewProps & {
  /**
   * Error message when React Native WebView original onError is raised.
   * If not specified, the default message is displayed.
   * If onError is specified by the parent, this message will not be displayed.
   */
  errorMessage?: string;
  /**
   * End-of-Scroll Event.
   * Occurs every time the web page scrolls to the bottom of the content.
   */
  onScrollEnd?: () => void;
  /**
   * End-of-scroll event that occurs only once.
   * Occurs only once when the web page scroll reaches the bottom of the content.
   */
  onScrollEndOnce?: () => void;
};

const isUriSource = (source?: WebViewSource): source is WebViewSourceUri => {
  return source !== undefined && 'uri' in source;
};

/**
 * WebViewでページを表示するコンポーネント。
 * react-native-webviewで提供されるイベントに、以下の2つのイベントを追加しています。
 * - onScrollEnd: スクロールがページの終端に移動する度に発生
 * - onScrollEndOnce: スクロールがページの終端に移動した最初の1回のみ発生
 *
 * 動作確認中に発生した以下の事象に対応しています。
 * - 発生OS
 *   - iOS
 * - 発生事象
 *   - URIが変わった直後にonLoadStart->onLoadEnd->onScroll->onScrollの順で発火し、1回目のonScrollで渡されるcontentOffsetが、URIが変わる前のページのcontentOffsetになっている。
 *     そのため、URIが変わる前のページで終端までスクロールしていた場合、1回目のonScrollで終端までスクロールされていると判定されてしまい、onScrollEnd/onScrollOnceイベントが発生してしまう。
 *     なお、2回目のonScrollで渡されるcontentOffsetは0になっている
 * - 対応方法
 *   - 1回目のonScrollでonScrollEnd/onScrollEndOnceイベントが発生しないように、URIが変わったかどうかを状態として持ち、
 *     URIが変わった直後の、オフセットが0ではないスクロールイベントでは、onScrollEnd/onScrollEndOnceは発生させない。
 *
 * - 発生OS
 *   - Android
 * - 発生事象
 *   - onLoadEndがページのロードが完了する前に呼び出される不具合がある。（https://github.com/react-native-webview/react-native-webview/issues/2345）
 * - 対応方法
 *   - onLoadProgressイベント発生時に、progressが1になったらページロードが完了したと判定する。
 *
 * なお、本コンポーネントには以下の制約事項があります。
 * - 対象OS
 *   - Android
 * - 制約事項
 *   - スクロールが存在しないページでは、onScrollEnd/onScrollEndOnceイベントは発生しません。
 *
 */
export const WebView = React.forwardRef<RNWebView, Props>(function WebView(props, ref) {
  const [loadEnd, setLoadEnd] = useState(false);
  const [scrollEndCalled, setScrollEndCalled] = useState(false);
  const {onScrollEnd, onScrollEndOnce, onLoadStart, onLoadProgress, onError, errorMessage, ...webViewProps} = props;

  const [isUriChanged, setIsUriChanged] = useState(false);
  const uri = isUriSource(props.source) ? props.source.uri : undefined;
  useEffect(() => {
    setIsUriChanged(true);
  }, [uri]);

  // uriが変わった時にWebViewがページを再ロードした場合の対応
  // なお、WebViewで表示しているページ内リンクでページ遷移した場合は、onLoadStartイベントは再発行されません
  const handleLoadStart = useCallback(
    (event: WebViewNavigationEvent) => {
      setLoadEnd(false);
      setScrollEndCalled(false);
      onLoadStart?.(event);
    },
    [onLoadStart],
  );

  const handleScroll = useCallback(
    (event: WebViewScrollEvent) => {
      if (isUriChanged && event.nativeEvent.contentOffset.y > 0) {
        // URLが変わった直後の、オフセットが0ではないスクロールイベントでは、onScrollEndは発生させない。
        setIsUriChanged(false);
      } else if ((onScrollEnd || onScrollEndOnce) && loadEnd) {
        // 小数点の誤差があるため、1px分は丸め誤差として扱う
        const scrollY = event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height + 1;
        if (event.nativeEvent.contentSize.height <= scrollY) {
          if (!scrollEndCalled) {
            setScrollEndCalled(true);
            onScrollEndOnce?.();
          }
          onScrollEnd?.();
        }
      }

      props.onScroll?.(event);
    },
    [isUriChanged, loadEnd, scrollEndCalled, onScrollEnd, onScrollEndOnce, props],
  );

  const handleLoadProgress = useCallback(
    (event: WebViewProgressEvent) => {
      if (event.nativeEvent.progress === 1) {
        setLoadEnd(true);
      } else {
        setLoadEnd(false);
      }
      onLoadProgress?.(event);
    },
    [onLoadProgress],
  );

  const handleError = useCallback(
    (event: WebViewErrorEvent) => {
      if (onError) {
        onError(event);
      } else {
        Snackbar.showWithCloseButton(errorMessage ?? m('app.webview.onError'));
      }
    },
    [errorMessage, onError],
  );

  return (
    <RNWebView
      {...webViewProps}
      style={styles.container}
      onScroll={handleScroll}
      onLoadStart={handleLoadStart}
      onLoadProgress={handleLoadProgress}
      onError={handleError}
      ref={ref}
    />
  );
});

WebView.defaultProps = {
  // androidLayerType：WebViewの再レンダー時にクラッシュする可能性がある問題の回避策
  // https://github.com/react-native-webview/react-native-webview/issues/1915
  androidLayerType: 'software',
  startInLoadingState: true,
  // iOSでスクロールしたときに滑らかにスクロールするようにしておく。
  // https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#decelerationrate
  decelerationRate: 'normal',
  renderLoading: () => <ActivityIndicator style={styles.indicator} size="large" color="#0000ff" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
