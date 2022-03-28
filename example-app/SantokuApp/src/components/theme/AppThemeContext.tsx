import {createUseContextAndProvider} from 'framework/utilities';
import React, {useMemo} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

import {AppTheme, darkModeAppTheme, lightModeAppTheme} from './AppTheme';
import {getReactNativeElementsTheme} from './ReactNativeElementsTheme';

const getAppTheme = (colorScheme: ColorSchemeName) => (colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme);

const [useAppTheme, AppThemeContextProvider] = createUseContextAndProvider<AppTheme>();

const WithAppTheme: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  const appTheme = getAppTheme(colorScheme);
  const reactNativeElementsTheme = useMemo(() => getReactNativeElementsTheme(appTheme), [appTheme]);

  return (
    <AppThemeContextProvider value={appTheme}>
      <ThemeProvider theme={reactNativeElementsTheme}>{children}</ThemeProvider>
    </AppThemeContextProvider>
  );
};

export {useAppTheme, WithAppTheme, AppThemeContextProvider};