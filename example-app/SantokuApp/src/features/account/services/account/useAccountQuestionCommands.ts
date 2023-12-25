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
import {
  getGetAccountsMeLikesQuestionsQuestionIdQueryKey,
  useDeleteQuestionsQuestionIdLike,
  usePutQuestionsQuestionIdLike,
} from 'features/backend/apis/account/account';
import {LikedQuestionResponse} from 'features/backend/apis/model';
import {useQuestionCommands} from 'features/qa-question/services/useQuestionCommands';

export const useAccountQuestionCommands = () => {
  const queryClient = useQueryClient();
  const {addQuestionLikes} = useQuestionCommands();

  const setLikedQuestion = (
    questionId: string,
    updater: (data?: AxiosResponse<LikedQuestionResponse>) => AxiosResponse<LikedQuestionResponse> | undefined,
  ) => {
    queryClient.setQueryData<AxiosResponse<LikedQuestionResponse> | undefined>(
      getGetAccountsMeLikesQuestionsQuestionIdQueryKey(questionId),
      updater,
    );
  };

  const {mutateAsync: saveQuestionLike, isLoading: isSavingQuestionLike} = usePutQuestionsQuestionIdLike({
    mutation: {
      onError: (_, variables) => {
        addQuestionLikes(variables.questionId, -1);
      },
    },
  });

  const {mutateAsync: removeQuestionLike, isLoading: isRemovingQuestionLike} = useDeleteQuestionsQuestionIdLike({
    mutation: {
      onError: (_, variables) => {
        addQuestionLikes(variables.questionId, 1);
      },
    },
  });

  const toggleQuestionLike = (questionId: string) => {
    const data = queryClient.getQueryData<AxiosResponse<LikedQuestionResponse>>(
      getGetAccountsMeLikesQuestionsQuestionIdQueryKey(questionId),
    );
    if (data?.data.liked) {
      setLikedQuestion(questionId, data => {
        if (data) {
          return {
            ...data,
            data: {...data.data, liked: false},
          };
        }
        return undefined;
      });
      addQuestionLikes(questionId, -1);
      return removeQuestionLike({questionId});
    } else {
      if (data) {
        queryClient.setQueryData(getGetAccountsMeLikesQuestionsQuestionIdQueryKey(questionId), {
          ...data,
          data: {...data.data, liked: true},
        });
      }
      addQuestionLikes(questionId, 1);
      return saveQuestionLike({questionId});
    }
  };

  return {
    toggleQuestionLike,
    isTogglingQuestionLike: isSavingQuestionLike || isRemovingQuestionLike,
  };
};
