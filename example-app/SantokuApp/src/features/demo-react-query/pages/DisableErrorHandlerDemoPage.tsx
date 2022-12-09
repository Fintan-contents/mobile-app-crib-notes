import React, {useCallback} from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useQuery} from 'react-query';

const queryErrorFn = () => {
  throw new Error('リクエストエラー');
};

const onError = () => {
  Alert.alert('カスタムエラー処理', 'エラーが発生しました');
};

export const DisableErrorHandlerDemoPage: React.FC = () => {
  const query1 = useQuery('dummy1', queryErrorFn, {
    enabled: false,
  });
  const query2 = useQuery('dummy2', queryErrorFn, {
    enabled: false,
    onError,
  });
  const query3 = useQuery('dummy3', queryErrorFn, {
    enabled: false,
    meta: {disableGlobalErrorHandler: true},
    onError,
  });
  const refreshDefaultQuery = useCallback(() => query1.refetch(), [query1]);
  const refreshCustomQuery = useCallback(() => query2.refetch(), [query2]);
  const refreshCustomErrorQueryWithoutGlobalErrorHandling = useCallback(() => query3.refetch(), [query3]);

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text h4>デフォルトエラー処理</Text>
        <Text>グローバルエラーハンドラーで設定した処理が実行されます</Text>
        <Button title="スナックバーを表示" onPress={refreshDefaultQuery} />
      </View>
      <View style={styles.block}>
        <Text h4>デフォルト + カスタム処理</Text>
        <Text>QueryOptionsのonErrorで設定した内容は、グローバルエラーハンドラーの処理に加えて実行されます</Text>
        <Button title="スナックバー + Alertを表示" onPress={refreshCustomQuery} />
      </View>
      <View style={styles.block}>
        <Text h4>カスタム処理のみ</Text>
        <Text>
          グローバルエラーハンドラーの処理は、QueryOptionsのmetaを設定することで無効化できるように実装しています。
        </Text>
        <Button title="Alertのみ表示" onPress={refreshCustomErrorQueryWithoutGlobalErrorHandling} />
      </View>
      <SafeAreaView />
    </View>
  );
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
