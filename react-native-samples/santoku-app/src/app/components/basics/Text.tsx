import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';
import type {RnViewStyleProp} from 'native-base';

type Props = {
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
};

const AppText: React.FC<Props> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 32,
  },
});

export default AppText;
