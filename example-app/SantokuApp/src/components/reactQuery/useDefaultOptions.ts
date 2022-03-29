import {useMemo} from 'react';
import {DefaultOptions} from 'react-query';

const useDefaultOptions = () => {
  const defaultOptions = useMemo<DefaultOptions<unknown>>(() => {
    return {
      queries: {
        retry: false, // default: 3
      },
      mutations: {},
    };
  }, []);
  return defaultOptions;
};

export {useDefaultOptions};
