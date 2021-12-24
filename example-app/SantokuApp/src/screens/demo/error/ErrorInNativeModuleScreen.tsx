import {DemoStackParamList} from 'navigation/types';
import React, {useCallback} from 'react';
import {NativeModules, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const {ThrowErrorModule} = NativeModules;
const ScreenName = 'ErrorInNativeModule';
const Screen = () => {
  const throwErrorInSyncProcess = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await ThrowErrorModule.throwErrorSyncProcess();
  }, []);

  const throwErrorInAsyncProcess = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await ThrowErrorModule.throwErrorAsyncProcess();
  }, []);

  return (
    <View style={styles.container}>
      <Button onPress={throwErrorInSyncProcess} title="Native Modules内の同期処理でエラー発生" />
      <Button onPress={throwErrorInAsyncProcess} title="Native Modules内の非同期処理でエラー発生" />
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

export const ErrorInNativeModuleScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
