import {useNavigation} from '@react-navigation/native';
import {setStatusBarStyle} from 'expo-status-bar';
import {SnackbarPage} from 'features/demo-snackbar/pages/SnackbarPage';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';

export const SnackbarScreen: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    return navigation.addListener('focus', () => {
      if (Platform.OS === 'ios') {
        setStatusBarStyle('light');
      }
    });
  }, [navigation]);
  return <SnackbarPage />;
};
