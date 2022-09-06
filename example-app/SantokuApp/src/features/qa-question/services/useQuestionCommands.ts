import {useQueryClient} from 'react-query';

import {getGetListQuestionsQueryKey, usePostQuestions} from '../../backend/apis/question/question';

export const useQuestionCommands = () => {
  const queryClient = useQueryClient();
  const {mutateAsync: post, isLoading: isPosting} = usePostQuestions({
    mutation: {
      onSuccess: async () => {
        await queryClient.invalidateQueries(getGetListQuestionsQueryKey());
      },
    },
  });
  return {post, isPosting};
};
