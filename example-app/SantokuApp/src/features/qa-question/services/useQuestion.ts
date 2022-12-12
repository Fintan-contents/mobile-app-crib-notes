import {useGetDetailQuestion} from 'features/backend/apis/question/question';

export const useQuestion = (questionId: string) => {
  const query = useGetDetailQuestion(questionId);
  return {...query, data: query.data?.data};
};
