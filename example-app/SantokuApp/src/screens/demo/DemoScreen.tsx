import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'navigation/types';
import React, {useMemo} from 'react';

import {DemoLinkItemData} from './DemoLinkItem';
import {DemoTemplate} from './DemoTemplate';
import {AppStateScreen} from './app-state';
import {AuthenticationScreen} from './authentication';
import {ButtonScreen} from './button';
import {CacheScreen} from './cache';
import {ConfigScreen} from './config';
import {ErrorCaseScreen} from './error';
import {HttpApiScreen} from './http-api';
import {AppInfoScreen} from './info';
import {InstructionsScreen} from './instructions';
import {LocalAuthenticationScreen} from './local-authn';
import {LogScreen} from './log';
import {MessageScreen} from './message';
import {NavigationScreen} from './navigation';
import {PushNotificationScreen} from './push-notification';
import {ReactQueryDemoScreen} from './react-query';
import {SnackbarScreen} from './snackbar';

type ScreenList = {
  title: string;
  to: keyof DemoStackParamList;
};

const demoScreenList: ScreenList[] = [
  {
    title: 'Application Information',
    to: AppInfoScreen.name,
  },
  {
    title: 'Track AppState',
    to: AppStateScreen.name,
  },
  {
    title: 'GlobalErrorHandling',
    to: ErrorCaseScreen.name,
  },
  {
    title: 'React Native Instructions',
    to: InstructionsScreen.name,
  },
  {
    title: 'Configuration',
    to: ConfigScreen.name,
  },
  {
    title: 'Log',
    to: LogScreen.name,
  },
  {
    title: 'Message',
    to: MessageScreen.name,
  },
  {
    title: 'Button',
    to: ButtonScreen.name,
  },
  {
    title: 'Snackbar',
    to: SnackbarScreen.name,
  },
  {
    title: 'Local Authentication',
    to: LocalAuthenticationScreen.name,
  },
  {
    title: 'Authentication',
    to: AuthenticationScreen.name,
  },
  {
    title: 'HttpApi',
    to: HttpApiScreen.name,
  },
  {
    title: 'Navigation',
    to: NavigationScreen.name,
  },
  {
    title: 'PushNotification',
    to: PushNotificationScreen.name,
  },
  {
    title: 'Cache',
    to: CacheScreen.name,
  },
  {
    title: 'ReactQuery',
    to: ReactQueryDemoScreen.name,
  },
];

const addOnPressHandlerToItems = (navigation: NavigationProp<DemoStackParamList>) => (demo: ScreenList) => {
  return {
    ...demo,
    onPress: () => navigation.navigate(demo.to),
  };
};

const keyExtractor = (item: DemoLinkItemData, index: number) => item.to + index.toString();

const name = 'Demo';
type Props = NativeStackScreenProps<DemoStackParamList, typeof name>;

const Screen: React.FC<Props> = ({navigation}) => {
  const demoItems = useMemo(() => demoScreenList.map(addOnPressHandlerToItems(navigation)), [navigation]);
  return <DemoTemplate testID="DemoScreen" items={demoItems} keyExtractor={keyExtractor} />;
};

export const DemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof name> = {
  component: Screen,
  name,
  options: {
    title: 'Demo Screens',
  },
};
