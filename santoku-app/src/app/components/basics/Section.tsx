import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import type {RnViewStyleProp} from 'native-base';

type Props = {
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
};

const Section: React.FC<Props> = ({style, children}) => {
  return <View style={[styles.section, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
    marginBottom: 24,
  },
});

export default Section;
