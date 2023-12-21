/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Button} from 'bases/ui/button/Button';
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';

const handlePress = () => {
  Alert.alert('clicked');
};

export const ButtonPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button title="Small" onPress={handlePress} />
      <Button title="Middle" size="middle" />
      <Button title="Large" size="large" />
      <Button title="Full" size="full" />
      <Button
        title="custom style"
        size="large"
        buttonStyle={{backgroundColor: 'red', width: 340}}
        containerStyle={{width: 340}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
