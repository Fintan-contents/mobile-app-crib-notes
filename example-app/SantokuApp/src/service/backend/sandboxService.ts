import {
  useGetTodo,
  useListTodo as useListTodoApi,
  useListTodoByCursorInfinite as useListTodoByCursorInfiniteApi,
  usePostTodo as usePostTodoApi,
  usePutTodo as usePutTodoApi,
  useDeleteTodo as useDeleteTodoApi,
  getListTodoQueryKey,
  getListTodoByCursorQueryKey,
  getGetTodoQueryKey,
  listTodo,
  getTodo,
} from 'generated/sandbox/api';
import {ListTodoByCursorParams, ListTodoParams} from 'generated/sandbox/model';
import {QueryClient, useQuery, useQueryClient} from 'react-query';

const useListTodo = (params?: ListTodoParams, options?: {enabled: boolean}) => {
  return useListTodoApi(params, {
    query: {
      enabled: options?.enabled,
    },
  });
};

const useListTodoByCursorInfinite = (params?: ListTodoByCursorParams) => {
  return useListTodoByCursorInfiniteApi(params, {
    query: {
      getNextPageParam: lastPage => {
        return lastPage.data.nextCursor;
      },
    },
  });
};

const usePostTodo = () => {
  const queryClient = useQueryClient();
  return usePostTodoApi({
    mutation: {
      onSuccess: () => resetQueries(queryClient),
    },
  });
};

const usePutTodo = () => {
  const queryClient = useQueryClient();
  return usePutTodoApi({
    mutation: {
      onSuccess: (_, variables) => resetQueries(queryClient, variables.todoId),
    },
  });
};

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useDeleteTodoApi({
    mutation: {
      onSuccess: (_, variables) => resetQueries(queryClient, variables.todoId),
    },
  });
};

// Dependent Queries
const useGetTodoDetails = (params?: ListTodoParams, options?: {enabled: boolean}) => {
  return useQuery(['useGetTodoDetails', params], () => getTodoDetails(params), {
    enabled: options?.enabled,
  });
};

const resetQueries = async (queryClient: QueryClient, todoId?: number) => {
  await queryClient.resetQueries(getListTodoQueryKey());
  await queryClient.resetQueries(getListTodoByCursorQueryKey());
  if (todoId) {
    await queryClient.resetQueries(getGetTodoQueryKey(todoId));
  }
};

const getTodoDetails = async (params?: ListTodoParams) => {
  const response = await listTodo(params);
  const todos = response.data.content;
  if (todos) {
    return Promise.all(todos.map(todo => getTodo(todo.id)));
  }
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

// 商品
type Item = {
  id: number;
  name: string;
  type: number;
  price: number;
};

// 商品の割引率
type ItemRate = {rate: number};

// 商品取得API
const getItem = async (id: number) => {
  return new Promise<Item>(resolve => {
    setTimeout(() => {
      resolve({id, name: `item-${id}`, type: getRandomInt(2), price: getRandomInt(1000)});
    }, 1000);
  });
};

// 商品種別0API
const getItemType0 = async (_: {id: number}) => {
  return new Promise<ItemRate>(resolve => {
    setTimeout(() => resolve({rate: 0.1}), 1000);
  });
};

// 商品種別1API
const getItemType1 = async (_: {id: number}) => {
  return new Promise<ItemRate>(resolve => {
    setTimeout(() => resolve({rate: 0.2}), 1000);
  });
};

// 金額計算API
const getAmount = async (req: {price: number; rate: number}) => {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(Math.round(req.price * (1 - req.rate))), 1000);
  });
};

const getItemInfo = async (id: number) => {
  const item = await getItem(id);
  const itemType = item.type === 0 ? await getItemType0({id: item.id}) : await getItemType1({id: item.id});
  const amount = await getAmount({price: item.price, rate: itemType.rate});
  return {
    ...item,
    rate: itemType.rate,
    amount,
  };
};

export {
  useGetTodo,
  useListTodo,
  useListTodoByCursorInfinite,
  usePostTodo,
  usePutTodo,
  useDeleteTodo,
  useGetTodoDetails,
  getItem,
  getItemType0,
  getItemType1,
  getAmount,
  getItemInfo,
};

export type {Item, ItemRate};
