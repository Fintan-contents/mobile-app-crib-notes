import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {DependentQueryDemo1Screen} from './DependentQueryDemo1Screen';
import {DependentQueryDemo2Screen} from './DependentQueryDemo2Screen';
import {DependentQueryDemo3Screen} from './DependentQueryDemo3Screen';
import {DisableErrorHandlerDemoScreen} from './DisableErrorHandlerDemoScreen';
import {DisabledQueryDemoScreen} from './DisabledQueryDemoScreen';
import {GetAccountsMeDemoScreen} from './GetAccountsMeDemoScreen';
import {ListTodoDemoScreen} from './ListTodoDemoScreen';
import {SearchBarTodoDemoScreen} from './SearchBarTodoDemoScreen';
import {SearchFormTodoDemoScreen} from './SearchFormTodoDemoScreen';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'ReactQueryDemo';
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Button title="初期表示時にクエリ実行" onPress={() => navigation.navigate(GetAccountsMeDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="検索ボタン押下でクエリ実行" onPress={() => navigation.navigate(SearchFormTodoDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="検索バー入力時にクエリ実行" onPress={() => navigation.navigate(SearchBarTodoDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="依存関係のあるクエリ1" onPress={() => navigation.navigate(DependentQueryDemo1Screen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="依存関係のあるクエリ2" onPress={() => navigation.navigate(DependentQueryDemo2Screen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="依存関係のあるクエリ3" onPress={() => navigation.navigate(DependentQueryDemo3Screen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="無限スクロール" onPress={() => navigation.navigate(ListTodoDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="マウント時の自動Fetch無効化" onPress={() => navigation.navigate(DisabledQueryDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button
          title="グローバルエラーハンドラーの無効化"
          onPress={() => navigation.navigate(DisableErrorHandlerDemoScreen.name)}
        />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const ReactQueryDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 8,
  },
});
