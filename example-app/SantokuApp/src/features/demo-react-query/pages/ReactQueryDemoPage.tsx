import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

type Props = {
  navigateToGetAccountsMeDemo: () => void;
  navigateToSearchFormTodoDemo: () => void;
  navigateToSearchBarTodoDemo: () => void;
  navigateToDependentQueryDemo1: () => void;
  navigateToDependentQueryDemo2: () => void;
  navigateToDependentQueryDemo3: () => void;
  navigateToListTodoDemo: () => void;
  navigateToDisabledQueryDemo: () => void;
  navigateToDisableErrorHandlerDemo: () => void;
};
export const ReactQueryDemoPage: React.FC<Props> = ({
  navigateToGetAccountsMeDemo,
  navigateToSearchFormTodoDemo,
  navigateToSearchBarTodoDemo,
  navigateToDependentQueryDemo1,
  navigateToDependentQueryDemo2,
  navigateToDependentQueryDemo3,
  navigateToListTodoDemo,
  navigateToDisabledQueryDemo,
  navigateToDisableErrorHandlerDemo,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Button title="初期表示時にクエリ実行" onPress={navigateToGetAccountsMeDemo} />
      </View>
      <View style={styles.item}>
        <Button title="検索ボタン押下でクエリ実行" onPress={navigateToSearchFormTodoDemo} />
      </View>
      <View style={styles.item}>
        <Button title="検索バー入力時にクエリ実行" onPress={navigateToSearchBarTodoDemo} />
      </View>
      <View style={styles.item}>
        <Button title="依存関係のあるクエリ1" onPress={navigateToDependentQueryDemo1} />
      </View>
      <View style={styles.item}>
        <Button title="依存関係のあるクエリ2" onPress={navigateToDependentQueryDemo2} />
      </View>
      <View style={styles.item}>
        <Button title="依存関係のあるクエリ3" onPress={navigateToDependentQueryDemo3} />
      </View>
      <View style={styles.item}>
        <Button title="無限スクロール" onPress={navigateToListTodoDemo} />
      </View>
      <View style={styles.item}>
        <Button title="マウント時の自動Fetch無効化" onPress={navigateToDisabledQueryDemo} />
      </View>
      <View style={styles.item}>
        <Button title="グローバルエラーハンドラーの無効化" onPress={navigateToDisableErrorHandlerDemo} />
      </View>
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 8,
  },
});
