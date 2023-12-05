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

import firebase from '@react-native-firebase/app';
import * as Application from 'expo-application';
import {Platform} from 'react-native';

export const info = [
  {
    name: 'Application Name',
    value: Application.applicationName,
  },
  {
    name: Platform.select({android: 'Application ID', ios: 'Bundle Identifier'}),
    value: Application.applicationId,
  },
  {
    name: 'Application Version',
    value: Application.nativeApplicationVersion,
  },
  {
    name: 'Build Version',
    value: Application.nativeBuildVersion,
  },
  {
    name: 'Development mode',
    value: __DEV__ ? 'true' : 'false',
  },
  {
    name: 'Firebase App Name',
    value: firebase.app().name,
  },
  {
    name: 'Firebase Project ID',
    value: firebase.app().options.projectId,
  },
  {
    name: 'Firebase App ID',
    value: firebase.app().options.appId,
  },
];
