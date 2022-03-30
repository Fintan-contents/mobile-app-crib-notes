import {renderHook} from '@testing-library/react-hooks';
import {WithSnackbar} from 'components/overlay';
import {MutationCache, QueryCache} from 'react-query';

import {useDefaultQueryCache, useDefaultMutationCache} from './useDefaultCache';

describe('useDefaultQueryCache', () => {
  test('onErrorが設定されたQueryCacheを取得できること', () => {
    const {result} = renderHook(() => useDefaultQueryCache(), {wrapper: WithSnackbar});
    const defaultQueryCache = result.current;
    expect(defaultQueryCache).toBeInstanceOf(QueryCache);
    expect(defaultQueryCache.config.onError).not.toBeUndefined();
  });
});

describe('useDefaultMutationCache', () => {
  test('onErrorが設定されたMutationCacheを取得できること', () => {
    const {result} = renderHook(() => useDefaultMutationCache(), {wrapper: WithSnackbar});
    const defaultQueryCache = result.current;
    expect(defaultQueryCache).toBeInstanceOf(MutationCache);
    expect(defaultQueryCache.config.onError).not.toBeUndefined();
  });
});
