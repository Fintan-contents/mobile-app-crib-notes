import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

const demos = [
  {
    title: 'AppState',
    to: 'AppState',
  },
];

export const Demo: React.FC = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={demos}
      renderItem={({item}) => {
        return (
          <ListItem bottomDivider onPress={() => navigation.navigate(item.to)}>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      }}
      keyExtractor={(item, index) => item.to + index.toString()}
    />
  );
};
