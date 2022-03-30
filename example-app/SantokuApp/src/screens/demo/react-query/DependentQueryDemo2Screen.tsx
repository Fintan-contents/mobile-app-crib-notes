import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useDependentQueryDemo2} from './useDependentQueryDemo2';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'DependentQueryDemo2';
const Screen: React.FC<Props> = () => {
  const {result, isIdle, isLoading, isRefetching, isSuccess, isError, refetch, reload} = useDependentQueryDemo2();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}>
        <View>
          <Text h4>Query Status</Text>
          <Text>{`isIdle: ${isIdle.toString()}, isLoading: ${isLoading.toString()}, isFetching: ${isRefetching.toString()}, isSuccess: ${isSuccess.toString()}, isError: ${isError.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Query Data</Text>
          {isError && <Text>データの取得に失敗しました</Text>}
          {isLoading && <ActivityIndicator size="large" color="blue" />}
          {result && (
            <>
              <Text>商品取得結果</Text>
              <View style={styles.details}>
                <Text>ID: {result.id}</Text>
                <Text>名前: {result.name}</Text>
                <Text>タイプ: {result.type}</Text>
                <Text>値段: {result.price}</Text>
                <Text>割引率: {result.rate * 100}%</Text>
                <Text>金額: {result.amount}</Text>
              </View>
            </>
          )}
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

export const DependentQueryDemo2Screen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
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
