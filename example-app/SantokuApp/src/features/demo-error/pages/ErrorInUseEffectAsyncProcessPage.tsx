import {useEffect} from 'react';

export const ErrorInUseEffectAsyncProcessPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-void
    void new Promise(() => {
      throw new Error('Error has occurred in asynchronous process of useEffect.');
    });
  }, []);

  return null;
};
