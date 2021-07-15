import {useCallback, useLayoutEffect, useRef} from 'react';

export const useIsMounted = () => {
  const mounted = useRef(false);
  const isMounted = useCallback(() => mounted.current, [mounted]);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return isMounted;
};
