import React from 'react';
import {FlatList} from 'react-native';

import {AppInfoItemData, AppInfoListItem} from './AppInfoListItem';

type AppInfoTemplateProps = {
  items: AppInfoItemData[];
  keyExtractor: (item: AppInfoItemData, index: number) => string;
  testID?: string;
};

export const AppInfoTemplate: React.FC<AppInfoTemplateProps> = ({items, keyExtractor, testID}) => {
  return <FlatList data={items} renderItem={AppInfoListItem} keyExtractor={keyExtractor} testID={testID} />;
};
