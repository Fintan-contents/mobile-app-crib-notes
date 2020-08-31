import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import StatefulAuthIntegration from './webview/StatefulAuthIntegration';
import StatelessAuth from './auth/StatelessAuth';
import Top from './top/Top';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const TopScreenStack = createStackNavigator();

const TopScreen: React.FC = () => {
  const { dispatch } = useNavigation();
  return (
    <TopScreenStack.Navigator>
      <TopScreenStack.Screen
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
    </TopScreenStack.Navigator>
  );
};

const DisplayWebAppStack = createStackNavigator();

const DisplayWebAppStackScreen: React.FC = () => {
  const { dispatch } = useNavigation();
  return (
    <DisplayWebAppStack.Navigator>
      <DisplayWebAppStack.Screen
        name="DisplayWebApp"
        component={StatefulAuthIntegration}
        options={{
          title: 'Webアプリケーションの表示',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </DisplayWebAppStack.Navigator>
  );
};

const StatelessAuthStack = createStackNavigator();

const StatelessAuthScreen: React.FC = () => {
  const { dispatch } = useNavigation();
  return (
    <StatelessAuthStack.Navigator>
      <StatelessAuthStack.Screen
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
    </StatelessAuthStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const Navigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="TopDrawer" component={TopScreen} />
      <Drawer.Screen name="DisplayWebApp" component={DisplayWebAppStackScreen} />
      <Drawer.Screen name="StatelessAuth" component={StatelessAuthScreen} />
    </Drawer.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  icon: {
    color: 'black',
  },
});
