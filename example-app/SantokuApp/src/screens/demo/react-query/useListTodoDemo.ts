import {useCallback, useMemo} from 'react';
import {useQueryClient} from 'react-query';
import {useListTodoByCursorInfinite} from 'service/backend';

import {CreateTodoDemoScreen} from './CreateTodoDemoScreen';
import {EditTodoDemoScreen} from './EditTodoDemoScreen';
import {ListTodoDemoScreenProps} from './ListTodoDemoScreen';

export const useListTodoDemo = ({navigation}: ListTodoDemoScreenProps) => {
  const queryClient = useQueryClient();
  const listTodoQuery = useListTodoByCursorInfinite();
  const {isSuccess, hasNextPage, fetchNextPage, data} = listTodoQuery;

  const todos = useMemo(() => {
    if (isSuccess && data) {
      const pages = data.pages;
      return pages.map(page => page.data.content).flat();
    } else {
      return [];
    }
  }, [isSuccess, data]);

  const onPressTodoItem = useCallback(
    (todoId: number) => {
      navigation.navigate(EditTodoDemoScreen.name, {todoId});
    },
    [navigation],
  );

  const fetchNext = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage().catch(() => {});
    }
  }, [hasNextPage, fetchNextPage]);

  const create = useCallback(() => {
    navigation.navigate(CreateTodoDemoScreen.name);
  }, [navigation]);

  const resetQueries = useCallback(async () => {
    await queryClient.resetQueries(`/todos/infinite`);
  }, [queryClient]);

  const invalidateQueries = useCallback(async () => {
    await queryClient.invalidateQueries(`/todos/infinite`);
  }, [queryClient]);

  return {
    ...listTodoQuery,
    todos,
    onPressTodoItem,
    fetchNext,
    create,
    resetQueries,
    invalidateQueries,
  };
};
