import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {ListItem} from 'react-native-elements';

export type DemoLinkItemProps = {
  item: DemoLinkItemData;
};

export type DemoLinkItemData = {
  title: string;
  to: string;
  onPress: (event: GestureResponderEvent) => void;
};

export const DemoLinkItem: React.FC<DemoLinkItemProps> = ({item: {title, onPress}}) => (
  <ListItem bottomDivider onPress={onPress}>
    <ListItem.Content>
      <ListItem.Title>{title}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
);
