import React, {useMemo} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

import {getReactNativeElementsTheme} from './ReactNativeElementsTheme';
import {darkModeAppTheme} from './darkModeAppTheme';
import {lightModeAppTheme} from './lightModeAppTheme';
import {AppThemeContextProvider} from './useAppTheme';

const getAppTheme = (colorScheme: ColorSchemeName) => (colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme);

const AppThemeProvider: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  const appTheme = getAppTheme(colorScheme);
  const reactNativeElementsTheme = useMemo(() => getReactNativeElementsTheme(appTheme), [appTheme]);

  return (
    <AppThemeContextProvider value={appTheme}>
      <ThemeProvider theme={reactNativeElementsTheme}>{children}</ThemeProvider>
    </AppThemeContextProvider>
  );
};

export {AppThemeProvider};
