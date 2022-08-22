import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const QuestionAndEventPostPage: React.VFC = () => {
  return (
    <View style={styles.container} testID="QuestionAndEventPostPage">
      <Text>開発中</Text>
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
