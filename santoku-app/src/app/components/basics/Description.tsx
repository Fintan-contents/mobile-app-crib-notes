import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'native-base';
import type {RnViewStyleProp} from 'native-base';

type Props = {
  card?: {
    style?: RnViewStyleProp | Array<RnViewStyleProp>;
  };
  text?: {
    style?: RnViewStyleProp | Array<RnViewStyleProp>;
  };
};

const Description: React.FC<Props> = ({children, card, text}) => {
  return (
    <Card style={[styles.card, card?.style]}>
      <Text style={[styles.description, text?.style]}>{children}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    marginBottom: 16,
  },
  description: {
    padding: 16,
  },
});

export default Description;
