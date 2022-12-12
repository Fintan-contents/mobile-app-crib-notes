import {useEffect} from 'react';

export const ErrorInUseEffectSyncProcessPage = () => {
  useEffect(() => {
    throw new Error('Error has occurred in synchronous process of useEffect.');
  }, []);

  return null;
};
