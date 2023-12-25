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
import {Button} from 'bases/ui/button/Button';
import {TextInput} from 'bases/ui/input/TextInput';
import {useLoadingOverlay} from 'bases/ui/loading/useLoadingOverlay';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {useTodoEditForm, TodoEditFormValues} from '../forms/useTodoEditForm';
import {useTodo} from '../services/todo/useTodo';
import {useTodoCommands} from '../services/todo/useTodoCommands';

type Props = {
  goBack: () => void;
  todoId: number;
};
export const EditTodoDemoPage: React.FC<Props> = ({goBack, todoId}) => {
  const [isEdit, setIsEdit] = useState(false);
  const {save, isSaving, remove, isRemoving, isProcessing} = useTodoCommands();
  const {todo, isLoading, isSuccess} = useTodo(todoId);
  const onSubmit = useCallback(
    (values: TodoEditFormValues) => {
      const request = {
        todoId,
        data: {
          title: values.title,
          description: values.description,
        },
      };
      return save(request, {
        onSuccess: () => {
          setIsEdit(false);
        },
      });
    },
    [save, todoId],
  );
  const {form, clearTitle, clearDescription, setInitialValues} = useTodoEditForm({
    onSubmit,
  });
  const edit = useCallback(() => setIsEdit(true), [setIsEdit]);
  const onRemove = useCallback(() => {
    remove(
      {todoId},
      {
        onSuccess: () => {
          goBack();
        },
      },
    ).catch(() => {});
  }, [remove, todoId, goBack]);
  const reset = useCallback(() => form.resetForm(), [form]);

  useEffect(() => {
    if (isSuccess && todo && !isEdit) {
      setInitialValues({title: todo.title, description: todo.description});
    }
  }, [isSuccess, todo, isEdit, setInitialValues]);

  useLoadingOverlay(isProcessing);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isSuccess && todo) {
    return (
      <View style={styles.container}>
        <Input label="ID" disabled>
          {todo.id}
        </Input>
        <TextInput
          label={m('タイトル')}
          placeholder="タイトル"
          value={form.values.title}
          onChangeText={form.handleChange('title')}
          showClearButton={!!form.values.title}
          onClearButtonPress={clearTitle}
          errorMessage={form.errors.title}
          disabled={!isEdit}
        />
        <TextInput
          label={m('説明')}
          placeholder="説明"
          value={form.values.description}
          onChangeText={form.handleChange('description')}
          showClearButton={!!form.values.description}
          onClearButtonPress={clearDescription}
          errorMessage={form.errors.description}
          disabled={!isEdit}
        />

        <View style={styles.buttons}>
          {isEdit ? (
            <Button title="Save" onPress={form.submitForm} loading={isSaving} containerStyle={styles.button} />
          ) : (
            <Button title="Edit" onPress={edit} containerStyle={styles.button} />
          )}
          <Button title="Delete" onPress={onRemove} loading={isRemoving} containerStyle={styles.button} />
          <Button title="Reset" onPress={reset} containerStyle={styles.button} />
        </View>
      </View>
    );
  }

  return <Text>Todo情報の取得に失敗しました。</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginHorizontal: 8,
  },
});
