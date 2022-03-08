import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {useCreateTodoDemo} from './useCreateTodoDemo';

export type CreateTodoDemoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'CreateTodoDemo';
const Screen: React.FC<CreateTodoDemoScreenProps> = props => {
  const {title, description, isLoading, onChangeTitle, onChangeDescription, onSubmit} = useCreateTodoDemo(props);

  return (
    <View style={styles.container}>
      <Input label="Title" onChangeText={onChangeTitle}>
        {title}
      </Input>
      <Input label="Description" onChangeText={onChangeDescription}>
        {description}
      </Input>
      <View style={styles.buttons}>
        <Button title="Submit" onPress={onSubmit} loading={isLoading} containerStyle={styles.button} />
      </View>
    </View>
  );
};

export const CreateTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginHorizontal: 8,
  },
});
