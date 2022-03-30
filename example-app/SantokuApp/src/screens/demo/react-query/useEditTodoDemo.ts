import {useLoadingOverlay} from 'components/overlay';
import {useCallback, useEffect, useState} from 'react';
import {useDeleteTodo, useGetTodo, usePutTodo} from 'service/backend';

import {EditTodoDemoScreenProps} from './EditTodoDemoScreen';

export const useEditTodoDemo = ({navigation, route}: EditTodoDemoScreenProps) => {
  const todoId = route.params.todoId;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const loadingOverlay = useLoadingOverlay();
  const todoQuery = useGetTodo(todoId);
  const todo = todoQuery.data?.data;
  const putTodo = usePutTodo();
  const deleteTodo = useDeleteTodo();

  const onEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const onChangeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  const onChangeDescription = useCallback((newDescription: string) => {
    setDescription(newDescription);
  }, []);

  const onSave = useCallback(async () => {
    if (title && description) {
      try {
        loadingOverlay.setVisible(true);
        const data = {title, description};
        await putTodo.mutateAsync({todoId, data});
        setIsEdit(false);
      } finally {
        loadingOverlay.setVisible(false);
      }
    }
  }, [title, description, loadingOverlay, putTodo, todoId]);

  const onDelete = useCallback(async () => {
    try {
      loadingOverlay.setVisible(true);
      await deleteTodo.mutateAsync({todoId});
      navigation.goBack();
    } finally {
      loadingOverlay.setVisible(false);
    }
  }, [deleteTodo, loadingOverlay, navigation, todoId]);

  useEffect(() => {
    if (!isEdit && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [isEdit, todo]);

  return {
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
  };
};
