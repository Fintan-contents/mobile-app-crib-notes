import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {NavigationState, RouteConfig, TabNavigationState} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NativeStackNavigationEventMap} from '@react-navigation/native-stack/lib/typescript/src/types';
import type {ParamListBase} from '@react-navigation/routers';

declare global {
  type NativeStackScreenConfig<ParamList extends ParamListBase, RouteName extends keyof ParamList> = RouteConfig<
    ParamList,
    RouteName,
    NavigationState<ParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  >;

  type TabScreenConfig<ParamList extends ParamListBase, RouteName extends keyof ParamList> = RouteConfig<
    ParamList,
    RouteName,
    TabNavigationState<ParamList>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >;
}
