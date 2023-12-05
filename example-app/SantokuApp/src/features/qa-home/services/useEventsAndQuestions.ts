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
