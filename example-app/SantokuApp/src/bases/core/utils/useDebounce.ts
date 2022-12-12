import {useEffect, useRef, useState} from 'react';

export const useDebounce = <T>(state: T, timeout: number) => {
  const [value, setValue] = useState(state);
  const timerId = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    timerId.current = setTimeout(() => {
      setValue(state);
      timerId.current = undefined;
    }, timeout);
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [state, timeout]);
  return value;
};
