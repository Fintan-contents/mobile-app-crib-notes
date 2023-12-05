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
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {useTodoEditForm, TodoEditFormValues} from '../forms/useTodoEditForm';
import {useTodoCommands} from '../services/todo/useTodoCommands';

type Props = {
  replaceToEditTodoDemo: (todoId: number) => void;
};
export const CreateTodoDemoPage: React.FC<Props> = ({replaceToEditTodoDemo}) => {
  const {create, isCreating} = useTodoCommands();
  const onSubmit = useCallback(
    (values: TodoEditFormValues) => {
      const request = {
        data: {
          title: values.title,
          description: values.description,
        },
      };
      return create(request, {
        onSuccess: response => {
          replaceToEditTodoDemo(response.data.id);
        },
      });
    },
    [create, replaceToEditTodoDemo],
  );
  const {form, clearTitle, clearDescription} = useTodoEditForm({
    onSubmit,
  });

  useLoadingOverlay(isCreating);

  return (
    <View style={styles.container}>
      <TextInput
        label={m('タイトル')}
        placeholder="タイトル"
        value={form.values.title}
        onChangeText={form.handleChange('title')}
        showClearButton={!!form.values.title}
        onClearButtonPress={clearTitle}
        errorMessage={form.errors.title}
      />
      <TextInput
        label={m('説明')}
        placeholder="説明"
        value={form.values.description}
        onChangeText={form.handleChange('description')}
        showClearButton={!!form.values.description}
        onClearButtonPress={clearDescription}
        errorMessage={form.errors.description}
      />
      <View style={styles.buttons}>
        <Button title="Submit" onPress={form.submitForm} loading={isCreating} containerStyle={styles.button} />
      </View>
    </View>
  );
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
