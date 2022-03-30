import React from 'react';
import {Platform, View} from 'react-native';

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
