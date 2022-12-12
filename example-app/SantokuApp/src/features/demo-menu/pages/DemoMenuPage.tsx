import React from 'react';

import {DemoLinkItemData} from '../components/DemoLinkItem';
import {DemoTemplate} from '../components/DemoTemplate';

type DemoMenuPageProps = {
  items: DemoLinkItemData[];
};

export const keyExtractor = (item: DemoLinkItemData, index: number) => item.to + index.toString();

export const DemoMenuPage: React.FC<DemoMenuPageProps> = ({items}) => {
  return <DemoTemplate testID="DemoScreen" items={items} keyExtractor={keyExtractor} />;
};
