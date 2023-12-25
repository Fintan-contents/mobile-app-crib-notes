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

import {defaultMutationCache, defaultQueryCache} from './defaultCache';

describe('defaultQueryCache', () => {
  test('onErrorが設定されたQueryCacheを取得できること', () => {
    const queryCache = defaultQueryCache(new QueryClient());
    expect(queryCache).toBeInstanceOf(QueryCache);
    expect(queryCache.config.onError).not.toBeUndefined();
  });
});

describe('defaultMutationCache', () => {
  test('onErrorが設定されたMutationCacheを取得できること', () => {
    const mutationCache = defaultMutationCache(new QueryClient());
    expect(mutationCache).toBeInstanceOf(MutationCache);
    expect(mutationCache.config.onError).not.toBeUndefined();
  });
});
