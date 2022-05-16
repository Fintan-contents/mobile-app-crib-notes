import {PickerProps} from '@react-native-picker/picker';
import {log} from 'framework/logging';
import React from 'react';
import {Platform} from 'react-native';

import {Item} from './SelectPicker';

export type SelectPickerItemsProps = PickerProps<React.Key> & {
  items: Item<React.Key>[];
  keyExtractor?: ((item: React.Key, index: number) => React.Key) | undefined;

  // android
  initialValue?: React.Key;
  itemHeight?: number;
  preferredNumVisibleRows?: number;
};

export const SelectPickerItems = (props: SelectPickerItemsProps) => {
  React.useEffect(() => {
    log.warn(`SelectPickerItems is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
