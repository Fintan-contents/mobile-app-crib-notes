import {defaultGlobalErrorHandler} from 'apps/app/services/defaultGlobalErrorHandler';
import {Mutation, QueryClient} from 'react-query';

export const defaultGlobalMutationErrorHandler = (queryClient: QueryClient) => {
  const defaultErrorHandler = defaultGlobalErrorHandler(queryClient);
  return (
    error: unknown,
    variables: unknown,
    context: unknown,
    mutation: Mutation<unknown, unknown, unknown, unknown>,
  ) => {
    if (!mutation.meta?.disableGlobalErrorHandler) {
      defaultErrorHandler(error);
    }
  };
};
