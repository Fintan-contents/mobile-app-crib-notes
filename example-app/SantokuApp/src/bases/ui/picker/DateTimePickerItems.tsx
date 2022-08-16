import RNDateTimePicker, {AndroidNativeProps, IOSNativeProps} from '@react-native-community/datetimepicker';
import React from 'react';

export type DateTimePickerItemsIOSProps = IOSNativeProps;
export type DateTimePickerItemsAndroidProps = AndroidNativeProps;
export type DateTimePickerItemsProps = DateTimePickerItemsIOSProps | DateTimePickerItemsAndroidProps;

export const DateTimePickerItems = (props: DateTimePickerItemsProps) => {
  return <RNDateTimePicker {...props} />;
};
