import React, {useRef} from 'react';
import {FlatList} from 'react-native';

import {AppStateHistoryListItem} from './AppStateHistoryListItem';
import {StateChangedEventRecord} from './useAppStateHistory';

type AppStateTemplateProps = {
  history: StateChangedEventRecord[];
  keyExtractor: (item: StateChangedEventRecord, index: number) => string;
  testID?: string;
};

export const AppStateTemplate: React.FC<AppStateTemplateProps> = ({history, keyExtractor, testID}) => {
  const listRef = useRef<FlatList<StateChangedEventRecord>>(null);
  return (
    <FlatList
      ref={listRef}
      data={history}
      renderItem={({item}) => <AppStateHistoryListItem item={item} />}
      keyExtractor={keyExtractor}
      onContentSizeChange={() => listRef.current?.scrollToEnd()}
      testID={testID}
    />
  );
};
