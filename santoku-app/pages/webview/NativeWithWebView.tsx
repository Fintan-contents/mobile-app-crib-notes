import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, List, ListItem, Text } from 'native-base';

import { useNavigation } from '@react-navigation/native';

const menu = [
  {
    title: 'シームレスな画面遷移',
    pageName: '',
  },
  {
    title: 'データの受け渡し',
    pageName: '',
  },
  {
    title: 'イベントのトリガー',
    pageName: '',
  },
  {
    title: '認証の連携',
    pageName: '',
  },
  {
    title: 'モバイルの標準ブラウザと情報を共有',
    pageName: '',
  },
];

export default function NativeWithWebView() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <View style={styles.view}>
        <List>
          {menu.map((l, i) => {
            return (
              <ListItem
                key={i}
                onPress={() => {
                  navigate(l.pageName);
                }}
              >
                <Text>{l.title}</Text>
              </ListItem>
            );
          })}
        </List>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});
