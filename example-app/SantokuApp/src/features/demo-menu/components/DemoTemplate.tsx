import React from 'react';
import {FlatList} from 'react-native';

import {DemoLinkItem, DemoLinkItemData} from './DemoLinkItem';

type DemoTemplateProps = {
  items: DemoLinkItemData[];
  keyExtractor: (item: DemoLinkItemData, index: number) => string;
  testID?: string;
};

export const DemoTemplate: React.FC<DemoTemplateProps> = ({items, keyExtractor, testID}) => {
  return <FlatList testID={testID} data={items} renderItem={DemoLinkItem} keyExtractor={keyExtractor} />;
};
