import {DemoStackParamList} from 'navigation/types';
import React from 'react';

import {ConfigTemplate} from './ConfigTemplate';
import {useConfig} from './useConfig';

const ScreenName = 'Config';
const Screen: React.FC = () => {
  const {info, infoKeyExtractor} = useConfig();
  return <ConfigTemplate testID="ConfigScreen" items={info} keyExtractor={infoKeyExtractor} />;
};

export const ConfigScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Configuration',
  },
};
