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
import {AxiosResponse} from 'axios';
import {QuestionAndAnswer} from 'features/backend/apis/model';
import {
  getGetDetailQuestionQueryKey,
  getGetListQuestionsQueryKey,
  usePostQuestions,
} from 'features/backend/apis/question/question';

export const useQuestionCommands = () => {
  const queryClient = useQueryClient();
  const {mutateAsync: post, isLoading: isPosting} = usePostQuestions({
    mutation: {
      onSuccess: async () => {
        await queryClient.invalidateQueries(getGetListQuestionsQueryKey());
      },
    },
  });
  const setQuestion = (
    questionId: string,
    updater: (data?: AxiosResponse<QuestionAndAnswer>) => AxiosResponse<QuestionAndAnswer> | undefined,
  ) => {
    queryClient.setQueryData<AxiosResponse<QuestionAndAnswer> | undefined>(
      getGetDetailQuestionQueryKey(questionId),
      updater,
    );
  };

  const addQuestionLikes = (questionId: string, num: number) =>
    setQuestion(questionId, data => {
      if (data) {
        return {
          ...data,
          data: {
            ...data.data,
            question: {
              ...data.data.question,
              question: {...data.data.question.question, likes: data.data.question.question.likes + num},
            },
          },
        };
      }
      return undefined;
    });
  return {
    post,
    isPosting,
    setQuestion,
    addQuestionLikes,
  };
};
