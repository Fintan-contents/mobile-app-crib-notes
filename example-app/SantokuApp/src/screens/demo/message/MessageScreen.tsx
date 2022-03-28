import {DemoStackParamList} from 'navigation/types';
import React from 'react';

import {MessageTemplate} from './MessageTemplate';
import {useMessage} from './useMessage';

const ScreenName = 'Message';
const Screen: React.FC = () => {
  const {info, infoKeyExtractor} = useMessage();
  return <MessageTemplate testID="MessageScreen" items={info} keyExtractor={infoKeyExtractor} />;
};

export const MessageScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Message',
  },
};