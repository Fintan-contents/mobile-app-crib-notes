import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useInitializeContext} from 'components/initialize';
import React, {useEffect} from 'react';
import {DevSettings} from 'react-native';
import {TermsOfServiceAgreementScreen} from 'screens';

import {AuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';

const nav = createNativeStackNavigator<RootStackParamList>();
const name = 'RootStackNav';

export const RootStackNav: React.FC = () => {
  const {navigatorOptions} = useInitializeContext();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Go to Demo', () => {
        navigation.navigate('DemoStackNav', {screen: 'Demo'});
      });
    }
  }, [navigation]);

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
