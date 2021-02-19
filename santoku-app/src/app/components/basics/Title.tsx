import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import {Text} from 'native-base';
import type {RnViewStyleProp} from 'native-base';

type Props = {
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
};

const Title: React.FC<Props> = ({children, style}) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

interface Style {
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    height: 24,
    lineHeight: 24,
    borderLeftColor: 'black',
    borderLeftWidth: 4,
    paddingLeft: 8,
    marginBottom: 12,
  },
});

export default Title;
