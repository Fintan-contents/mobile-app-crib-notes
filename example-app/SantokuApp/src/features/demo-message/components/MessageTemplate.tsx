import React from 'react';
import {FlatList} from 'react-native';

import {MessageItemData, MessageListItem} from './MessageListItem';

type MessageTemplateProps = {
  items: MessageItemData[];
  keyExtractor: (item: MessageItemData, index: number) => string;
  testID?: string;
};

export const MessageTemplate: React.FC<MessageTemplateProps> = ({items, keyExtractor, testID}) => {
  return <FlatList data={items} renderItem={MessageListItem} keyExtractor={keyExtractor} testID={testID} />;
};
