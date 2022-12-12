import React from 'react';

import {ConfigTemplate} from '../components/ConfigTemplate';
import {info} from '../constants/info';

export const keyExtractor = (_: unknown, index: number) => index.toString();

export const ConfigPage: React.FC = () => {
  return <ConfigTemplate testID="ConfigScreen" items={info} keyExtractor={keyExtractor} />;
};
