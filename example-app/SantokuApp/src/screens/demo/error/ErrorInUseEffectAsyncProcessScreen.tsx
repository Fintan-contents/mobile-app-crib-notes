import {useEffect} from 'react';

const ScreenName = 'ErrorInUseEffectAsyncProcess';
const Screen = () => {
  useEffect(() => {
    // eslint-disable-next-line no-void
    void new Promise(() => {
      throw new Error('Error has occurred in asynchronous process of useEffect.');
    });
  }, []);

  return null;
};

export const ErrorInUseEffectAsyncProcessScreen = {
  name: ScreenName,
  component: Screen,
};
