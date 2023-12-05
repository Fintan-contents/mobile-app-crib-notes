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

import {ApplicationError} from 'bases/core/errors/ApplicationError';
import * as Application from 'expo-application';
import {getAppUpdates} from 'features/backend/apis/system/system';
import {Platform} from 'react-native';

export const requestAppUpdates = async (
  type: typeof Platform.OS,
  version: typeof Application.nativeApplicationVersion,
  signal?: AbortSignal,
) => {
  if (type !== 'ios' && type !== 'android') {
    throw new ApplicationError(`Not supported type. type=[${type}]`);
  }
  if (!version) {
    throw new ApplicationError(`Invalid version. version=[${String(version)}]`);
  }

  const response = await getAppUpdates(type, version, signal);
  return response.data;
};
