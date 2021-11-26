// import時の副作用を防ぐためにimport typeにしてます。
import type crashlyticsModule from '@react-native-firebase/crashlytics';
import {NavigationContainer} from '@react-navigation/native';
import {WithInitializeContext} from 'components/initialize';
import {RootStackNav} from 'navigation';
import React from 'react';

import {WithSnackbar} from './components/snackbar/';
import {WithAppTheme} from './components/theme';

export const App = () => {
  return (
    <WithInitializeContext>
      <WithAppTheme>
        <WithSnackbar>
          <NavigationContainer>
            <RootStackNav />
          </NavigationContainer>
        </WithSnackbar>
      </WithAppTheme>
    </WithInitializeContext>
  );
};
