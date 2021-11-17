import {Button} from 'components/button/Button';
import {WebView} from 'components/webview/WebView';
import * as SplashScreen from 'expo-splash-screen';
import {m, AppConfig} from 'framework';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {WebView as RNWebView} from 'react-native-webview';
import {useNavigateToAuthenticatedStackScreen} from 'screens/useNavigateToScreen';

const ScreenName = 'TermsOfServiceAgreement';
const Screen: React.FC = () => {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isWebViewError, setIsWebViewError] = useState(false);
  const webViewRef = useRef<RNWebView>(null);

  const onGoToHomeScreen = useNavigateToAuthenticatedStackScreen('Home');

  const onWebViewError = useCallback(() => {
    setIsWebViewError(true);
  }, []);

  const onReload = useCallback(() => {
    setIsWebViewError(false);
    webViewRef.current?.reload();
  }, []);

  // TODO: 本来は起動直後の初期化処理完了タイミングに持っていくべきなので、初期化処理実装時に併せて対応する
  useEffect(() => {
    // スプラッシュスクリーンを閉じる前に100ms程度は待たないと、コンポーネントのレンダリングが完了せず画面が一瞬白くなってしまいます。
    // expo-app-loadingでも200ms待っているので、ここでも200ms待つようにしています。
    // cf: https://github.com/expo/expo/blob/sdk-41/packages/expo-app-loading/src/AppLoadingNativeWrapper.tsx#L27
    setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {
        /* Ignore error */
      });
    }, 200);
  }, []);

  return (
    <View style={styles.container} testID="TermsOfServiceAgreementScreen">
      {isWebViewError ? (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{m('app.terms.有効な利用規約の取得エラー')}</Text>
          <Button title={m('リロード')} size="full" onPress={onReload} />
        </View>
      ) : (
        <WebView
          source={{uri: AppConfig.termsUrl}}
          onScrollEndOnce={() => setButtonDisable(false)}
          ref={webViewRef}
          onError={onWebViewError}
          onHttpError={onWebViewError}
        />
      )}
      <View style={styles.footer}>
        <Button title={m('同意')} onPress={onGoToHomeScreen} disabled={buttonDisable} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  errorView: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 14,
    marginBottom: 20,
  },
  footer: {
    flex: 0,
    flexDirection: 'row-reverse',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
});

export const TermsOfServiceAgreementScreen = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    headerShown: true,
    title: m('利用規約'),
    presentation: 'formSheet' as const,
  }),
};
