import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TeamDetailPage} from 'features/team/pages/TeamDetailPage';
import React, {useCallback} from 'react';

import {RootStackParamList} from '../../navigators/types';

export const TeamDetailScreen: React.FC<NativeStackScreenProps<RootStackParamList>> = ({navigation}) => {
  const navigateToDemo = useCallback(() => navigation.navigate('DemoStackNav', {screen: 'DemoMenu'}), [navigation]);
  return <TeamDetailPage navigateToDemo={navigateToDemo} />;
};
