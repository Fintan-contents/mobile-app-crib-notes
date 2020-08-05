import React from 'react';
import { Container, Title, Text } from '../../basics';

const Top: React.FC = () => {
  return (
    <Container>
      <Title>ツールを決める、ときの考え方</Title>
      <Text>・1本目の包丁として三徳包丁を（ふつうは）選ぶように、我々も1つめのツールとして選ぶ</Text>
      <Text>
        ・三徳包丁でクエを捌くのが現実的じゃなくて出刃包丁が必要になるように、我々のツールで捌けない案件なら別のツールの使い方を学ぶしかないと割り切る
      </Text>
      <Title>そう考えたとしても、決め手に欠ける</Title>
      <Text>・関孫六がいいのかヘンケルスがいいのか</Text>
      <Text>・実際（三徳包丁としては）どれでもいいはずで、結局は好みだと思う なので、自分たちが惚れ込めるツールを選ぶ</Text>
    </Container>
  );
};

export default Top;
