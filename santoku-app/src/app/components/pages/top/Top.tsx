import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Title, Text} from '../../basics';

const Top: React.FC = () => {
  return (
    <Container>
      <Title>モバイルアプリケーションの認証</Title>
      <Text style={styles.text}>
        モバイルアプリケーションは多種多様ですが、多くのアプリケーションでユーザ認証は必要になります。
        ここでは、ユーザ認証ついてプロジェクトで参考にできる、サンプルアプリケーションのソースコードを用意しています。{'\n\n'}
        ソースコードを参照して、開発者が実際の開発を進めやすいようにするのが目的です。{'\n\n'}
        サンプルアプリケーションではReact Nativeを使っています。{'\n'}
        そのためReact Nativeを使うプロジェクトで同じユースケースであればソースコードを流用可能です。
      </Text>
    </Container>
  );
};

export default Top;

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
  },
});
