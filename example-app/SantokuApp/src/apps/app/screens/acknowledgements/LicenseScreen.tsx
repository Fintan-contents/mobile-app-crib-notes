import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {LicensePage} from 'features/acknowledgements/pages/LicensePage';
import React from 'react';

export const LicenseScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'License'>> = ({route}) => {
  return <LicensePage dependency={route.params.dependency} />;
};
