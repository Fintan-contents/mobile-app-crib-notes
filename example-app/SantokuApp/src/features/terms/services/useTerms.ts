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

import {useGetTerms} from 'features/backend/apis/terms/terms';

// 30分間隔で利用規約情報を取得する
const termsRefetchInterval = 1000 * 60 * 30;

export const useTerms = () => {
  const {
    data: termsOfService,
    isFetched: isFetchedTerms,
    isLoadingError: isTermsLoadingError,
  } = useGetTerms({
    query: {refetchInterval: termsRefetchInterval},
  });
  return {termsOfService, isFetchedTerms: isFetchedTerms && !isTermsLoadingError};
};
