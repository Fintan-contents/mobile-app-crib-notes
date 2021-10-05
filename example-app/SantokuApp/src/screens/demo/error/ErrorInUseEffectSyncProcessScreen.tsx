import {useEffect} from 'react';

const ScreenName = 'ErrorInUseEffectSyncProcess';
const Screen = () => {
  useEffect(() => {
    throw new Error('Error has occurred in synchronous process of useEffect.');
  }, []);

  return null;
};

export const ErrorInUseEffectSyncProcessScreen = {
  name: ScreenName,
  component: Screen,
};
