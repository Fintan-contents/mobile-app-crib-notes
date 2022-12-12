import React from 'react';

import {AppInfoTemplate} from '../components/AppInfoTemplate';
import {info} from '../constants/info';

export const keyExtractor = (_: unknown, index: number) => index.toString();

export const AppInfoPage: React.FC = () => {
  return <AppInfoTemplate testID="AppInfoScreen" items={info} keyExtractor={keyExtractor} />;
};
