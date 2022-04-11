import {act, renderHook} from '@testing-library/react-hooks';

import {useVisibility} from './useVisibility';

describe('useVisibility', () => {
  it('returns visible or invisible according to default values', () => {
    expect(renderHook(() => useVisibility(true)).result.current.isVisible).toBe(true);
    expect(renderHook(() => useVisibility(false)).result.current.isVisible).toBe(false);
  });

  it('can toggle state with `toggleVisibility`', () => {
    const {result} = renderHook(() => useVisibility(true));
    expect(result.current.isVisible).toBe(true);

    act(() => {
      result.current.toggleVisibility();
    });

    expect(result.current.isVisible).toBe(false);

    act(() => {
      result.current.toggleVisibility();
      result.current.toggleVisibility();
    });

    expect(result.current.isVisible).toBe(false);
  });

  it('can set as visible with `visible`', () => {
    const {result} = renderHook(() => useVisibility(false));
    act(() => {
      result.current.setVisible();
    });
    expect(result.current.isVisible).toBe(true);
    act(() => {
      result.current.setVisible();
    });
    expect(result.current.isVisible).toBe(true);
  });

  it('can set as invisible with `invisible`', () => {
    const {result} = renderHook(() => useVisibility(true));
    act(() => {
      result.current.setInvisible();
    });
    expect(result.current.isVisible).toBe(false);
    act(() => {
      result.current.setInvisible();
    });
    expect(result.current.isVisible).toBe(false);
  });
});
