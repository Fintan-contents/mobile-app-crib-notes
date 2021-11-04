import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TermsOfServiceAgreementScreen} from 'screens';

import {AuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';

const nav = createNativeStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator
      initialRouteName={TermsOfServiceAgreementScreen.name}
      screenOptions={{
        headerShown: false,
      }}>
      <nav.Screen {...DemoStackNav} />
      <nav.Screen {...AuthenticatedStackNav} />
      <nav.Screen {...TermsOfServiceAgreementScreen} />
    </nav.Navigator>
  );
};
