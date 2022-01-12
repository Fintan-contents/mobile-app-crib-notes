import {DemoStackParamList} from 'navigation/types';
import {useEffect} from 'react';

const ScreenName = 'ErrorInUseEffectSyncProcess';
const Screen = () => {
  useEffect(() => {
    throw new Error('Error has occurred in synchronous process of useEffect.');
  }, []);

  return null;
};

export const ErrorInUseEffectSyncProcessScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
