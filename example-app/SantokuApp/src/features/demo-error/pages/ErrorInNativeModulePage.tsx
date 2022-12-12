import React from 'react';
import {StyleSheet, View, NativeModules} from 'react-native';
import {Button} from 'react-native-elements';
const {ThrowErrorModule} = NativeModules;

const throwNativeErrorInSyncProcess = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  await ThrowErrorModule.throwErrorSyncProcess();
};

const throwNativeErrorInAsyncProcess = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  await ThrowErrorModule.throwErrorAsyncProcess();
};

export const ErrorInNativeModulePage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwNativeErrorInSyncProcess} title="Native Modules内の同期処理でエラー発生" />
      <Button onPress={throwNativeErrorInAsyncProcess} title="Native Modules内の非同期処理でエラー発生" />
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
