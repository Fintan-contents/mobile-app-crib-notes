import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {ErrorInUseEffectAsyncProcessScreen} from './ErrorInUseEffectAsyncProcessScreen';
import {ErrorInUseEffectSyncProcessScreen} from './ErrorInUseEffectSyncProcessScreen';

const ScreenName = 'ErrorInUseEffect';
const Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate(ErrorInUseEffectSyncProcessScreen.name)}
        title="useEffect内の同期処理でエラー"
      />
      <Button
        onPress={() => navigation.navigate(ErrorInUseEffectAsyncProcessScreen.name)}
        title="useEffect内の非同期処理でエラー"
      />
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

export const ErrorInUseEffectScreen = {
  name: ScreenName,
  component: Screen,
};
