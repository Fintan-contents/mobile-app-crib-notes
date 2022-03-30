import {useCallback, useMemo} from 'react';
import {useGetTodoDetails} from 'service/backend';

const useDependentQueryDemo3 = () => {
  const queryParameters = {page: 1, size: 5};

  // 直列API呼び出し (GET /todos の後に GET /todos/:id を呼び出し)
  // 依存関係のあるAPI呼び出しは処理を1つのQuery Functionにまとめた上でuseQueryを用いる
  const getTodoDetailsQuery = useGetTodoDetails(queryParameters);
  const reload = useCallback(() => {
    getTodoDetailsQuery.remove();
    getTodoDetailsQuery.refetch().catch(() => {});
  }, [getTodoDetailsQuery]);

  const todos = useMemo(() => {
    return getTodoDetailsQuery.isSuccess ? getTodoDetailsQuery.data?.map(response => response.data) ?? [] : [];
  }, [getTodoDetailsQuery]);

  return {
    todos,
    ...getTodoDetailsQuery,
    reload,
  };
};

export {useDependentQueryDemo3};
