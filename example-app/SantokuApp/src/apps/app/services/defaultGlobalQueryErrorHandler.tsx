import {defaultGlobalErrorHandler} from 'apps/app/services/defaultGlobalErrorHandler';
import {Query, QueryClient, QueryKey} from 'react-query';

export const defaultGlobalQueryErrorHandler = (queryClient: QueryClient) => {
  const defaultErrorHandler = defaultGlobalErrorHandler(queryClient);
  return (error: unknown, query: Query<unknown, unknown, unknown, QueryKey>, queryClient?: QueryClient) => {
    if (!query.meta?.disableGlobalErrorHandler) {
      defaultErrorHandler(error);
    }
  };
};
