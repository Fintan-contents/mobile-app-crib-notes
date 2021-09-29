import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Container, Content, NativeBase} from 'native-base';

const AppContainer: React.FC<NativeBase.Content> = ({children, ...props}) => {
  return (
    <Container style={styles.container}>
      <Content style={[styles.content]} {...defaultProps} {...props}>
        <SafeAreaView>{children}</SafeAreaView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  content: {
    padding: 12,
  },
});

const defaultProps: NativeBase.Content = {
  scrollEnabled: true,
  contentInset: {bottom: 12},
};

export default AppContainer;
