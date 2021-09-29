import React, {useCallback, useState} from 'react';
import {Spinner} from 'native-base';

import {AppConfig} from '../../../AppConfig';
import {log} from '../../../../framework/logging';
import WebAppView from '../../parts/WebAppView';
import StatefulLogin from '../../parts/StatefulLoginForm';
import {Container, Description, Text, TextButton, Title} from '../../basics';
import WithStatefulLoginContext from '../../parts/WithStatefulLoginContext';
import {useStatefulLoginContext} from '../../../context/StatefulLoginContext';
import type {LoginApiAdapter, LogoutApiAdapter} from '../../../context/StatefulLoginContext';
import type {LoginCredential} from '../../../backend/StatefulAuthnService';

const removeLogoutButtonInWebView = `
  const array=Array.from(document.querySelectorAll('.headerRightPane span.headerElement'));
  const logoutArea = array.find(a => {
    const elms = a.getElementsByTagName('a')
    return elms.length === 1
  });
  logoutArea.remove();
`;

const StatefulAuthIntegrationInner: React.FC = () => {
  const {sessionId, isAuthenticated, login: loginContextLogin, logout: loginContextLogout} = useStatefulLoginContext();

  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback<LoginApiAdapter>(
    async (credential: LoginCredential) => {
      setLoading(true);
      await loginContextLogin(credential);
      setLoading(false);
    },
    [loginContextLogin],
  );

  const logout = useCallback<LogoutApiAdapter>(async () => {
    setLoading(true);
    await loginContextLogout();
    setLoading(false);
  }, [loginContextLogout]);

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
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Title>取得したセッションID</Title>
            <Text>{sessionId?.value}</Text>
            <Description>
              モバイルアプリからWebアプリのログインAPIを呼び出してセッションIDの取得に成功しました。セッションIDはCookieに保存されています。{'\n\n'}
              今度は、以下のボタンをタップしてWebViewを開いて見てください。{'\n\n'}
              WebアプリはログインAPIと同じドメインなので、ログインAPIと同じCookieが使われます。{'\n\n'}
              このようにして、モバイルアプリと同じユーザーでログインした状態でWebアプリの画面が開けます。
            </Description>
            <TextButton onPress={open} value={'WebViewを開く'} />
            <TextButton onPress={logout} value={'ログアウト'} />
          </>
        )}
      </Container>
    );
  }

  return (
    <WebAppView
      close={close}
      closeLabel="閉じる"
      source={{
        uri: AppConfig.WEB_APP_URI,
      }}
      // sharedCookiesEnabledはiOSでネイティブとWebView側でCookieを共有するために必要
      sharedCookiesEnabled={true}
      injectedJavaScript={removeLogoutButtonInWebView}
      // iOSで、injectedJavaScriptで注入したJSを動かすために必要なプロパティ。
      // refs: https://github.com/react-native-community/react-native-webview/issues/1291#issuecomment-609103010
      // このサンプルでは、注入したJSでイベントを発生させていないので、onMessageが呼ばれることもない。
      onMessage={(event) => log.info('Received a message. data=[%s]', event.nativeEvent.data)}
    />
  );
};

const StatefulAuthIntegration: React.FC = () => {
  return (
    <WithStatefulLoginContext>
      <StatefulAuthIntegrationInner />
    </WithStatefulLoginContext>
  );
};

export default StatefulAuthIntegration;
