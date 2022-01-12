import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {ErrorInEventHandlerScreen} from './ErrorInEventHandlerScreen';
import {ErrorInNativeModuleScreen} from './ErrorInNativeModuleScreen';
import {ErrorInReactComponentScreen} from './ErrorInReactComponentScreen';
import {ErrorInUseEffectScreen} from './ErrorInUseEffectScreen';

const ScreenName = 'ErrorCase';
type Props = NativeStackScreenProps<DemoStackParamList, typeof ScreenName>;

const Screen: React.FC<Props> = ({navigation}) => {
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

export const ErrorCaseScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
