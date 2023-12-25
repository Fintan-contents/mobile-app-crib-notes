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

import {StackActions} from '@react-navigation/core';
import {NavigationContainerRef} from '@react-navigation/native';
import type {ParsedURL} from 'expo-linking';

import type {DeepLink} from './deepLinks';
import {pathWithPrefix} from './pathWithPrefix';
import type {MainTabParamList, RootStackParamList} from '../../navigators/types';

const matchUrl = (parsedUrl: ParsedURL) => parsedUrl.path === pathWithPrefix('demo/app-info');
const handle = (navigation: NavigationContainerRef<RootStackParamList>) => {
  navigation.dispatch(StackActions.push('DemoStackNav', {screen: 'AppInfo'}));
};
const mainTabNavInitialRouteName: keyof MainTabParamList = 'AccountStackNav';
export const demoAppInfoDeepLink: DeepLink = {
  matchUrl,
  handle,
  mainTabNavInitialRouteName,
};
