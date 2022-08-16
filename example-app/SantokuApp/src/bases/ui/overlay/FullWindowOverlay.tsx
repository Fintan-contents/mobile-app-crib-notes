import React from 'react';
import {Platform, View} from 'react-native';

/**
 * [使用時の注意点]
 * NavigationContainerの中でFullWindowOverlayを使用すると、アンマウント時にアプリがクラッシュします。
 * https://github.com/software-mansion/react-native-screens/pull/1375
 * この不具合への対応は、React Native Screens 3.14.0でリリースされています。
 */
export const FullWindowOverlay = (props: {children: React.ReactNode}) => {
  if (Platform.OS === 'ios') {
    // iOS以外の場合にreact-native-screensのFullWindowOverlayを使用すると警告が出るので、iOSの場合のみ使用します。
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const RNSFullWindowOverlay = require('react-native-screens').FullWindowOverlay as typeof View;
    return <RNSFullWindowOverlay testID="FullWindowOverlay">{props.children}</RNSFullWindowOverlay>;
  }
  return <>{props.children}</>;
};
