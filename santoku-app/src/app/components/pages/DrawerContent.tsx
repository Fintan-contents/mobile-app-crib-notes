import React from 'react';
// ReactNativeを使用したコンポーネントの呼び出し
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Container, Content, ListItem } from 'native-base';

type MenuProps = {
  to: string;
  navigation: any;
};

const MenuItem: React.FC<MenuProps> = (props) => {
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

type Props = {
  to: string;
  navigation: any;
};

const DrawerContent: React.FC<Props> = (props) => {
  return (
    <Container style={styles.containerBackgroundStyle}>
      <SafeAreaView style={styles.headerStyle}>
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
      </SafeAreaView>
      <Content>
        <MenuItem {...props} to="AuthIntegrationWithWebApps">
          Webアプリとの認証情報の連携
        </MenuItem>
        <MenuItem {...props} to="StatelessAuth">
          ステートレスな認証
        </MenuItem>
        <MenuItem {...props} to="PushNotification">
          プッシュ通知
        </MenuItem>
      </Content>
    </Container>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  containerHeaderStyle: {
    height: 160,
    position: 'relative',
  },
  headerStyle: {
    backgroundColor: '#9DC6BF',
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
