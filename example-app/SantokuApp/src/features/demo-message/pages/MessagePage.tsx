import React from 'react';

import {MessageTemplate} from '../components/MessageTemplate';
import {messages} from '../constants/messages';

export const keyExtractor = (_: unknown, index: number) => index.toString();

export const MessagePage: React.FC = () => {
  return <MessageTemplate testID="MessageScreen" items={messages} keyExtractor={keyExtractor} />;
};
