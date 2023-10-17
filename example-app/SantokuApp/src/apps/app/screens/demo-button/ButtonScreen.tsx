import {useNavigation} from '@react-navigation/native';
import {setStatusBarStyle} from 'expo-status-bar';
import {ButtonPage} from 'features/demo-button/pages/ButtonPage';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';

export const ButtonScreen: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    return navigation.addListener('focus', () => {
      if (Platform.OS === 'ios') {
        setStatusBarStyle('light');
      }
    });
  }, [navigation]);
  return <ButtonPage />;
};
