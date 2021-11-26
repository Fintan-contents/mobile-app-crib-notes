import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {useLocalAuthentication} from './useLocalAuthentication';

const ScreenName = 'Local Authentication';
const Screen = () => {
  const {
    isEnrolled,
    isFingerPrintSupported,
    isFacialSupported,
    isIrisSupported,
    localAuthentication1,
    localAuthentication2,
  } = useLocalAuthentication();
  return (
    <View style={styles.container}>
      <Button onPress={isEnrolled} title="デバイスの設定チェック" />
      <Button onPress={isFingerPrintSupported} title="指紋認証のサポートのチェック" />
      <Button onPress={isFacialSupported} title="顔認証のサポートのチェック" />
      <Button onPress={isIrisSupported} title="虹彩認証のサポートのチェック" />
      <Button onPress={localAuthentication1} title="認証の実行 Option指定3つ" />
      <Button onPress={localAuthentication2} title="認証の実行 Option全指定" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export const LocalAuthenticationScreen = {
  name: ScreenName,
  component: Screen,
};
