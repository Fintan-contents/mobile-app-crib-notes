import {DemoStackParamList} from 'navigation/types';
import React from 'react';

import {AppInfoTemplate} from './AppInfoTemplate';
import {useAppInfo} from './useAppInfo';

const ScreenName = 'AppInfo';
const Screen: React.FC = () => {
  const {info, infoKeyExtractor} = useAppInfo();
  return <AppInfoTemplate testID="AppInfoScreen" items={info} keyExtractor={infoKeyExtractor} />;
};

export const AppInfoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Application Information',
  },
};
