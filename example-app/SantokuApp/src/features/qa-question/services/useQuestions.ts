import {GetListQuestionsParams} from 'features/backend/apis/model';
import {useGetListQuestions} from 'features/backend/apis/question/question';
import {useState} from 'react';

export const useQuestions = (initialParams?: GetListQuestionsParams) => {
  const [listParams, setListParams] = useState(initialParams);
  const query = useGetListQuestions(listParams, {query: {keepPreviousData: true}});
  return {...query, questions: query.data?.data, listParams, setListParams};
};
