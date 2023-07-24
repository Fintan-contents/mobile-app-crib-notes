import {AxiosResponse} from 'axios';
import {useListTodoByCursorInfinite} from 'features/sandbox/apis/api';
import {ListTodoByCursorParams, ListTodoInfiniteResponse} from 'features/sandbox/apis/model';
import {useCallback, useState} from 'react';
import {InfiniteData, useQueryClient} from 'react-query';

const translateTodos = (data?: InfiniteData<AxiosResponse<ListTodoInfiniteResponse, any>>) => {
  if (data) {
    const pages = data.pages;
    return pages.map(page => page.data.content).flat();
  } else {
    return [];
  }
};

export const useTodosInfinite = (initialInfiniteListParams?: ListTodoByCursorParams) => {
  const queryClient = useQueryClient();
  const [infiniteListParams, setInfiniteListParams] = useState<ListTodoByCursorParams | undefined>(
    initialInfiniteListParams,
  );
  const query = useListTodoByCursorInfinite(infiniteListParams, {
    query: {
      getNextPageParam: lastPage => {
        return lastPage.data.nextCursor;
      },
    },
  });
  const reset = useCallback(async () => {
    await queryClient.resetQueries(`/todos/infinite`);
  }, [queryClient]);

  const invalidate = useCallback(async () => {
    await queryClient.invalidateQueries(`/todos/infinite`);
  }, [queryClient]);

  const next = useCallback(() => {
    if (query.hasNextPage) {
      query.fetchNextPage().catch(() => {});
    }
  }, [query]);

  return {
    ...query,
    todos: translateTodos(query.data),
    invalidate,
    reset,
    next,
    infiniteListParams,
    setInfiniteListParams,
  };
};
