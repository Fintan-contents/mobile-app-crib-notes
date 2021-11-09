import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useNavigateToAuthenticatedStackScreen} from 'screens/useNavigateToScreen';

const ScreenName = 'TermsOfServiceAgreement';
const Screen: React.FC = () => {
  const onGoToHomeScreen = useNavigateToAuthenticatedStackScreen('Home');

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
      <Text h1>利用規約</Text>
      <Button title="Go to Home" testID="goToHomeButton" onPress={onGoToHomeScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export const TermsOfServiceAgreementScreen = {
  component: Screen,
  name: ScreenName,
  option: {
    title: '利用規約',
    presentation: 'formSheet' as const,
  },
};
