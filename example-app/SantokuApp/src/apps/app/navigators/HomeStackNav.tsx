import {createStackNavigator} from '@react-navigation/stack';
import {m} from 'bases/message/Message';
import React from 'react';

import {HomeScreen} from '../screens/qa-home/HomeScreen';
import {HomeStackParamList} from './types';
import {useLogoutButton} from './useLogoutButton';

// FIXME: Bottom Tabs + Native Stackでは、Androidで画面がチカチカする事象が発生したため、Stackを使用しています。
// （以下のissueではiOSでも発生すると記載されているので、確認できていないだけでiOSでも発生する可能性があります。）
// https://github.com/react-navigation/react-navigation/issues/10175
// https://github.com/software-mansion/react-native-screens/issues/1276
// https://github.com/software-mansion/react-native-screens/issues/1251
const nav = createStackNavigator<HomeStackParamList>();

export const HomeStackNav: React.FC = () => {
  const {LogoutButton} = useLogoutButton();
  return (
    <nav.Navigator screenOptions={{headerRight: LogoutButton}}>
      <nav.Screen component={HomeScreen} name="Home" options={{title: m('ホーム')}} />
    </nav.Navigator>
  );
};
