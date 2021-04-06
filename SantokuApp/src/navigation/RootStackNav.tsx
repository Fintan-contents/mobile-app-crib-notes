import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Instructions} from 'screens';

const nav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={Home.name}>
      <nav.Screen name="Home" component={Home} options={{headerShown: false}} />
      <nav.Screen name="Instructions" component={Instructions} />
    </nav.Navigator>
  );
};
