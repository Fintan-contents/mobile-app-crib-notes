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
    /*
      eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-var-requires --
      iOS以外の場合にreact-native-screensのFullWindowOverlayを使用すると警告が出るので、iOSの場合のみ使用します。
      requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
     */
    const RNSFullWindowOverlay = require('react-native-screens').FullWindowOverlay as typeof View;
    return <RNSFullWindowOverlay testID="FullWindowOverlay">{props.children}</RNSFullWindowOverlay>;
  }
  return <>{props.children}</>;
};
