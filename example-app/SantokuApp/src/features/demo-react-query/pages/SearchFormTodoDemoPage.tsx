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

import {m} from 'bases/message/Message';
import {TextInput} from 'bases/ui/input/TextInput';
import React, {useCallback} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import {useTodoSearchForm, TodoSearchFormValues} from '../forms/useTodoSearchForm';
import {useTodosPage} from '../services/todo/useTodosPage';

export const SearchFormTodoDemoPage: React.FC = () => {
  const {isFetching, isError, todos, setPageParams} = useTodosPage();
  const onSubmit = useCallback(
    (values: TodoSearchFormValues) => setPageParams({page: Number(values.pageNo)}),
    [setPageParams],
  );
  const {form, clearPageNo} = useTodoSearchForm({
    onSubmit,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          label={m('ページ番号')}
          placeholder="ページ番号"
          value={form.values.pageNo}
          onChangeText={form.handleChange('pageNo')}
          showClearButton={!!form.values.pageNo}
          onClearButtonPress={clearPageNo}
          errorMessage={form.errors.pageNo}
        />
        <View style={styles.search}>
          <Button title="検索" onPress={form.submitForm} />
        </View>
        {isFetching && <ActivityIndicator color="#0000ff" />}
        {isError && <Text>TODO一覧の取得に失敗しました。</Text>}
        {!isFetching && todos && todos.length === 0 && <Text>TODO一覧の検索結果が0件です。</Text>}
        {!isFetching &&
          todos?.map(todo => {
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
