import React from 'react';
import {StyleSheet, View} from 'react-native';

import AuthnTestScreen from './AuthnTestScreen';

const ScreenName = 'Authn';
const Screen = () => {
  return (
    <View style={styles.container}>
      <AuthnTestScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export const AuthnScreen = {
  name: ScreenName,
  component: Screen,
};
