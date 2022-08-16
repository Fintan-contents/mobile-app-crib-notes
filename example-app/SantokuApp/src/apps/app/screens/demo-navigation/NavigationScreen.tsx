import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'apps/app/navigators/types';
import {NavigationPage} from 'features/demo-navigation/pages/NavigationPage';
import React, {useCallback} from 'react';

type NavigationScreenProps = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, 'Navigation'>,
  NativeStackScreenProps<RootStackParamList>
>;
export const NavigationScreen: React.FC<NavigationScreenProps> = ({navigation}) => {
  const navigateToSnackbarDemo = useCallback(() => navigation.navigate('Snackbar'), [navigation]);
  const navigateToHomeStack = useCallback(
    () => navigation.navigate('AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'HomeStackNav'}}),
    [navigation],
  );
  const navigateToTeamStack = useCallback(
    () => navigation.navigate('AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'TeamStackNav'}}),
    [navigation],
  );
  return (
    <NavigationPage
      navigateToSnackbarDemo={navigateToSnackbarDemo}
      navigateToHomeStack={navigateToHomeStack}
      navigateToTeamStack={navigateToTeamStack}
    />
  );
};
