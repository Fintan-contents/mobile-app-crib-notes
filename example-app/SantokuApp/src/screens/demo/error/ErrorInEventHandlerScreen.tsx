import {DemoStackParamList} from 'navigation/types';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const ScreenName = 'ErrorInEventHandler';
const Screen = () => {
  const throwErrorInSyncProcess = useCallback(() => {
    throw new Error('Error has occurred in synchronous process of EventHandler.');
  }, []);

  const throwErrorInAsyncProcess = useCallback(() => {
    // eslint-disable-next-line no-void
    void new Promise(() => {
      throw new Error('Error has occurred in asynchronous process of EventHandler.');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button onPress={throwErrorInSyncProcess} title="同期処理でエラー発生" />
      <Button onPress={throwErrorInAsyncProcess} title="非同期処理でエラー発生" />
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

export const ErrorInEventHandlerScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
