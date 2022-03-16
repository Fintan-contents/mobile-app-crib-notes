import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Todo} from 'generated/sandbox/model';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React, {useCallback} from 'react';
import {ActivityIndicator, Pressable, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Icon, ListItem, Text, FAB, Button} from 'react-native-elements';

import {useListTodoDemo} from './useListTodoDemo';

const LoadingIndicator = () => {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export type ListTodoDemoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'ListTodoDemo';
const Screen: React.FC<ListTodoDemoScreenProps> = props => {
  const {
    status,
    isSuccess,
    isError,
    isLoading,
    isRefetching,
    isFetchingNextPage,
    todos,
    refetch,
    onPressTodoItem,
    fetchNext,
    create,
    resetQueries,
    invalidateQueries,
  } = useListTodoDemo(props);

  const renderTodo = useCallback(
    ({item}: {item: Todo}) => {
      return (
        <Pressable onPress={() => onPressTodoItem(item.id)}>
          <ListItem containerStyle={styles.todo}>
            <Icon name="event-note" type="material" />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
          </ListItem>
        </Pressable>
      );
    },
    [onPressTodoItem],
  );

  const renderFooter = useCallback(() => {
    if (!isFetchingNextPage) return null;

    return <LoadingIndicator />;
  }, [isFetchingNextPage]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4>Todo List (InfiniteQuery)</Text>
        <Text>Query Status: {status}</Text>
        <Text>isRefetching: {isRefetching.toString()}</Text>
        <Text>isFetchingNextPage: {isFetchingNextPage.toString()}</Text>
      </View>
      <View style={styles.body}>
        {isError && <Text>List Todo APIの呼び出しに失敗しました。</Text>}
        {isLoading && <ActivityIndicator size="large" color="blue" />}
        {isSuccess && (
          <>
            {todos && (
              <FlatList
                data={todos}
                renderItem={renderTodo}
                refreshing={isRefetching && !isFetchingNextPage}
                onRefresh={refetch}
                onEndReached={fetchNext}
                ListFooterComponent={renderFooter}
              />
            )}
            {!todos && <Text>Todoが登録されていません。</Text>}
            <FAB title="Create Todo" placement="right" onPress={create} />
          </>
        )}
      </View>
      <View style={styles.footer}>
        <Button title="Invalidate Queries" onPress={() => invalidateQueries()} style={styles.button} />
        <Button title="Reset Queries" onPress={() => resetQueries()} style={styles.button} />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const ListTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 8,
  },
  body: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#aaaaaa',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    backgroundColor: 'transparent',
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    padding: 8,
  },
  button: {
    flex: 1,
  },
});
