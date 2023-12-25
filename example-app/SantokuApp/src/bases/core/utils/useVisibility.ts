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

import {useCallback, useState} from 'react';

import {useIsMounted} from './useIsMounted';

/**
 * This React hook provides the boolean state (representing visibility) and functions that change state.
 *
 * @param initialVisibility initial value
 */
export const useVisibility = (initialVisibility: boolean = false) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const isMounted = useIsMounted();

  const toggleVisibility = useCallback(() => isMounted() && setIsVisible(v => !v), [isMounted]);

  const setVisible = useCallback(() => isMounted() && setIsVisible(true), [isMounted]);

  const setInvisible = useCallback(() => isMounted() && setIsVisible(false), [isMounted]);

  return {isVisible, toggleVisibility, setVisible, setInvisible};
};
