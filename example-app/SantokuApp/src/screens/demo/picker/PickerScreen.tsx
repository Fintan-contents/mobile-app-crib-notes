import {SelectPicker, YearMonthPicker} from 'components/picker';
import {m} from 'framework/message';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';

import {usePickerScreenUseCase} from './usePickerScreenUseCase';

const ScreenName = 'Picker';
const Screen: React.FC = () => {
  const {
    items1,
    items1Key,
    items1InputValue,
    onSelectedItemChangeForItem1,
    onDismissForItem1,
    onDeleteForItem1,
    onCancelForItem1,
    onDoneForItem1,
    items2,
    items2Value,
    items2InputValue,
    onSelectedItemChangeForItem2,
    items3,
    items3Key,
    onSelectedItemChangeForItem3,
    maximumYearMonth,
    minimumYearMonth,
    yearMonth,
    onSelectedItemChangeForYearMonth,
    unselectedItem,
    onDismissForYearMonthPicker,
    onDeleteForYearMonthPicker,
    onCancelForYearMonthPicker,
    onDoneForYearMonthPicker,
    placeholder,
  } = usePickerScreenUseCase();

  return (
    <View style={styles.container}>
      <Text>■deleteLabel/cancelLabel/doneLabelを指定(iOS only)</Text>
      <SelectPicker
        selectedItemKey={items1Key}
        onSelectedItemChange={onSelectedItemChangeForItem1}
        items={items1}
        onDismiss={onDismissForItem1}
        onDelete={onDeleteForItem1}
        onCancel={onCancelForItem1}
        onDone={onDoneForItem1}
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
        textInputComponent={<Input placeholder={placeholder} value={items1InputValue} editable={false} />}
      />
      <Text>■Android Picker mode: dropdown(Android only)</Text>
      <SelectPicker
        selectedItemKey={items2Value}
        onSelectedItemChange={onSelectedItemChangeForItem2}
        items={items2}
        placeholder={placeholder}
        pickerProps={{mode: 'dropdown'}}
        textInputComponent={<Input placeholder={placeholder} value={items2InputValue} editable={false} />}
      />
      <View style={styles.space} />
      <Text>■Android Picker mode: dialog(Android only)</Text>
      <SelectPicker
        selectedItemKey={items3Key}
        onSelectedItemChange={onSelectedItemChangeForItem3}
        items={items3}
        textInputProps={{style: styles.selectPicker3TextInputStyle}}
      />
      <View style={styles.space} />
      <Text>■YearMonthPicker</Text>
      <YearMonthPicker
        selectedValue={yearMonth}
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        yearSuffixLabel={m('年')}
        monthSuffixLabel={m('月')}
        placeholder={placeholder}
        unselectItem={unselectedItem}
        onSelectedItemChange={onSelectedItemChangeForYearMonth}
        onDismiss={onDismissForYearMonthPicker}
        onDelete={onDeleteForYearMonthPicker}
        onCancel={onCancelForYearMonthPicker}
        onDone={onDoneForYearMonthPicker}
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
        textInputProps={{style: styles.pickerTextInputStyle}}
      />
    </View>
  );
};

export const PickerScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
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
  selectPicker3TextInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    color: 'black',
  },
  pickerTextInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    color: 'black',
  },
  space: {
    height: 10,
  },
});
