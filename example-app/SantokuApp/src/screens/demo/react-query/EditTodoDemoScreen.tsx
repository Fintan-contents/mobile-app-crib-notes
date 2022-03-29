import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {useEditTodoDemo} from './useEditTodoDemo';

export type EditTodoDemoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'EditTodoDemo';
const Screen: React.FC<EditTodoDemoScreenProps> = props => {
  const {
    isEdit,
    title,
    description,
    todoQuery,
    todo,
    putTodo,
    deleteTodo,
    onEdit,
    onChangeTitle,
    onChangeDescription,
    onSave,
    onDelete,
  } = useEditTodoDemo(props);

  if (todoQuery.isLoading) {
    return <ActivityIndicator />;
  }

  if (todoQuery.isSuccess && todo) {
    return (
      <View style={styles.container}>
        <Input label="ID" disabled>
          {todo.id}
        </Input>
        <Input label="Title" disabled={!isEdit} onChangeText={onChangeTitle}>
          {title}
        </Input>
        <Input label="Description" disabled={!isEdit} onChangeText={onChangeDescription}>
          {description}
        </Input>
        <View style={styles.buttons}>
          {isEdit ? (
            <Button title="Save" onPress={onSave} loading={putTodo.isLoading} containerStyle={styles.button} />
          ) : (
            <Button title="Edit" onPress={onEdit} containerStyle={styles.button} />
          )}
          <Button title="Delete" onPress={onDelete} loading={deleteTodo.isLoading} containerStyle={styles.button} />
        </View>
      </View>
    );
  }

  return <Text>Todo情報の取得に失敗しました。</Text>;
};

export const EditTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
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
