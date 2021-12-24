import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {ErrorInUseEffectAsyncProcessScreen} from './ErrorInUseEffectAsyncProcessScreen';
import {ErrorInUseEffectSyncProcessScreen} from './ErrorInUseEffectSyncProcessScreen';

const ScreenName = 'ErrorInUseEffect';
type Props = NativeStackScreenProps<DemoStackParamList, typeof ScreenName>;

const Screen: React.FC<Props> = ({navigation}) => {
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

export const ErrorInUseEffectScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
