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

import {NavigationContainerRef} from '@react-navigation/native';
import {ParsedURL} from 'expo-linking';

import {demoAppInfoDeepLink} from './demoAppInfoDeepLink';
import {homeDeepLink} from './homeDeepLink';
import {questionDetailDeepLink} from './questionDetailDeepLink';
import {MainTabParamList, RootStackParamList} from '../../navigators/types';

export type DeepLink = {
  matchUrl: (parsedUrl: ParsedURL) => boolean | undefined;
  handle: (navigation: NavigationContainerRef<RootStackParamList>, parsedUrl: ParsedURL) => void;
  mainTabNavInitialRouteName: keyof MainTabParamList;
};
export const deepLinks = [homeDeepLink, questionDetailDeepLink, demoAppInfoDeepLink];
