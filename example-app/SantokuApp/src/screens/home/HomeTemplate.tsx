import React from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Button, Text, Theme} from 'react-native-elements';

export type HomeTemplateProps = {
  theme: Theme;
  onGoToInstructionButtonPress?: (event: GestureResponderEvent) => void;
  onViewApplicationInformationButtonPress?: (event: GestureResponderEvent) => void;
  onGoToDemoButtonPress?: (event: GestureResponderEvent) => void;
  testID?: string;
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  theme,
  onGoToInstructionButtonPress,
  onViewApplicationInformationButtonPress,
  onGoToDemoButtonPress,
  testID,
}) => (
  <View style={StyleSheet.flatten([styles.container, {backgroundColor: theme.colors?.primary}])} testID={testID}>
    <Text h1 style={styles.textColor} testID="HelloWorld">
      Hello, World!
    </Text>
    <Button title="Go to instructions" onPress={onGoToInstructionButtonPress} testID="goToInstructionsButton" />
    <Button
      title="View application information"
      onPress={onViewApplicationInformationButtonPress}
      testID="viewApplicationInformationButton"
    />
    <Button title="Demo" onPress={onGoToDemoButtonPress} testID="goToDemoButton" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#fefefe',
  },
});
