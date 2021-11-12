import {NavigationProp, useNavigation} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/routers';
import React, {useMemo} from 'react';

import {DemoLinkItemData} from './DemoLinkItem';
import {DemoTemplate} from './DemoTemplate';
import {AppStateScreen} from './app-state';
import {AuthnScreen} from './authn';
import {ConfigScreen} from './config';
import {ErrorCaseScreen} from './error';
import {AppInfoScreen} from './info';
import {InstructionsScreen} from './instructions';
import {LogScreen} from './log';
import {MessageScreen} from './message';

const demoScreenList = [
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
    title: 'Authentication',
    to: AuthnScreen.name,
  },
];

const addOnPressHandlerToItems = (navigation: NavigationProp<ParamListBase>) => (demo: {title: string; to: string}) => {
  return {
    ...demo,
    onPress: () => navigation.navigate(demo.to),
  };
};

const keyExtractor = (item: DemoLinkItemData, index: number) => item.to + index.toString();

const name = 'Demo';
const Screen: React.FC = () => {
  const navigation = useNavigation();
  const demoItems = useMemo(() => demoScreenList.map(addOnPressHandlerToItems(navigation)), [navigation]);
  return <DemoTemplate testID="DemoScreen" items={demoItems} keyExtractor={keyExtractor} />;
};

export const DemoScreen = {
  component: Screen,
  name,
  options: {
    title: 'Demo Screens',
  },
};
