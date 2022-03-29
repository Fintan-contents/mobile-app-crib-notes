import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ListTodoParams} from 'generated/sandbox/model';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React, {useCallback, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, SafeAreaView} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useListTodo} from 'service/backend';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'SearchFormTodoDemo';
const Screen: React.FC<Props> = () => {
  const [inputPage, setInputPage] = useState('');
  const [params, setParams] = useState<ListTodoParams>();
  const {isFetching, isError, data} = useListTodo(params, {enabled: params !== undefined});
  const search = useCallback(() => {
    const page = Number(inputPage);
    if (Number.isInteger(page) && page > 0) {
      setParams({page});
    }
  }, [inputPage]);

  const todos = data?.data.content;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input placeholder="ページ番号" value={inputPage} onChangeText={setInputPage} />
        <View style={styles.search}>
          <Button title="検索" onPress={search} />
        </View>
        {isFetching && <ActivityIndicator color="#0000ff" />}
        {isError && <Text>TODO一覧の取得に失敗しました。</Text>}
        {!isFetching && todos && todos.length === 0 && <Text>TODO一覧の検索結果が0件です。</Text>}
        {!isFetching &&
          todos &&
          todos.map(todo => {
            return <Text key={todo.id}>{todo.title}</Text>;
          })}
      </View>
    </SafeAreaView>
  );
};

export const SearchFormTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
