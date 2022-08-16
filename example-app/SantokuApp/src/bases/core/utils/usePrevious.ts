import {useEffect, useRef} from 'react';

/**
 * This React hook provides the previous value. (To be precise, it returns the previous reference.)
 *
 * See [Hooks FAQ - How to get the previous props or state?](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state).
 */
export const usePrevious = <T>(current: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = current;
  });

  return ref.current;
};
