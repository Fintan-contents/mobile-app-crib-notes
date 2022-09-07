import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TeamDetailPage} from 'features/team/pages/TeamDetailPage';
import React, {useCallback} from 'react';

import {RootStackParamList, TeamStackParamList} from '../../navigators/types';

export const TeamDetailScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<TeamStackParamList, 'TeamDetail'>,
    NativeStackScreenProps<RootStackParamList, 'DemoStackNav'>
  >
> = ({navigation}) => {
  const navigateToDemo = useCallback(() => navigation.navigate('DemoStackNav', {screen: 'DemoMenu'}), [navigation]);
  return <TeamDetailPage navigateToDemo={navigateToDemo} />;
};
