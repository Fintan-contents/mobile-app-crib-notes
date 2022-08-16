import {MutationCache, QueryCache, QueryClient} from 'react-query';

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
