import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useInitializeContext} from 'components/initialize';
import React from 'react';
import {TermsOfServiceAgreementScreen} from 'screens';

import {AuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';

const nav = createNativeStackNavigator();
const name = 'RootStackNav';
export const RootStackNav: React.FC = () => {
  const {navigatorOptions} = useInitializeContext();
  return (
    <nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      {...navigatorOptions[name]}>
      <nav.Screen {...TermsOfServiceAgreementScreen} />
      <nav.Screen {...AuthenticatedStackNav} />
      <nav.Screen {...DemoStackNav} />
    </nav.Navigator>
  );
};
