import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon, IconProps} from 'react-native-elements';

export const IconButton: React.FC<IconProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} testID="IconButtonTouchableOpacity">
      <Icon {...props} onPress={undefined} />
    </TouchableOpacity>
  );
};
