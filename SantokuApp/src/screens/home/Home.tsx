import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, ThemeContext} from 'react-native-elements';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const onGoToInstructionButtonPress = useCallback(() => navigation.navigate('Instructions'), [navigation]);
  return (
    <View style={StyleSheet.flatten([styles.container, {backgroundColor: theme.colors?.primary}])}>
      <Text h1 style={styles.textColor}>
        Hello, World!
      </Text>
      <Button title="Go to instructions" onPress={onGoToInstructionButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#fefefe',
  },
});
