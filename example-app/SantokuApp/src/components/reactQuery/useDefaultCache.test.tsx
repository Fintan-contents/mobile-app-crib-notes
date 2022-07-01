import {renderHook} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {WithAccountContext} from 'context/WithAccountContext';
import React from 'react';
import {MutationCache, QueryCache} from 'react-query';

import {useDefaultMutationCache, useDefaultQueryCache} from './useDefaultCache';

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  return (
    <WithSnackbar>
      <WithAccountContext accountData={accountData}>{children}</WithAccountContext>;
    </WithSnackbar>
  );
};

describe('useDefaultQueryCache', () => {
  test('onErrorが設定されたQueryCacheを取得できること', () => {
    const {result} = renderHook(() => useDefaultQueryCache(), {wrapper: Wrapper});
    const defaultQueryCache = result.current;
    expect(defaultQueryCache).toBeInstanceOf(QueryCache);
    expect(defaultQueryCache.config.onError).not.toBeUndefined();
  });
});

describe('useDefaultMutationCache', () => {
  test('onErrorが設定されたMutationCacheを取得できること', () => {
    const {result} = renderHook(() => useDefaultMutationCache(), {wrapper: Wrapper});
    const defaultQueryCache = result.current;
    expect(defaultQueryCache).toBeInstanceOf(MutationCache);
    expect(defaultQueryCache.config.onError).not.toBeUndefined();
  });
});
