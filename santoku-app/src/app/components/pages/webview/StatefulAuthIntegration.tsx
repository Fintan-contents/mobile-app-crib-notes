import React, { useCallback, useState } from 'react';

import type { Cookie } from '@react-native-community/cookies';
import { AppConfig } from '../../../AppConfig';
import WebAppView from '../../parts/WebAppView';
import StatefulLogin from '../../parts/StatefulLoginForm';
import { Container, Description, Text, TextButton, Title } from '../../basics';
import { useStatefulAuthnService } from '../../../backend/StatefulAuthnService';

const StatefulAuthIntegration: React.FC = () => {
  const { sessionId, isAuthenticated, login, logout } = useStatefulAuthnService();

  const [sessionIdForWebView, setSessionIdForWebView] = useState<Cookie | null>(null);
  const [showWebView, setShowWebView] = useState(false);

  const open = useCallback(() => {
    if (!sessionId) {
      return;
    }

    setSessionIdForWebView(sessionId);
    setShowWebView(true);
  }, [sessionId]);

  const close = useCallback(() => {
    setShowWebView(false);
  }, []);

  if (!isAuthenticated) {
    return <StatefulLogin login={login} />;
  }

  if (!showWebView || !sessionIdForWebView) {
    return (
      <Container>
        <Title>取得したセッションID(ネイティブ用)</Title>
        <Text>{sessionId?.value}</Text>
        <Description>
          モバイルアプリケーションから既存Web資産のログインAPIを呼び出してセッションIDの取得に成功しました。{'\n\n'}
          今度は、以下のボタンをタップしてWebViewを開いて見てください。{'\n\n'}
          取得したセッションIDをWebViewに渡して開きます。{'\n\n'}
          そうすることでネイティブ側でログインすればWebView側でもログインした状態で認証が必要な画面が開けます。
        </Description>
        <TextButton onPress={open} value={'WebViewを開く'} />
        <TextButton onPress={logout} value={'ログアウト'} />
      </Container>
    );
  }

  return (
    <WebAppView
      close={close}
      closeLabel="閉じる"
      source={{
        uri: AppConfig.WEB_APP_URI,
        headers: {
          Cookie: `${sessionIdForWebView.name}=${sessionIdForWebView.value}`,
        },
      }}
      sharedCookiesEnabled={true}
    />
  );
};

export default StatefulAuthIntegration;
