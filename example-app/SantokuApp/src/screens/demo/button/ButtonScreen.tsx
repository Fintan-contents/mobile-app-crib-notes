import {Button} from 'components/button/Button';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';

const handlePress = () => {
  Alert.alert('clicked');
};

const ScreenName = 'Button';
const Screen: React.FC = () => {
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

export const ButtonScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Button',
    presentation: 'formSheet' as const,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
