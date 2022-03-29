import {useCallback, useMemo, useState} from 'react';
import {useQueryClient} from 'react-query';
import {useListTodo} from 'service/backend';

const useDisabledQueryDemo = () => {
  const [queryEnabled, setQueryEnabled] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const queryParameters = {};

  // Disable auto-fetch on mount
  const {status, isIdle, isLoading, isSuccess, isError, data, refetch} = useListTodo(queryParameters, {
    enabled: queryEnabled,
  });

  const todos = useMemo(() => {
    return isSuccess ? data?.data.content ?? [] : [];
  }, [isSuccess, data]);

  const toggleQueryEnabled = useCallback(() => {
    setQueryEnabled(prevValue => !prevValue);
  }, []);

  const reset = useCallback(async () => {
    await queryClient.resetQueries();
  }, [queryClient]);

  return {
    todos,
    queryEnabled,
    status,
    isIdle,
    isLoading,
    isSuccess,
    isError,
    refetch,
    toggleQueryEnabled,
    reset,
  };
};

export {useDisabledQueryDemo};
