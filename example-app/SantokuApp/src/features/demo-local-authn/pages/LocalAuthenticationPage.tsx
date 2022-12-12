import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {authWithFallback} from '../use-cases/authWithFallback';
import {authWithoutFallback} from '../use-cases/authWithoutFallback';
import {isEnrolled} from '../use-cases/isEnrolled';
import {isFacialSupported} from '../use-cases/isFacialSupported';
import {isFingerPrintSupported} from '../use-cases/isFingerPrintSupported';
import {isIrisSupported} from '../use-cases/isIrisSupported';

export const LocalAuthenticationPage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={isEnrolled} title="デバイスの設定チェック" />
      <Button onPress={isFingerPrintSupported} title="指紋認証のサポートのチェック" />
      <Button onPress={isFacialSupported} title="顔認証のサポートのチェック" />
      <Button onPress={isIrisSupported} title="虹彩認証のサポートのチェック" />
      <Button onPress={authWithoutFallback} title="認証の実行 Option指定3つ" />
      <Button onPress={authWithFallback} title="認証の実行 Option全指定" />
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
