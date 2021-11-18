import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {ErrorInEventHandlerScreen} from './ErrorInEventHandlerScreen';
import {ErrorInNativeModuleScreen} from './ErrorInNativeModuleScreen';
import {ErrorInReactComponentScreen} from './ErrorInReactComponentScreen';
import {ErrorInUseEffectScreen} from './ErrorInUseEffectScreen';

const ScreenName = 'ErrorCase';
const Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate(ErrorInEventHandlerScreen.name)} title="イベントハンドラでエラー" />
      <Button onPress={() => navigation.navigate(ErrorInUseEffectScreen.name)} title="useEffectでエラー" />
      <Button onPress={() => navigation.navigate(ErrorInReactComponentScreen.name)} title="ReactComponentでエラー" />
      <Button onPress={() => navigation.navigate(ErrorInNativeModuleScreen.name)} title="Native Modulesでエラー" />
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

export const ErrorCaseScreen = {
  name: ScreenName,
  component: Screen,
};
