import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import type { RnViewStyleProp } from 'native-base';

type Props = {
  value: string;
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
  onPress?: () => void;
};

const TextButton: React.FC<Props> = ({ value, style, onPress = () => true }) => {
  return (
    <Button full primary style={[styles.button, style]} onPress={onPress}>
      <Text>{value}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
});

export default TextButton;
