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
