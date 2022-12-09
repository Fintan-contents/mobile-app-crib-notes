import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';

export type PickerAccessoryButtonProps = {
  onPress?: () => unknown;
  defaultStyle: StyleProp<TextStyle>;
  textProps?: TextProps;
  textComponent?: React.ReactNode;
  touchableContainerProps?: Omit<TouchableOpacityProps, 'onPress'>;
  label: string;
};
const PickerAccessoryButtonComponent: React.FC<PickerAccessoryButtonProps> = ({
  onPress,
  defaultStyle,
  textProps: {style: textStyle, ...textProps} = {},
  textComponent,
  touchableContainerProps,
  label,
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...touchableContainerProps}>
      {textComponent ? (
        textComponent
      ) : (
        <Text style={StyleSheet.flatten([defaultStyle, textStyle])} {...textProps}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export const PickerAccessoryButton = React.memo(PickerAccessoryButtonComponent);
