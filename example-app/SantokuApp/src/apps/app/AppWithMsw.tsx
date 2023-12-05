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

import {initialMsw} from 'fixtures/msw';
import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';

import {App} from './App';

type AppProperties = {
  [key: string]: unknown;
};

export const AppWithMsw = ({isHeadless}: AppProperties) => {
  const [isInitializedMsw, setIsInitializedMsw] = useState(false);

  useEffect(() => {
    if (!(Platform.OS === 'ios' && isHeadless)) {
      // HTTP通信をMSWでインターセプトしてモックを返します。
      initialMsw()
        .then(() => setIsInitializedMsw(true))
        .catch(console.error);
    }
  }, [isHeadless]);

  // isHeadlessを取得するためにはAppDelegate.mに変更が必要
  // https://rnfirebase.io/messaging/usage#background-application-state
  if (Platform.OS === 'ios' && isHeadless) {
    // iOSでバックグラウンド時にリモート通知を受信するとアプリケーションがサイレントに起動される
    // この時にはReact Componentを返さないようにし、useEffectなどの処理がバックグラウンドで走ることを防止する
    // Androidの場合はApp自体が読み込まれないので追加対応は必要ない
    return null;
  }

  if (!isInitializedMsw) {
    return null;
  }

  return <App />;
};
