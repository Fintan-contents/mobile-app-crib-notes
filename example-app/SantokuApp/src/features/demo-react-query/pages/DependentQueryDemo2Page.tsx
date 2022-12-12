import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useItemInfo} from '../services/item/useItemInfo';

export const DependentQueryDemo2Page: React.FC = () => {
  const {data: itemInfo, isIdle, isLoading, isRefetching, isSuccess, isError, refetch, reload} = useItemInfo(1);

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
          {itemInfo && (
            <>
              <Text>商品取得結果</Text>
              <View style={styles.details}>
                <Text>ID: {itemInfo.id}</Text>
                <Text>名前: {itemInfo.name}</Text>
                <Text>タイプ: {itemInfo.type}</Text>
                <Text>値段: {itemInfo.price}</Text>
                <Text>割引率: {itemInfo.rate * 100}%</Text>
                <Text>金額: {itemInfo.amount}</Text>
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
