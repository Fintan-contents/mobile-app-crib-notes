import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';

import {StateChangedEventRecord} from './useAppStateHistory';

type AppStateHistoryListItemProps = {
  item: StateChangedEventRecord;
};

export const AppStateHistoryListItem: React.FC<AppStateHistoryListItemProps> = ({item}) => {
  return (
    <ListItem bottomDivider>
      <View style={styles.record}>
        <View style={styles.stateAndEvent}>
          <Text>{item.event}</Text>
          <Text style={styles.state}>{item.state}</Text>
        </View>
        <Text style={styles.timestamp}>{item.timestamp?.toISOString()}</Text>
      </View>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  record: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
  stateAndEvent: {flex: 1, flexDirection: 'row'},
  state: {fontWeight: 'bold', marginLeft: 5},
  timestamp: {color: '#666666'},
});
