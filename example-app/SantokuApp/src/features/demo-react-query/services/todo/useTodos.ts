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

import {useQueryClient} from '@tanstack/react-query';
import {getListTodoQueryKey, useListTodo} from 'features/sandbox/apis/api';
import {ListTodoParams} from 'features/sandbox/apis/model/listTodoParams';
import {useCallback, useState} from 'react';

export const useTodos = (
  initialListParams?: ListTodoParams,
  initialQueryOptions: {enabled: boolean} = {enabled: true},
) => {
  const queryClient = useQueryClient();
  const [listParams, setListParams] = useState<ListTodoParams | undefined>(initialListParams);
  const [queryOption, setQueryOption] = useState(initialQueryOptions);
  const query = useListTodo(listParams, {query: queryOption});
  const reset = useCallback(() => queryClient.resetQueries(getListTodoQueryKey()), [queryClient]);

  return {...query, todos: query.data?.data.content, listParams, setListParams, queryOption, setQueryOption, reset};
};
