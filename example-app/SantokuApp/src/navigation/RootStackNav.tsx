import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useEffect, useMemo} from 'react';
import {DevSettings} from 'react-native';
import {TermsOfServiceAgreementScreen} from 'screens';

import {AppInitialData} from '../framework/initialize/types';
import {AuthenticatedStackNav, useAuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';

const nav = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const getInitialRouteName = (initialData: AppInitialData) => {
  if (!initialData.account.terms?.hasAgreedValidTermsOfService) {
    return TermsOfServiceAgreementScreen.name;
  }
  return AuthenticatedStackNav.name;
};

const useRootStackNavigator = (initialData: AppInitialData) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const authenticatedStackNav = useAuthenticatedStackNav(initialData);

  return (
    <nav.Navigator screenOptions={screenOptions} initialRouteName={initialRouteName}>
      <nav.Screen {...TermsOfServiceAgreementScreen} />
      <nav.Screen {...authenticatedStackNav} />
      <nav.Screen {...DemoStackNav} />
    </nav.Navigator>
  );
};

export const RootStackNav: React.FC<{initialData: AppInitialData}> = ({initialData}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Go to Demo', () => {
        navigation.navigate('DemoStackNav', {screen: 'Demo'});
      });
    }
  }, [navigation]);

  return useRootStackNavigator(initialData);
};
