/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {DefaultRouterOptions, NavigatorScreenParams} from '@react-navigation/native';
import {ThirdPartyDependency} from 'features/acknowledgements/types/ThirdPartyDependency';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

export type RootStackParamList = {
  Login: undefined;
  ProfileRegistration: TermsOfServiceAgreementStatus;
  AuthenticatedStackNav: NavigatorScreenParams<AuthenticatedStackParamList> | undefined;
  DemoStackNav: NavigatorScreenParams<DemoStackParamList> | undefined;
};

export type AuthenticatedStackParamList = {
  MainTabNav: NavigatorScreenParams<MainTabParamList> | undefined;
  QuestionDetail: {questionId: string};
  QuestionAndEventStackNav: NavigatorScreenParams<QuestionAndEventPostStackParamList> | undefined;
};

export type MainTabParamList = {
  HomeStackNav: NavigatorScreenParams<HomeStackParamList> | undefined;
  AccountStackNav: NavigatorScreenParams<AccountStackParamList> | undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type QuestionAndEventPostStackParamList = {
  QuestionAndEventPost: undefined;
};

export type AccountStackParamList = {
  ProfileDetail: undefined;
};

export type DemoStackParamList = {
  Acknowledgements: undefined;
  AppInfo: undefined;
  AppState: undefined;
  Config: undefined;
  DemoMenu: undefined;
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
  License: {dependency: ThirdPartyDependency};
  LocalAuthentication: undefined;
  Authentication: undefined;
  HttpApi: undefined;
  Navigation: undefined;
  Picker: undefined;
  PushNotificationSender: undefined;
  PushNotificationStatus: undefined;
  Cache: undefined;
  QRCode: undefined;
  Barcode: undefined;
  ListTodoDemo: undefined;
  CreateTodoDemo: undefined;
  EditTodoDemo: {
    todoId: number;
  };
  ReactQueryDemo: undefined;
  DisabledQueryDemo: undefined;
  DependentQueryDemo1: undefined;
  DependentQueryDemo2: undefined;
  DependentQueryDemo3: undefined;
  DisableErrorHandlerDemo: undefined;
  GetAccountsMeDemo: undefined;
  SearchFormTodoDemo: undefined;
  SearchBarTodoDemo: undefined;
  Map: undefined;
  DeepLink: undefined;
};

export type AppNavigatorOptions = {
  RootStackNav?: DefaultRouterOptions<keyof RootStackParamList>;
  AuthenticatedStackNav?: DefaultRouterOptions<keyof AuthenticatedStackParamList>;
  MainTabNav?: DefaultRouterOptions<keyof MainTabParamList>;
  HomeStackNav?: DefaultRouterOptions<keyof HomeStackParamList>;
  AccountStackNav?: DefaultRouterOptions<keyof AccountStackParamList>;
};

export type NavigationParameter<
  ParamList,
  RouteName extends keyof ParamList = keyof ParamList,
> = undefined extends ParamList[RouteName]
  ? [RouteName] | [RouteName, ParamList[RouteName]]
  : [RouteName, ParamList[RouteName]];
