import {Button} from 'bases/ui/button/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export type NavigationPageProps = {
  navigateToSnackbarDemo: () => void;
  navigateToHomeStack: () => void;
  navigateToAccountStack: () => void;
};

export const NavigationPage: React.FC<NavigationPageProps> = ({
  navigateToSnackbarDemo,
  navigateToHomeStack,
  navigateToAccountStack,
}) => {
  return (
    <View style={styles.container}>
      <Button size="large" title="Go to Snackbar Demo" onPress={navigateToSnackbarDemo} />
      <Button size="large" title="Go to Home" onPress={navigateToHomeStack} />
      <Button size="large" title="Go to Account" onPress={navigateToAccountStack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
