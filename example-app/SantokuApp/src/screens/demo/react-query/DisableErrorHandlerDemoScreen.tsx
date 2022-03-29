import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements';

import {useDisableErrorHandlerDemo} from './useDisableErrorHandlerDemo';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'DisableErrorHandlerDemo';
const Screen: React.FC<Props> = () => {
  const {defaultQuery, customErrorQuery, customErrorQueryWithoutGlobalErrorHandling} = useDisableErrorHandlerDemo();

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text h4>デフォルトエラー処理</Text>
        <Text>グローバルエラーハンドラーで設定した処理が実行されます</Text>
        <Button title="スナックバーを表示" onPress={() => defaultQuery.refetch()} />
      </View>
      <View style={styles.block}>
        <Text h4>デフォルト + カスタム処理</Text>
        <Text>QueryOptionsのonErrorで設定した内容は、グローバルエラーハンドラーの処理に加えて実行されます</Text>
        <Button title="スナックバー + Alertを表示" onPress={() => customErrorQuery.refetch()} />
      </View>
      <View style={styles.block}>
        <Text h4>カスタム処理のみ</Text>
        <Text>
          グローバルエラーハンドラーの処理は、QueryOptionsのmetaを設定することで無効化できるように実装しています。
        </Text>
        <Button title="Alertのみ表示" onPress={() => customErrorQueryWithoutGlobalErrorHandling.refetch()} />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const DisableErrorHandlerDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  block: {
    marginVertical: 8,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
