import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, List, ListItem, Text } from 'native-base';

import { useNavigation } from '@react-navigation/native';

const menu = [
  {
    title: 'ステートフルな認証',
    pageName: 'StatefulAuthIntegration',
  },
];

const NativeWithWebView: React.FC = () => {
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
};

export default NativeWithWebView;

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});
