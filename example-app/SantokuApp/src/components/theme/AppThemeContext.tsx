import React, {createContext, useMemo} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

import {AppTheme, darkModeAppTheme, lightModeAppTheme} from './AppTheme';
import {getReactNativeElementsTheme} from './ReactNativeElementsTheme';

const getAppTheme = (colorScheme: ColorSchemeName) => (colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme);

const AppThemeContext = createContext<AppTheme>(lightModeAppTheme);

const WithAppTheme: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  const appTheme = getAppTheme(colorScheme);
  const reactNativeElementsTheme = useMemo(() => getReactNativeElementsTheme(appTheme), [appTheme]);

  return (
    <AppThemeContext.Provider value={appTheme}>
      <ThemeProvider theme={reactNativeElementsTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export {AppThemeContext, WithAppTheme};
