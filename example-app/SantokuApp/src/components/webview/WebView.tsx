import {useSnackbar} from 'components/overlay';
import {m} from 'framework';
import React, {useCallback, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {WebView as RNWebView, WebViewProps} from 'react-native-webview';
import {WebViewErrorEvent, WebViewNavigationEvent, WebViewScrollEvent} from 'react-native-webview/lib/WebViewTypes';

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

export const WebView = React.forwardRef<RNWebView, Props>(function WebView(props, ref) {
  const [loadEnd, setLoadEnd] = useState(false);
  const [scrollEndCalled, setScrollEndCalled] = useState(false);
  const {onScrollEnd, onScrollEndOnce, ...webViewProps} = props;
  const snackbar = useSnackbar();

  const handleScroll = useCallback(
    (event: WebViewScrollEvent) => {
      if ((onScrollEnd || onScrollEndOnce) && loadEnd) {
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
    [loadEnd, scrollEndCalled, onScrollEnd, onScrollEndOnce, props],
  );

  const handleLoadEnd = useCallback(
    (event: WebViewNavigationEvent | WebViewErrorEvent) => {
      setLoadEnd(true);
      props.onLoadEnd?.(event);
    },
    [props],
  );

  const handleError = useCallback(
    (event: WebViewErrorEvent) => {
      if (props.onError) {
        props.onError(event);
      } else {
        snackbar.showWithCloseButton(props.errorMessage ?? m('app.webview.onError'));
      }
    },
    [props, snackbar],
  );

  return (
    <RNWebView
      {...webViewProps}
      style={styles.container}
      onScroll={handleScroll}
      onLoadEnd={handleLoadEnd}
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
