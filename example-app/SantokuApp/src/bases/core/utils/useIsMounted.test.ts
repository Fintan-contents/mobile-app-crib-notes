import {renderHook} from '@testing-library/react-native';

import {useIsMounted} from './useIsMounted';

describe('useIsMounted', () => {
  let isMounted: () => boolean;
  let hook: ReturnType<typeof renderHook<typeof isMounted, void>>;
  beforeEach(() => {
    hook = renderHook(useIsMounted);
    isMounted = hook.result.current;
  });

  it('returns true if component is mounted', () => {
    expect(isMounted()).toBe(true);
    hook.rerender();
    expect(isMounted()).toBe(true);
  });

  it('returns false after unmount', () => {
    hook.unmount();
    expect(isMounted()).toBe(false);
  });

  it('always returns same function', () => {
    hook.rerender();
    // Fails if useCallback is not used
    expect(hook.result.current).toBe(isMounted);
  });
});
