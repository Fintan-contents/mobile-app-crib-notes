import React from 'react';
import {Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';

export type MessageItemData = {
  name?: string;
  value: string | null;
};

type MessageListItemProps = {
  item: MessageItemData;
};

export const MessageListItem: React.FC<MessageListItemProps> = ({item}) => {
  return !item.name ? null : (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>
          <Text>{item.name}</Text>
        </ListItem.Title>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text>{item.value}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};
