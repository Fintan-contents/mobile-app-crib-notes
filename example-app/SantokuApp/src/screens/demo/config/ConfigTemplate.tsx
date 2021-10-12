import React from 'react';
import {FlatList} from 'react-native';

import {ConfigItemData, ConfigListItem} from './ConfigListItem';

type ConfigTemplateProps = {
  items: ConfigItemData[];
  keyExtractor: (item: ConfigItemData, index: number) => string;
  testID?: string;
};

export const ConfigTemplate: React.FC<ConfigTemplateProps> = ({items, keyExtractor, testID}) => {
  return <FlatList data={items} renderItem={ConfigListItem} keyExtractor={keyExtractor} testID={testID} />;
};
