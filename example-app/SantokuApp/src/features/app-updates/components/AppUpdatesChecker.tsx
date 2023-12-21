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

import * as Application from 'expo-application';
import React, {useEffect} from 'react';

import {useAppUpdates} from '../services/useAppUpdates';
import {showUpdateRequiredDialog} from '../use-cases/showUpdateRequiredDialog';

const AppUpdatesChecker: React.FC<React.PropsWithChildren> = ({children}) => {
  const {appUpdates} = useAppUpdates();

  useEffect(() => {
    if (appUpdates?.updateRequired) {
      showUpdateRequiredDialog(Application.nativeApplicationVersion!);
    }
  }, [appUpdates]);
  if (appUpdates === undefined || appUpdates.updateRequired) {
    return null;
  }

  return <>{children}</>;
};

export {AppUpdatesChecker};
