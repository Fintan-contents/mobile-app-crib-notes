import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const QuestionDetailPage: React.VFC = () => {
  return (
    <View style={styles.container} testID="QuestionDetailPage">
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
