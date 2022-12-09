import {getListTodoQueryKey, useListTodo} from 'features/sandbox/apis/api';
import {ListTodoParams} from 'features/sandbox/apis/model/listTodoParams';
import {useCallback, useState} from 'react';
import {useQueryClient} from 'react-query';

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
