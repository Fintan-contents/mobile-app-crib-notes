import {DefaultRouterOptions, NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  TermsOfServiceAgreement: undefined;
  AuthenticatedStackNav: NavigatorScreenParams<AuthenticatedStackParamList> | undefined;
  DemoStackNav: NavigatorScreenParams<DemoStackParamList> | undefined;
};

export type AuthenticatedStackParamList = {
  MainTabNav: NavigatorScreenParams<MainTabParamList> | undefined;
};

export type MainTabParamList = {
  HomeStackNav: NavigatorScreenParams<HomeStackParamList> | undefined;
  TeamStackNav: NavigatorScreenParams<TeamStackParamList> | undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type TeamStackParamList = {
  TeamDetail: undefined;
};

export type DemoStackParamList = {
  AppInfo: undefined;
  AppState: undefined;
  Config: undefined;
  Demo: undefined;
  ErrorCase: undefined;
  ErrorInEventHandler: undefined;
  ErrorInNativeModule: undefined;
  ErrorInReactComponent: undefined;
  ErrorInUseEffectAsyncProcess: undefined;
  ErrorInUseEffect: undefined;
  ErrorInUseEffectSyncProcess: undefined;
  Instructions: undefined;
  Log: undefined;
  Message: undefined;
  Button: undefined;
  Snackbar: undefined;
  LocalAuthentication: undefined;
  Authentication: undefined;
  HttpApi: undefined;
  Navigation: undefined;
  PushNotification: undefined;
};

export type AppNavigatorOptions = {
  RootStackNav?: DefaultRouterOptions<keyof RootStackParamList>;
  AuthenticatedStackNav?: DefaultRouterOptions<keyof AuthenticatedStackParamList>;
  MainTabNav?: DefaultRouterOptions<keyof MainTabParamList>;
  HomeStackNav?: DefaultRouterOptions<keyof HomeStackParamList>;
  TeamStackNav?: DefaultRouterOptions<keyof TeamStackParamList>;
};

export type NavigationParameter<
  ParamList,
  RouteName extends keyof ParamList = keyof ParamList,
> = undefined extends ParamList[RouteName]
  ? [RouteName] | [RouteName, ParamList[RouteName]]
  : [RouteName, ParamList[RouteName]];
