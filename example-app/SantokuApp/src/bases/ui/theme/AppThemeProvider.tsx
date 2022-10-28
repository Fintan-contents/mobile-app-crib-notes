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
