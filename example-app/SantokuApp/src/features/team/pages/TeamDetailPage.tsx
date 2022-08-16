import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

export type TeamDetailPageProps = {
  navigateToDemo: () => void;
};
export const TeamDetailPage: React.VFC<TeamDetailPageProps> = ({navigateToDemo}) => {
  return (
    <View style={styles.container} testID="TeamDetailPage">
      <Text h2>開発中</Text>
      <Button title="Go to Demo" onPress={navigateToDemo} />
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
