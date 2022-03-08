import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, RefreshControl, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useGetAccountsMe} from 'service/backend';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'GetAccountsMeDemo';
const Screen: React.FC<Props> = () => {
  const {isLoading, isRefetching, isError, data: axiosResponse, refetch} = useGetAccountsMe();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}>
        {isError && <Text>アカウント情報の取得に失敗しました。</Text>}
        {isLoading && <ActivityIndicator size="large" color="blue" />}
        {axiosResponse && <Text>{axiosResponse.data.accountId}</Text>}
      </ScrollView>
      <View>
        <Text>※画面下方向へのスワイプで画面が更新されます。</Text>
      </View>
    </SafeAreaView>
  );
};

export const GetAccountsMeDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
