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
