import * as Application from 'expo-application';
import React from 'react';
import {Platform, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

const info = [
  {
    name: 'Application Name',
    value: Application.applicationName,
  },
  {
    name: Platform.select({android: 'Application ID', ios: 'Bundle Identifier'}),
    value: Application.applicationId,
  },
  {
    name: 'Application Version',
    value: Application.nativeApplicationVersion,
  },
  {
    name: 'Build Version',
    value: Application.nativeBuildVersion,
  },
  {
    name: 'Development mode',
    value: __DEV__ ? 'true' : 'false',
  },
];

export const ApplicationInfo: React.FC = () => {
  return (
    <FlatList
      data={info}
      renderItem={({item: {name, value}}) =>
        !name ? null : (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>
                <Text>{name}</Text>
              </ListItem.Title>
              <View style={{marginTop: 10, marginLeft: 10}}>
                <Text>{value}</Text>
              </View>
            </ListItem.Content>
          </ListItem>
        )
      }
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
