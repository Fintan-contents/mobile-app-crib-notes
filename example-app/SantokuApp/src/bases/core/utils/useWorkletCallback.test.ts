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

import {useWorkletCallback} from './useWorkletCallback';

describe('useWorkletCallback', () => {
  it('should be called callback if callback exits', async () => {
    const callback = jest.fn();
    const {result} = renderHook(props => useWorkletCallback(props), {initialProps: callback});
    const hook = result.current;
    hook(true);
    // runOnJSで追加されたコールバックはマイクロタスクとして追加されるので、キューが消化されるのを待たないといけない。
    await Promise.resolve();
    expect(callback).toHaveBeenCalledWith(true);
  });
});
