import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useDependentQueryDemo3} from './useDependentQueryDemo3';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'DependentQueryDemo3';
const Screen: React.FC<Props> = () => {
  const {todos, isIdle, isLoading, isRefetching, isSuccess, isError, refetch, reload} = useDependentQueryDemo3();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}>
        <View>
          <Text h4>Query Status</Text>
          <Text>{`isIdle: ${isIdle.toString()}, isLoading: ${isLoading.toString()}, isFetching: ${isRefetching.toString()}, isSuccess: ${isSuccess.toString()}, isError: ${isError.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Query Data</Text>
          <Text>Todo詳細取得結果</Text>
          {isError && <Text>データの取得に失敗しました</Text>}
          {isLoading && <ActivityIndicator size="large" color="blue" />}
          <View style={styles.details}>
            {todos?.map((todo, index) => {
              return <Text key={index}>{todo?.title}</Text>;
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

export const DependentQueryDemo3Screen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
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
