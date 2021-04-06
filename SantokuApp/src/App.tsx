import {NavigationContainer} from '@react-navigation/native';
import {RootStackNav} from 'navigation';
import React from 'react';

export const App = () => {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};
