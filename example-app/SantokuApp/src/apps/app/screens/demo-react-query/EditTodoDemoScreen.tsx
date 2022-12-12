import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {EditTodoDemoPage} from 'features/demo-react-query/pages/EditTodoDemoPage';
import React, {useCallback} from 'react';

export const EditTodoDemoScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'EditTodoDemo'>> = ({
  navigation,
  route,
}) => {
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return <EditTodoDemoPage goBack={goBack} todoId={route.params.todoId} />;
};
