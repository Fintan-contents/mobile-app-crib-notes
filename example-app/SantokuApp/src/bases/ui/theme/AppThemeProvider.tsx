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

import {ThemeProvider as RestyleThemeProvider} from '@shopify/restyle';
import React, {useMemo} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider as RNEThemeProvider} from 'react-native-elements';

import {getReactNativeElementsTheme} from './ReactNativeElementsTheme';
import {darkModeAppTheme} from './darkModeAppTheme';
import {lightModeAppTheme} from './lightModeAppTheme';
import {restyleTheme} from './restyleTheme';
import {AppThemeContextProvider} from './useAppTheme';

const getAppTheme = (colorScheme: ColorSchemeName) => (colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme);

const AppThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const colorScheme = useColorScheme();
  const appTheme = getAppTheme(colorScheme);
  const reactNativeElementsTheme = useMemo(() => getReactNativeElementsTheme(appTheme), [appTheme]);

  return (
    <AppThemeContextProvider value={appTheme}>
      <RestyleThemeProvider theme={restyleTheme}>
        <RNEThemeProvider theme={reactNativeElementsTheme}>{children}</RNEThemeProvider>
      </RestyleThemeProvider>
    </AppThemeContextProvider>
  );
};

export {AppThemeProvider};
