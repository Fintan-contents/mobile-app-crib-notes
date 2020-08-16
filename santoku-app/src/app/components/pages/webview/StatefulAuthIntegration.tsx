import React, { useCallback, useState } from 'react';

import { AppConfig } from '../../../AppConfig';
import { log } from '../../../../framework/logging';
import WebAppView from '../../parts/WebAppView';
import StatefulLogin from '../../parts/StatefulLoginForm';
import { Container, Description, Text, TextButton, Title } from '../../basics';
import { useStatefulAuthnService } from '../../../backend/StatefulAuthnService';

const removeLogoutButtonInWebView = `
  const array=Array.from(document.querySelectorAll('.headerRightPane span.headerElement'));
  const logoutArea = array.find(a => {
    const elms = a.getElementsByTagName('a')
    return elms.length === 1
  });
  logoutArea.remove();
`;

const StatefulAuthIntegration: React.FC = () => {
  const { sessionId, isAuthenticated, login, logout } = useStatefulAuthnService();

  const [showWebView, setShowWebView] = useState(false);

  const open = useCallback(() => {
    if (!sessionId) {
      return;
    }

    setShowWebView(true);
  }, [sessionId]);

  const close = useCallback(() => {
    setShowWebView(false);
  }, []);

  if (!isAuthenticated) {
    return <StatefulLogin login={login} />;
  }

  if (!showWebView) {
    return (
      <Container>
        <Title>取得したセッションID</Title>
        <Text>{sessionId?.value}</Text>
        <Description>
          モバイルアプリからWebアプリのログインAPIを呼び出してセッションIDの取得に成功しました。セッションIDはCookieに保存されています。
          {'\n\n'}
          今度は、以下のボタンをタップしてWebViewを開いて見てください。{'\n\n'}
          WebアプリはログインAPIと同じドメインなので、ログインAPIと同じCookieが使われます。{'\n\n'}
          このようにして、モバイルアプリと同じユーザーでログインした状態でWebアプリの画面が開けます。
        </Description>
        <TextButton onPress={open} value={'WebViewを開く'} />
        <TextButton onPress={logout} value={'ログアウト'} />
      </Container>
    );
  }

  // sharedCookiesEnabledはiOSでネイティブとWebView側でCookieを共有するために必要
  return (
    <WebAppView
      close={close}
      closeLabel="閉じる"
      source={{
        uri: AppConfig.WEB_APP_URI,
      }}
      sharedCookiesEnabled={true}
      injectedJavaScript={removeLogoutButtonInWebView}
      // iOSで、injectedJavaScriptで注入したJSを動かすために必要なプロパティ。
      // refs: https://github.com/react-native-community/react-native-webview/issues/1291#issuecomment-609103010
      // このサンプルでは、注入したJSでイベントを発生させていないので、onMessageが呼ばれることもない。
      onMessage={(event) => log.info('Received a message. data=[%s]', event.nativeEvent.data)}
    />
  );
};

export default StatefulAuthIntegration;
