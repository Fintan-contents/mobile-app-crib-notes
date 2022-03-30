import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React, {useEffect, useRef, useState} from 'react';
import {Text, ActivityIndicator, StyleSheet, SafeAreaView, View} from 'react-native';
import {SearchBar as DefaultSearchBar} from 'react-native-elements';
import {useListTodo} from 'service/backend';

// 次の不具合で型エラーがでるため暫定対処
// https://stackoverflow.com/questions/68401996/typescript-error-when-using-searchbar-from-react-native-elements
const SearchBar = DefaultSearchBar as unknown as React.FC<any>;

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const useDebounce = <T,>(state: T, timeout: number) => {
  const [value, setValue] = useState(state);
  const timerId = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    timerId.current = setTimeout(() => {
      setValue(state);
      timerId.current = undefined;
    }, timeout);
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [state, timeout]);
  return value;
};

const ScreenName = 'SearchBarTodoDemo';
const Screen: React.FC<Props> = () => {
  const [inputPage, setInputPage] = useState('');
  const inputPageDebounce = useDebounce(inputPage, 500);
  const page = Number(inputPageDebounce);
  const enabled = Number.isInteger(page) && page > 0;
  const {isFetching, isError, data} = useListTodo({page}, {enabled});
  const todos = data?.data.content;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="ページ番号" value={inputPage} onChangeText={setInputPage} />
        {isFetching && <ActivityIndicator color="#0000ff" />}
        {isError && <Text>TODO一覧の取得に失敗しました。</Text>}
        {todos && todos.length === 0 && <Text>TODO一覧の検索結果が0件です。</Text>}
        {todos?.map(todo => {
          return <Text key={todo.id}>{todo.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export const SearchBarTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
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
