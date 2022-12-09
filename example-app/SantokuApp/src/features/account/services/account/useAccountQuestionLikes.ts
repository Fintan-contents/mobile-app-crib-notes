import {useGetAccountsMeLikesQuestionsQuestionId} from 'features/backend/apis/account/account';

export const useAccountQuestionLikes = (questionId: string) => {
  const query = useGetAccountsMeLikesQuestionsQuestionId(questionId);
  return {...query, data: query.data?.data};
};
