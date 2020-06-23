import React from 'react';
// ReactNativeを使用したコンポーネントの呼び出し
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Container, Content, ListItem } from 'native-base';
// 幅と高さを取得する
const { width: DEVICE_WIDTH } = Dimensions.get('window');

type Menu = {
  to: string;
  navigation: any;
  children: React.ReactNode;
};

const MenuItem = (props: Menu) => {
  return (
    <ListItem
      onPress={() => {
        props.navigation.navigate(props.to);
      }}
      style={styles.listItem}
    >
      <Text style={styles.menuTextStyle}>{props.children}</Text>
    </ListItem>
  );
};

export default function DrawerContent(props: any) {
  return (
    <Container style={styles.containerBackgroundStyle}>
      <View style={styles.containerHeaderStyle}>
        <View style={styles.overlayStyle}>
          <Text
            style={styles.overlayTextStyle}
            onPress={() => {
              props.navigation.navigate('TopDrawer');
            }}
          >
            SantokuApp
          </Text>
        </View>
      </View>
      <Content>
        <MenuItem {...props} to="NativeWithWebViewDrawer">
          ネイティブとWebViewの連携
        </MenuItem>
        <MenuItem {...props} to="AuthDrawer">
          認証・認可
        </MenuItem>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  containerHeaderStyle: {
    height: 160,
    backgroundColor: '#9DC6BF',
    position: 'relative',
  },
  containerHeaderImageStyle: {
    height: 160,
    width: DEVICE_WIDTH - 80,
  },
  overlayStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: '#9DC6BF',
  },
  overlayTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerBackgroundStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuTextStyle: {
    paddingLeft: 8,
  },
  listItem: {
    height: 60,
  },
});
