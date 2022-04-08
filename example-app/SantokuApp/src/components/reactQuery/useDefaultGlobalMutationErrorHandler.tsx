import {useDefaultGlobalErrorHandler} from 'framework/error/useDefaultGlobalErrorHandler';
import {useCallback} from 'react';
import {Mutation} from 'react-query';

export const useDefaultGlobalMutationErrorHandler = () => {
  const defaultErrorHandler = useDefaultGlobalErrorHandler();
  return useCallback(
    (error: unknown, variables: unknown, context: unknown, mutation: Mutation<unknown, unknown, unknown, unknown>) => {
      if (!mutation.meta?.disableGlobalErrorHandler) {
        defaultErrorHandler(error);
      }
    },
    [defaultErrorHandler],
  );
};
