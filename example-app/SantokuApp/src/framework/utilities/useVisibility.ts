import {useCallback, useState} from 'react';

/**
 * This React hook provides the boolean state (representing visibility) and functions that change state.
 *
 * @param initialVisibility initial value
 */
export const useVisibility = (initialVisibility: boolean = false) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const toggleVisibility = useCallback(() => setIsVisible(v => !v), []);

  const setVisible = useCallback(() => setIsVisible(true), []);

  const setInvisible = useCallback(() => setIsVisible(false), []);

  return {isVisible, toggleVisibility, setVisible, setInvisible};
};
