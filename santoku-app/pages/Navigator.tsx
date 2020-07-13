import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import NativeWithWebView from './webview/NativeWithWebView';
import StatefulAuthIntegration from './webview/StatefulAuthIntegration';
import Auth from './auth/Auth';
import StatelessAuth from './auth/StatelessAuth';
import Top from './Top';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const TopScreen = () => {
  const Stack = createStackNavigator();
  const { dispatch } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Top"
        component={Top}
        options={{
          title: 'Top',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const NativeWithWebViewScreen = () => {
  const Stack = createStackNavigator();
  const { dispatch } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="nativeWithWebView"
        component={NativeWithWebView}
        options={{
          title: '既存Web資産との連携',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="StatefulAuthIntegration"
        component={StatefulAuthIntegration}
        options={{
          title: 'ステートフルな認証',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const AuthScreen = () => {
  const Stack = createStackNavigator();
  const { dispatch } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          title: '認証・認可',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="StatelessAuth"
        component={StatelessAuth}
        options={{
          title: 'ステートレスな認証',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
export default function Navigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="TopDrawer" component={TopScreen} />
      <Drawer.Screen name="NativeWithWebViewDrawer" component={NativeWithWebViewScreen} />
      <Drawer.Screen name="AuthDrawer" component={AuthScreen} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    color: 'black',
  },
});
