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
