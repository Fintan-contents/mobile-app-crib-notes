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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import {m} from 'bases/message/Message';
import {HomeIllustration} from 'bases/ui/illustration/HomeIllustration';
import {PeopleIllustration} from 'bases/ui/illustration/PeopleIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React, {useMemo} from 'react';

import {AccountStackNav} from './AccountStackNav';
import {HomeStackNav} from './HomeStackNav';
import {MainTabParamList} from './types';
import {useRedirectDeepLinkUrl} from '../client-states/useRedirectDeepLinkUrl';
import {withInitialData} from '../components/withInitialData';
import {parseDeepLinkUrl} from '../services/deep-link/parseDeepLinkUrl';
import {DeepLink, deepLinks} from '../use-cases/deep-link/deepLinks';

const nav = createBottomTabNavigator<MainTabParamList>();

const getInitialRouteName = (
  initialData: AppInitialData,
  deepLinks: DeepLink[],
  deepLinkUrl?: string,
): keyof MainTabParamList => {
  if (deepLinkUrl) {
    const parsedUrl = parseDeepLinkUrl(deepLinkUrl);
    if (!parsedUrl) {
      return 'HomeStackNav';
    }
    const found = deepLinks.find(deepLink => deepLink.matchUrl(parsedUrl));
    return found?.mainTabNavInitialRouteName ?? 'HomeStackNav';
  }
  return 'HomeStackNav';
};
type Props = {
  initialData: AppInitialData;
};
const Component: React.FC<Props> = ({initialData}) => {
  const [redirectDeepLinkUrl] = useRedirectDeepLinkUrl();
  const initialRouteName = useMemo(
    () => getInitialRouteName(initialData, deepLinks, redirectDeepLinkUrl),
    [initialData, redirectDeepLinkUrl],
  );
  const theme = useTheme<RestyleTheme>();

  return (
    <nav.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.colors.orange1},
      }}>
      <nav.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarLabel: m('ホーム'),
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.grey2,
          headerShown: false,
          tabBarIcon: ({focused}) => <HomeIllustration tintColor={focused ? undefined : 'grey2'} />,
        }}
      />
      <nav.Screen
        name="AccountStackNav"
        component={AccountStackNav}
        options={{
          tabBarAccessibilityLabel: 'User',
          tabBarLabel: m('ユーザー'),
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.grey2,
          headerShown: false,
          tabBarIcon: ({focused}) => <PeopleIllustration color={focused ? 'white' : 'grey2'} />,
        }}
      />
    </nav.Navigator>
  );
};

export const useMainTabNav = (initialData: AppInitialData) => {
  return useMemo(() => withInitialData(initialData, Component), [initialData]);
};
