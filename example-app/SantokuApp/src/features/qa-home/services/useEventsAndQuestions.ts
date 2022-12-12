import {GetEventsParams, GetListQuestionsParams} from 'features/backend/apis/model';
import {useEvents} from 'features/qa-event/services/useEvents';
import {useQuestions} from 'features/qa-question/services/useQuestions';
import {useCallback, useState} from 'react';

export const useEventsAndQuestions = (initialParams: {
  eventsParams: GetEventsParams;
  questionsParams?: GetListQuestionsParams;
}) => {
  const {
    events,
    isLoading: isEventsLoading,
    isRefetching: isEventsRefetching,
    refetch: refetchEvents,
  } = useEvents(initialParams.eventsParams);
  const {
    questions,
    isLoading: isQuestionsLoading,
    isRefetching: isQuestionsRefetching,
    setListParams: setQuestionsParams,
    refetch: refetchQuestions,
  } = useQuestions(initialParams.questionsParams);
  const [isPullToRefreshing, setIsPullToRefreshing] = useState(false);

  const refresh = useCallback(() => {
    Promise.all([refetchEvents(), refetchQuestions()]).catch(() => {
      // 個別にエラーハンドリングは実施しない
    });
  }, [refetchEvents, refetchQuestions]);
  const pullToRefresh = useCallback(() => {
    setIsPullToRefreshing(true);
    Promise.all([refetchEvents(), refetchQuestions()])
      .catch(() => {
        // 個別にエラーハンドリングは実施しない
      })
      .finally(() => setIsPullToRefreshing(false));
  }, [refetchEvents, refetchQuestions]);
  return {
    events,
    questions,
    setQuestionsParams,
    refresh,
    pullToRefresh,
    isLoading: isEventsLoading || isQuestionsLoading,
    isRefreshing: (isEventsRefetching || isQuestionsRefetching) && !isPullToRefreshing,
    isPullToRefreshing,
    isEventsLoading,
    isQuestionsLoading,
  };
};
