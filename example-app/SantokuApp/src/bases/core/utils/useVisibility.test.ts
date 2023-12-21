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
