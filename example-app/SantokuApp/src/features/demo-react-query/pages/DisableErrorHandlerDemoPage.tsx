/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {useQuery} from '@tanstack/react-query';
import React, {useCallback} from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const queryErrorFn = () => {
  throw new Error('リクエストエラー');
};

const onError = () => {
  Alert.alert('カスタムエラー処理', 'エラーが発生しました');
};

export const DisableErrorHandlerDemoPage: React.FC = () => {
  const query1 = useQuery(['disableErrorHandler', 'queryErrorFn1'], queryErrorFn, {
    enabled: false,
  });
  const query2 = useQuery(['disableErrorHandler', 'queryErrorFn2'], queryErrorFn, {
    enabled: false,
    onError,
  });
  const query3 = useQuery(['disableErrorHandler', 'queryErrorFn3'], queryErrorFn, {
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
