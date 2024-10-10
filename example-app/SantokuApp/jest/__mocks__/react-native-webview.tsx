import {forwardRef, useImperativeHandle} from 'react';
import {View} from 'react-native';
import {type WebView as RNWebView, WebViewProps} from 'react-native-webview';

const refOverride = {
  goBack: jest.fn(),
  goForward: jest.fn(),
  reload: jest.fn(),
  stopLoading: jest.fn(),
  injectJavaScript: jest.fn(),
  requestFocus: jest.fn(),
  postMessage: jest.fn(),
  context: jest.fn(),
  setState: jest.fn(),
  forceUpdate: jest.fn(),
  render: jest.fn(),
  state: jest.fn(),
};
const MockWebView = forwardRef<RNWebView, WebViewProps>((props, ref) => {
  useImperativeHandle(ref, () => ({...refOverride, props, refs: {}}), [props]);
  return <View {...props} />;
});

export const WebView = MockWebView;
export default MockWebView;
