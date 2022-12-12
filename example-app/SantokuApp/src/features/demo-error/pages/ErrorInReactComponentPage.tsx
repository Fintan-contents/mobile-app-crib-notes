import React from 'react';
import {View} from 'react-native';

export const ErrorInReactComponentPage = () => {
  // 文字列を<Text>で囲んでないためエラーになる
  return <View>test</View>;
};
