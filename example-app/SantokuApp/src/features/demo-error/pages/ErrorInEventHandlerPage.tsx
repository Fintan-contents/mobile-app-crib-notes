import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const throwJsErrorInSyncProcess = () => {
  throw new Error('Error has occurred in synchronous process of EventHandler.');
};

const throwJsErrorInAsyncProcess = () => {
  // eslint-disable-next-line no-void
  void new Promise(() => {
    throw new Error('Error has occurred in asynchronous process of EventHandler.');
  });
};

export const ErrorInEventHandlerPage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwJsErrorInSyncProcess} title="同期処理でエラー発生" />
      <Button onPress={throwJsErrorInAsyncProcess} title="非同期処理でエラー発生" />
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
