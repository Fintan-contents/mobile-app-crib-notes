import {Button} from 'components/button/Button';
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';

const handlePress = () => {
  Alert.alert('clicked');
};

const ScreenName = 'Button';
const Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button title="あいうえ" onPress={handlePress} />
      <Button title="あいうえおか" size="middle" />
      <Button title="あいうえおかきくけこ" size="large" />
      <Button title="ボタン" size="full" />
    </View>
  );
};

export const ButtonScreen = {
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
