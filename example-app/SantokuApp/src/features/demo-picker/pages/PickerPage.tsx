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

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {DemoDateTimePicker1} from '../components/DemoDateTimePicker1';
import {DemoDateTimePicker2} from '../components/DemoDateTimePicker2';
import {DemoDateTimePicker3} from '../components/DemoDateTimePicker3';
import {DemoSelectPicker} from '../components/DemoSelectPicker';
import {DemoYearMonthPicker} from '../components/DemoYearMonthPicker';

export const PickerPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>■SelectPicker</Text>
      <DemoSelectPicker />
      <Text>■YearMonthPicker</Text>
      <DemoYearMonthPicker />
      <View style={styles.space} />
      <Text>■DateTimePicker1</Text>
      <DemoDateTimePicker1 />
      <View style={styles.space} />
      <Text>■DateTimePicker2</Text>
      <DemoDateTimePicker2 />
      <View style={styles.space} />
      <Text>■DateTimePicker3</Text>
      <DemoDateTimePicker3 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dateMonthContainer: {
    flexDirection: 'row',
  },
  dateMonthPicker: {
    width: '50%',
  },
  pickerTextInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    color: 'black',
  },
  dateTimePickerWithInline: {
    height: 400,
  },
  space: {
    height: 20,
  },
});
