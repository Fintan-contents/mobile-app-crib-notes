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

import {MutationCache, QueryCache, QueryClient} from '@tanstack/react-query';

import {defaultGlobalMutationErrorHandler} from './defaultGlobalMutationErrorHandler';
import {defaultGlobalQueryErrorHandler} from './defaultGlobalQueryErrorHandler';

const defaultQueryCache = (queryClient: QueryClient) => {
  const defaultQueryErrorHandler = defaultGlobalQueryErrorHandler(queryClient);
  return new QueryCache({
    onError: defaultQueryErrorHandler,
  });
};

const defaultMutationCache = (queryClient: QueryClient) => {
  const defaultMutationErrorHandler = defaultGlobalMutationErrorHandler(queryClient);
  return new MutationCache({
    onError: defaultMutationErrorHandler,
  });
};

export {defaultQueryCache, defaultMutationCache};
