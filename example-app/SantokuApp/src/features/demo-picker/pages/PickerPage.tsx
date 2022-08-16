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
