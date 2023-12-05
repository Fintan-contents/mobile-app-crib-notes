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

import {useDebounceState} from 'bases/core/utils/useDebounceState';
import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SearchBar as DefaultSearchBar} from 'react-native-elements';
import {SearchBarBaseProps} from 'react-native-elements/dist/searchbar/SearchBar';

import {useTodosPage} from '../services/todo/useTodosPage';

// 次の不具合で型エラーがでるため暫定対処
// https://stackoverflow.com/questions/68401996/typescript-error-when-using-searchbar-from-react-native-elements
const SearchBar = DefaultSearchBar as unknown as React.FC<SearchBarBaseProps>;

export const SearchBarTodoDemoPage: React.FC = () => {
  const {isFetching, isError, todos, setPageParams} = useTodosPage();
  const [inputPage, inputPageDebounce, setInputPage] = useDebounceState('', 500);
  useEffect(() => {
    const page = Number(inputPageDebounce);
    setPageParams(page ? {page} : undefined);
  }, [inputPageDebounce, setPageParams]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="ページ番号" value={inputPage} onChangeText={setInputPage} platform="default" />
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
