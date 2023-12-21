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

import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useAppTheme} from 'bases/ui/theme/useAppTheme';
import {useMemo} from 'react';

export const useDefaultScreenOptions: () => NativeStackNavigationOptions = () => {
  const appTheme = useAppTheme();
  return useMemo(
    () => ({
      contentStyle: {
        backgroundColor: appTheme.colors.background,
      },
      headerStyle: {backgroundColor: appTheme.colors.backgroundHeader},
      headerTitleStyle: {
        fontSize: 17,
        color: appTheme.colors.textStrong,
      },
    }),
    [appTheme.colors.background, appTheme.colors.backgroundHeader, appTheme.colors.textStrong],
  );
};
