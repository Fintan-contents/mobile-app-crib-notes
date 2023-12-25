/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {useQueryClient} from '@tanstack/react-query';
import {
  getGetTodoQueryKey,
  getListTodoByCursorQueryKey,
  getListTodoQueryKey,
  useDeleteTodo,
  usePostTodo,
  usePutTodo,
} from 'features/sandbox/apis/api';

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
