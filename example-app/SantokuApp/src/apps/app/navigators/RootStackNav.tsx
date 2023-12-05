/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {handleError} from 'bases/core/errors/handleError';
import {m} from 'bases/message/Message';
import {registerDevMenuItems} from 'expo-dev-menu';
import {useIsLoggedIn} from 'features/account/client-states/useIsLoggedIn';
import React, {useEffect, useMemo} from 'react';

import {useAuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';
import {useDefaultScreenOptions} from './useDefaultScreenOptions';
import {LoginScreen} from '../screens/account/LoginScreen';
import {ProfileRegistrationScreen} from '../screens/account/ProfileRegistrationScreen';
import {hideSplashScreen} from '../services/hideSplashScreen';
import {AppInitialData} from '../types/AppInitialData';

const nav = createNativeStackNavigator<RootStackParamList>();

const invisibleHeaderOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const getInitialRouteName = (isLoggedIn?: boolean) => {
  if (isLoggedIn) {
    return 'AuthenticatedStackNav';
  }
  return 'Login';
};

const useRootStackNavigator = (initialData: AppInitialData) => {
  const [isLoggedIn] = useIsLoggedIn();
  const initialRouteName = useMemo(() => getInitialRouteName(isLoggedIn), [isLoggedIn]);
  const authenticatedStackNav = useAuthenticatedStackNav(initialData);
  const defaultScreenOptions = useDefaultScreenOptions();

  useEffect(() => {
    hideSplashScreen().catch(e => {
      handleError(e);
    });
  }, []);

  return (
    <nav.Navigator screenOptions={defaultScreenOptions} initialRouteName={initialRouteName}>
      {isLoggedIn ? (
        <>
          <nav.Group screenOptions={invisibleHeaderOptions}>
            <nav.Screen
              name="AuthenticatedStackNav"
              component={authenticatedStackNav}
              options={{
                headerShown: false,
              }}
            />
          </nav.Group>
          <nav.Group screenOptions={invisibleHeaderOptions}>
            <nav.Screen {...DemoStackNav} name="DemoStackNav" component={DemoStackNav} />
          </nav.Group>
        </>
      ) : (
        <>
          <nav.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: m('ログイン'),
              animation: 'fade',
            }}
          />
          <nav.Screen
            name="ProfileRegistration"
            component={ProfileRegistrationScreen}
            options={{
              title: m('プロフィール登録'),
              animation: 'slide_from_bottom',
            }}
          />
        </>
      )}
    </nav.Navigator>
  );
};

export const RootStackNav: React.FC<{initialData: AppInitialData}> = ({initialData}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (__DEV__) {
      registerDevMenuItems([
        {
          name: 'Go to Demo',
          callback: () => {
            navigation.navigate('DemoStackNav', {screen: 'DemoMenu'});
          },
        },
      ]).catch(console.warn);
    }
  }, [navigation]);

  return useRootStackNavigator(initialData);
};
