import {useGetTodo} from 'features/sandbox/apis/api';

export const useTodo = (todoId: number) => {
  const query = useGetTodo(todoId);
  return {...query, todo: query.data?.data};
};
