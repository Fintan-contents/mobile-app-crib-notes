import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppState, AppStateStatus, FlatList, View, StyleSheet, AppStateEvent} from 'react-native';
import {ListItem, Text} from 'react-native-elements';

type StateChangedEventRecord = {
  event: AppStateEvent;
  state: AppStateStatus;
  timestamp: Date;
};

export const AppStateScreen: React.FC = () => {
  const [appStateHistory, setAppStateHistory] = useState<StateChangedEventRecord[]>([
    {
      event: 'change',
      timestamp: new Date(),
      state: AppState.currentState,
    },
  ]);
  const changeEventListener = useCallback((nextAppState: AppStateStatus) => {
    setAppStateHistory((history) => {
      return [...history, {event: 'change', timestamp: new Date(), state: nextAppState}];
    });
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', changeEventListener);
    // 0.65からは、addEventListenerからの返り値をそのままreturnすれば良くなっている。（以下のコードの実装時は0.63.4を利用）
    // https://reactnative.dev/docs/0.65/appstate
    // https://reactnative.dev/docs/0.64/appstate
    return () => AppState.removeEventListener('change', changeEventListener);
  }, [changeEventListener]);

  const listRef = useRef<FlatList<StateChangedEventRecord>>(null);
  return (
    <FlatList
      ref={listRef}
      data={appStateHistory}
      renderItem={({item}) => {
        return (
          <ListItem bottomDivider>
            <View style={styles.record}>
              <View style={styles.stateAndEvent}>
                <Text style={styles.state}>{item.state}</Text>
                <Text style={styles.event}>{item.event}</Text>
              </View>
              <Text style={styles.timestamp}>{item.timestamp?.toISOString()}</Text>
            </View>
          </ListItem>
        );
      }}
      keyExtractor={(_, index) => index.toString()}
      onContentSizeChange={() => listRef.current?.scrollToEnd()}
    />
  );
};

const styles = StyleSheet.create({
  record: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
  stateAndEvent: {flex: 1, flexDirection: 'row'},
  state: {fontWeight: 'bold'},
  event: {marginLeft: 5},
  timestamp: {color: '#666666'},
});
