import {MutationCache, QueryCache, QueryClient} from '@tanstack/react-query';

import {defaultGlobalMutationErrorHandler} from './defaultGlobalMutationErrorHandler';
import {defaultGlobalQueryErrorHandler} from './defaultGlobalQueryErrorHandler';

const defaultQueryCache = (queryClient: QueryClient) => {
  const defaultQueryErrorHandler = defaultGlobalQueryErrorHandler(queryClient);
  return new QueryCache({
    onError: defaultQueryErrorHandler,
  });
};

const defaultMutationCache = (queryClient: QueryClient) => {
  const defaultMutationErrorHandler = defaultGlobalMutationErrorHandler(queryClient);
  return new MutationCache({
    onError: defaultMutationErrorHandler,
  });
};

export {defaultQueryCache, defaultMutationCache};
