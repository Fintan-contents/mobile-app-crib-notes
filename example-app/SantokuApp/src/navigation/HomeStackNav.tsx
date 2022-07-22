import {Ionicons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from 'screens';

import {HomeStackParamList, MainTabParamList} from './types';
import {useLogoutButton} from './useLogoutButton';

// FIXME: Bottom Tabs + Native Stackでは、Androidで画面がチカチカする事象が発生したため、Stackを使用しています。
// （以下のissueではiOSでも発生すると記載されているので、確認できていないだけでiOSでも発生する可能性があります。）
// https://github.com/react-navigation/react-navigation/issues/10175
// https://github.com/software-mansion/react-native-screens/issues/1276
// https://github.com/software-mansion/react-native-screens/issues/1251
const nav = createStackNavigator<HomeStackParamList>();

const ScreenName = 'HomeStackNav';
const Screen: React.FC = () => {
  const {LogoutButton} = useLogoutButton();
  return (
    <nav.Navigator screenOptions={{headerRight: LogoutButton}}>
      <nav.Screen {...HomeScreen} />
    </nav.Navigator>
  );
};

export const HomeStackNav: TabScreenConfig<MainTabParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    tabBarAccessibilityLabel: 'Home',
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color} />,
  },
};
