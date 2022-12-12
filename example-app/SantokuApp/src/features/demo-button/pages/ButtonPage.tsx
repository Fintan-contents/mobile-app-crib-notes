import {Button} from 'bases/ui/button/Button';
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';

const handlePress = () => {
  Alert.alert('clicked');
};

export const ButtonPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button title="Small" onPress={handlePress} />
      <Button title="Middle" size="middle" />
      <Button title="Large" size="large" />
      <Button title="Full" size="full" />
      <Button
        title="custom style"
        size="large"
        buttonStyle={{backgroundColor: 'red', width: 340}}
        containerStyle={{width: 340}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
