import {useMemo} from 'react';
import {MutationCache, QueryCache} from 'react-query';

import {useDefaultGlobalMutationErrorHandler, useDefaultGlobalQueryErrorHandler} from './useDefaultGlobalErrorHandler';

const useDefaultQueryCache = () => {
  const defaultQueryErrorHandler = useDefaultGlobalQueryErrorHandler();
  return useMemo(() => {
    return new QueryCache({
      onError: defaultQueryErrorHandler,
    });
  }, [defaultQueryErrorHandler]);
};

const useDefaultMutationCache = () => {
  const defaultMutationErrorHandler = useDefaultGlobalMutationErrorHandler();
  return useMemo(() => {
    return new MutationCache({
      onError: defaultMutationErrorHandler,
    });
  }, [defaultMutationErrorHandler]);
};

export {useDefaultQueryCache, useDefaultMutationCache};
