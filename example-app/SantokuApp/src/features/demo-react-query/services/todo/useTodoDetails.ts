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

import {useQuery} from '@tanstack/react-query';
import {getTodo, listTodo} from 'features/sandbox/apis/api';
import {ListTodoParams} from 'features/sandbox/apis/model/listTodoParams';
import {useCallback} from 'react';

const listTodoDetails = async (params?: ListTodoParams, signal?: AbortSignal) => {
  const response = await listTodo(params, signal);
  const todos = response.data.content;
  if (todos) {
    return Promise.all(todos.map(todo => getTodo(todo.id, signal))).then(all => all.map(response => response.data));
  }
};

// 直列API呼び出し (GET /todos の後に GET /todos/:id を呼び出し)
// 依存関係のあるAPI呼び出しは処理を1つのQuery Functionにまとめた上でuseQueryを用いる
export const useTodoDetails = (params?: ListTodoParams, options?: {enabled: boolean}) => {
  const query = useQuery(['todo', 'todoDetails', params], ({signal}) => listTodoDetails(params, signal), {
    enabled: options?.enabled,
  });
  const reload = useCallback(async () => {
    query.remove();
    await query.refetch();
  }, [query]);
  return {...query, todoDetails: query.data, reload, isIdle: query.fetchStatus === 'idle'};
};
