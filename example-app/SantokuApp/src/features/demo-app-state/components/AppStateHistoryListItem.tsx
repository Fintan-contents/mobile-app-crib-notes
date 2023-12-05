/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';

import {StateChangedEventRecord} from '../types/StateChangedEventRecord';

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
