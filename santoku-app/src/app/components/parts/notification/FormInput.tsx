import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Input, Item, Label} from 'native-base';

type Props = {
  label: string;
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
  textStyle?: StyleProp<TextStyle>;
  readonly?: boolean;
};

const FormInput: React.FC<Props> = ({label, value, textStyle, onChangeText, placeholder, readonly}) => {
  return (
    <Item disabled={readonly} stackedLabel>
      <Label>{label}</Label>
      <Input value={value} style={readonly ? [textStyle, styles.disableInput] : textStyle} onChangeText={onChangeText} placeholder={placeholder} />
    </Item>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    height: 24,
    borderLeftColor: 'black',
    borderLeftWidth: 4,
    paddingLeft: 8,
    marginBottom: 12,
  },
  disableInput: {
    backgroundColor: '#EBEBEB',
  },
});

export default FormInput;
