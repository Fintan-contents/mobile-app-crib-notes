import {useDefaultGlobalErrorHandler} from 'framework/error/useDefaultGlobalErrorHandler';
import {useCallback} from 'react';
import {Query, QueryKey} from 'react-query';

export const useDefaultGlobalQueryErrorHandler = () => {
  const defaultErrorHandler = useDefaultGlobalErrorHandler();
  return useCallback(
    (error: unknown, query: Query<unknown, unknown, unknown, QueryKey>) => {
      if (!query.meta?.disableGlobalErrorHandler) {
        defaultErrorHandler(error);
      }
    },
    [defaultErrorHandler],
  );
};
