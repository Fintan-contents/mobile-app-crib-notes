import {m} from 'framework';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useNavigateToDemoStackScreen} from 'screens/useNavigateToScreen';

const ScreenName = 'TeamDetail';
const Screen: React.FC = () => {
  const onGoToDemoScreen = useNavigateToDemoStackScreen('Demo');

  return (
    <View style={styles.container} testID="TeamDetailScreen">
      <Text h2>開発中</Text>
      {__DEV__ && <Button title="Go to Demo" onPress={onGoToDemoScreen} />}
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

export const TeamDetailScreen = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('チーム詳細'),
  }),
};
