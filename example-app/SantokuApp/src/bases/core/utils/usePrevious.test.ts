import {renderHook} from '@testing-library/react-native';

import {usePrevious} from './usePrevious';

describe('usePrevious', () => {
  it('returns previous value', () => {
    const props: number = 1;
    const {result, rerender} = renderHook(current => usePrevious(current), {initialProps: props});
    expect(result.current).toBe(undefined);

    rerender(2);
    expect(result.current).toBe(1);
  });

  it('returns same object if the reference is the same', () => {
    const props = {prop: 'init'};
    const {result, rerender} = renderHook(current => usePrevious(current), {initialProps: props});
    expect(result.current?.prop).toBe(undefined);

    props.prop = 'updated';
    rerender(props);
    // NOT RETURN THE **PREVIOUS VALUE**. (The previous value is {prop: 'init'}.)
    expect(result.current?.prop).toBe('updated');
  });
});
