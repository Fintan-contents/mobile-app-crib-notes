import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';

export default function Top() {
  return (
    <Container>
      <View style={styles.view}>
        <Text style={styles.title}>ツールを決める、ときの考え方{'\n'}</Text>
        <Text>
          ・1本目の包丁として三徳包丁を（ふつうは）選ぶように、我々も1つめのツールとして選ぶ{'\n\n'}
          ・三徳包丁でクエを捌くのが現実的じゃなくて出刃包丁が必要になるように、我々のツールで捌けない案件なら別のツールの使い方を学ぶしかないと割り切る
        </Text>
        <Text>{'\n\n'}</Text>
        <Text style={styles.title}>そう考えたとしても、決め手に欠ける{'\n'}</Text>
        <Text>
          ・関孫六がいいのかヘンケルスがいいのか{'\n\n'}
          ・実際（三徳包丁としては）どれでもいいはずで、結局は好みだと思う なので、自分たちが惚れ込めるツールを選ぶ
        </Text>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  view: {
    margin: 10,
  },
});
