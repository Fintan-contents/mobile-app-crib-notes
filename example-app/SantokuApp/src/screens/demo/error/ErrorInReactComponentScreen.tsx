import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {View} from 'react-native';

const ScreenName = 'ErrorInReactComponent';
const Screen = () => {
  // 文字列を<Text>で囲んでないためエラーになる
  return <View>test</View>;
};

export const ErrorInReactComponentScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
