import {renderHook} from '@testing-library/react-native';

import {useWorkletCallback} from './useWorkletCallback';

describe('useWorkletCallback', () => {
  it('should be called callback if callback exits', () => {
    const callback = jest.fn();
    const {result} = renderHook(props => useWorkletCallback(props), {initialProps: callback});
    const hook = result.current;
    hook(true);
    expect(callback).toHaveBeenCalledWith(true);
  });
});
