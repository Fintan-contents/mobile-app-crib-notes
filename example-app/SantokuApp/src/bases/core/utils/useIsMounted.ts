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

import {useCallback, useEffect, useRef} from 'react';

/**
 * This React hook provides the function that returns `true` if component is mounted.
 *
 * In React, changing the state of an unmounted component will result the following error.
 *
 * ```console
 * Warning: Can't perform a React state update on an unmounted component.
 * ```
 *
 * This error often happens changing state in asynchronous functions or event handlers.
 * To avoid, you need to check if the component is mounted before change the state.
 *
 * Example:
 * ```ts
 * const isMounted = useIsMounted();
 * await asyncFunction();
 * if (isMounted()) {
 *   setSomeState(someValue);
 * }
 * ```
 */
export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
