import {initialMsw} from 'fixtures/msw';
import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';

import {App} from './App';

type AppProperties = {
  [key: string]: any;
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
