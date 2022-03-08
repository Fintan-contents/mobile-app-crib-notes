import {useLoadingOverlay} from 'components/overlay';
import {useCallback, useState} from 'react';
import {usePostTodo} from 'service/backend';

import {CreateTodoDemoScreenProps} from './CreateTodoDemoScreen';
import {EditTodoDemoScreen} from './EditTodoDemoScreen';

const useCreateTodoDemo = ({navigation, route}: CreateTodoDemoScreenProps) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const loadingOverlay = useLoadingOverlay();
  const postTodo = usePostTodo();

  const onChangeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  const onChangeDescription = useCallback((newDescription: string) => {
    setDescription(newDescription);
  }, []);

  const onSubmit = useCallback(() => {
    if (title && description) {
      loadingOverlay.setVisible(true);
      const data = {title, description};
      postTodo
        .mutateAsync({data})
        .then(data => {
          const todo = data.data;
          navigation.replace(EditTodoDemoScreen.name, {todoId: todo.id});
        })
        .finally(() => {
          loadingOverlay.setVisible(false);
        });
    }
  }, [title, description, loadingOverlay, postTodo, navigation]);

  return {
    title,
    description,
    isLoading: postTodo.isLoading,
    onChangeTitle,
    onChangeDescription,
    onSubmit,
  };
};

export {useCreateTodoDemo};
