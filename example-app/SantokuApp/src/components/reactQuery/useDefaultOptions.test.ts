import {renderHook} from '@testing-library/react-hooks';
import {WithSnackbar} from 'components/overlay';

import {useDefaultOptions} from './useDefaultOptions';

describe('useDefaultOptions', () => {
  test('retryがfalseに設定されていること', () => {
    const {result} = renderHook(() => useDefaultOptions(), {wrapper: WithSnackbar});
    const defaultOptions = result.current;
    expect(defaultOptions.queries?.retry).toEqual(false);
  });
});
