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

import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useTodoDetails} from '../services/todo/useTodoDetails';

export const DependentQueryDemo3Page: React.FC = () => {
  const {
    todoDetails,
    isLoading,
    isSuccess,
    isError,
    isIdle,
    isPaused,
    isFetching,
    isRefetching,
    isInitialLoading,
    refetch,
    reload,
  } = useTodoDetails();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}>
        <View>
          <Text h4>Query Status</Text>
          <Text>{`isLoading: ${isLoading.toString()}, isSuccess: ${isSuccess.toString()}, isError: ${isError.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Fetch Status</Text>
          <Text>{`isIdle: ${isIdle.toString()}, isFetching: ${isFetching.toString()}, isPaused: ${isPaused.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Other Status</Text>
          <Text>{`isRefetching: ${isRefetching.toString()}, isInitialLoading: ${isInitialLoading.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Query Data</Text>
          <Text>Todo詳細取得結果</Text>
          {isError && <Text>データの取得に失敗しました</Text>}
          {isLoading && <ActivityIndicator size="large" color="blue" />}
          <View style={styles.details}>
            {todoDetails?.map((todoDetail, index) => {
              return <Text key={index}>{todoDetail?.title}</Text>;
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text>※画面下方向へのスワイプで画面が更新されます。</Text>
        <View>
          <Button title="Reload" onPress={reload} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  details: {
    marginLeft: 8,
  },
  footer: {
    alignItems: 'flex-end',
  },
});
