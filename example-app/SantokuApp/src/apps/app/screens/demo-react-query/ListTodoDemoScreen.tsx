import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {ListTodoDemoPage} from 'features/demo-react-query/pages/ListTodoDemoPage';
import React, {useCallback} from 'react';

export const ListTodoDemoScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'ListTodoDemo'>> = ({
  navigation,
}) => {
  const navigateToCreateTodoDemo = useCallback(() => navigation.navigate('CreateTodoDemo'), [navigation]);
  const navigateToEditTodoDemo = useCallback(
    (todoId: number) => navigation.navigate('EditTodoDemo', {todoId}),
    [navigation],
  );
  return (
    <ListTodoDemoPage
      navigateToCreateTodoDemo={navigateToCreateTodoDemo}
      navigateToEditTodoDemo={navigateToEditTodoDemo}
    />
  );
};
