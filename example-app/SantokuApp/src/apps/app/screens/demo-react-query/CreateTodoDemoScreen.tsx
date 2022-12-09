import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {CreateTodoDemoPage} from 'features/demo-react-query/pages/CreateTodoDemoPage';
import React, {useCallback} from 'react';

export const CreateTodoDemoScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'CreateTodoDemo'>> = ({
  navigation,
}) => {
  const replaceToEditTodoDemo = useCallback(
    (todoId: number) => navigation.replace('EditTodoDemo', {todoId}),
    [navigation],
  );
  return <CreateTodoDemoPage replaceToEditTodoDemo={replaceToEditTodoDemo} />;
};
