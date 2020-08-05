import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base';
import type { RnViewStyleProp } from 'native-base';

type Props = {
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
};

const AppContainer: React.FC<Props> = ({ style, children }) => {
  return (
    <ScrollView>
      <Container style={[styles.container, style]}>{children}</Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingTop: 24,
    paddingBottom: 24,
  },
});

export default AppContainer;
