import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

export type ErrorCasePageProps = {
  navigateToErrorInEventHandler: () => void;
  navigateToErrorInUseEffect: () => void;
  navigateToErrorInReactComponent: () => void;
  navigateToErrorInNativeModule: () => void;
};

export const ErrorCasePage: React.FC<ErrorCasePageProps> = ({
  navigateToErrorInEventHandler,
  navigateToErrorInUseEffect,
  navigateToErrorInReactComponent,
  navigateToErrorInNativeModule,
}) => {
  return (
    <View style={styles.container}>
      <Button onPress={navigateToErrorInEventHandler} title="イベントハンドラでエラー" />
      <Button onPress={navigateToErrorInUseEffect} title="useEffectでエラー" />
      <Button onPress={navigateToErrorInReactComponent} title="ReactComponentでエラー" />
      <Button onPress={navigateToErrorInNativeModule} title="Native Modulesでエラー" />
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
