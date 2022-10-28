import {renderHook, act} from '@testing-library/react-native';

import {useVisibility} from './useVisibility';

describe('useVisibility', () => {
  it('returns visible or invisible according to default values', () => {
    expect(renderHook(() => useVisibility(true)).result.current.isVisible).toBe(true);
    expect(renderHook(() => useVisibility(false)).result.current.isVisible).toBe(false);
  });

  it('can toggle state with `toggleVisibility`', async () => {
    const {result} = renderHook(() => useVisibility(true));
    expect(result.current.isVisible).toBe(true);

    await act(() => {
      result.current.toggleVisibility();
    });

    expect(result.current.isVisible).toBe(false);

    await act(() => {
      result.current.toggleVisibility();
      result.current.toggleVisibility();
    });

    expect(result.current.isVisible).toBe(false);
  });

  it('can set as visible with `visible`', async () => {
    const {result} = renderHook(() => useVisibility(false));
    await act(() => {
      result.current.setVisible();
    });
    expect(result.current.isVisible).toBe(true);
    await act(() => {
      result.current.setVisible();
    });
    expect(result.current.isVisible).toBe(true);
  });

  it('can set as invisible with `invisible`', async () => {
    const {result} = renderHook(() => useVisibility(true));
    await act(() => {
      result.current.setInvisible();
    });
    expect(result.current.isVisible).toBe(false);
    await act(() => {
      result.current.setInvisible();
    });
    expect(result.current.isVisible).toBe(false);
  });
});
