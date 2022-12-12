import {useListTodo} from 'features/sandbox/apis/api';
import {ListTodoParams} from 'features/sandbox/apis/model/listTodoParams';
import {useState} from 'react';

export const useTodosPage = (initialPageParams?: ListTodoParams) => {
  const [pageParams, setPageParams] = useState<ListTodoParams | undefined>(initialPageParams);
  const query = useListTodo(pageParams, {
    query: {
      enabled: pageParams !== undefined,
    },
  });
  return {...query, todos: query.data?.data.content, pageParams, setPageParams};
};
