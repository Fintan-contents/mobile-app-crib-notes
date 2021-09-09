import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {ErrorInEventHandler} from './ErrorInEventHandler';
import {ErrorInNativeModule} from './ErrorInNativeModules';
import {ErrorInReactComponent} from './ErrorInReactComponent';
import {ErrorInUseEffect} from './ErrorInUseEffect';

const ScreenName = 'ErrorCase';
const Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate(ErrorInEventHandler.ScreenName)} title="イベントハンドラでエラー" />
      <Button onPress={() => navigation.navigate(ErrorInUseEffect.ScreenName)} title="useEffectでエラー" />
      <Button onPress={() => navigation.navigate(ErrorInReactComponent.ScreenName)} title="ReactComponentでエラー" />
      <Button onPress={() => navigation.navigate(ErrorInNativeModule.ScreenName)} title="Native Modulesでエラー" />
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

export const ErrorCase = {
  Screen,
  ScreenName,
};
