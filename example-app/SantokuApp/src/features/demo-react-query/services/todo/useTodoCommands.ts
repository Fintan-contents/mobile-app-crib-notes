import {
  getGetTodoQueryKey,
  getListTodoByCursorQueryKey,
  getListTodoQueryKey,
  useDeleteTodo,
  usePostTodo,
  usePutTodo,
} from 'features/sandbox/apis/api';
import {useQueryClient} from 'react-query';

export const useTodoCommands = () => {
  const queryClient = useQueryClient();

  const {mutateAsync: create, isLoading: isCreating} = usePostTodo({
    mutation: {
      onSuccess: async () => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries(['todo', 'todoDetails']);
      },
    },
  });

  const {mutateAsync: save, isLoading: isSaving} = usePutTodo({
    mutation: {
      onSuccess: async response => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries(['todo', 'todoDetails']);
        await queryClient.resetQueries(getGetTodoQueryKey(response.data.id));
      },
    },
  });

  const {mutateAsync: remove, isLoading: isRemoving} = useDeleteTodo({
    mutation: {
      onSuccess: async () => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries(['todo', 'todoDetails']);
      },
    },
  });

  return {
    create,
    isCreating,
    save,
    isSaving,
    remove,
    isRemoving,
    isProcessing: isCreating || isSaving || isRemoving,
  };
};
