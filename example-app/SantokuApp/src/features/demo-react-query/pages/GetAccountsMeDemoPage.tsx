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

import {useAccountData} from 'features/account/services/account/useAccountData';
import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const GetAccountsMeDemoPage: React.FC = () => {
  const {isLoading, isRefetching, isError, accountData, refetch} = useAccountData();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}>
        {isError && <Text>アカウント情報の取得に失敗しました。</Text>}
        {isLoading && <ActivityIndicator size="large" color="blue" />}
        {accountData && <Text>{accountData.account.accountId}</Text>}
      </ScrollView>
      <View>
        <Text>※画面下方向へのスワイプで画面が更新されます。</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
