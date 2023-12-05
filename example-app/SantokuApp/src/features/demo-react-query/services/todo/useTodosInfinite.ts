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

import {InfiniteData, useQueryClient} from '@tanstack/react-query';
import {AxiosResponse} from 'axios';
import {useListTodoByCursorInfinite} from 'features/sandbox/apis/api';
import {ListTodoByCursorParams, ListTodoInfiniteResponse} from 'features/sandbox/apis/model';
import {useCallback, useState} from 'react';

const translateTodos = (data?: InfiniteData<AxiosResponse<ListTodoInfiniteResponse>>) => {
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
    await queryClient.resetQueries([`/todos/infinite`]);
  }, [queryClient]);

  const invalidate = useCallback(async () => {
    await queryClient.invalidateQueries([`/todos/infinite`]);
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
