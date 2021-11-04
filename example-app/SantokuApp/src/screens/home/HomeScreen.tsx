import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const ScreenName = 'Home';
const Screen: React.FC = () => {
  return (
    <View style={styles.container} testID="HomeScreen">
      <Text h2>開発中</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Navigatorに登録する情報
export const HomeScreen = {
  component: Screen,
  name: ScreenName,
  options: {
    title: 'ホーム',
  },
};
