import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

export type ProfileDetailPageProps = {
  navigateToDemo: () => void;
};
export const ProfileDetailPage: React.FC<ProfileDetailPageProps> = ({navigateToDemo}) => {
  return (
    <View style={styles.container} testID="ProfileDetailPage">
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
