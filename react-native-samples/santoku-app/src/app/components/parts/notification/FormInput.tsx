import React from 'react';
import {StyleProp, StyleSheet, TextStyle, Text} from 'react-native';
import {Input, Item, Label} from 'native-base';

type Props = {
  label: string;
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
  textStyle?: StyleProp<TextStyle>;
  readonly?: boolean;
  error?: string;
};

const FormInput: React.FC<Props> = ({label, value, textStyle, onChangeText, placeholder, readonly, error}) => {
  return (
    <>
      <Item disabled={readonly} stackedLabel>
        <Label>{label}</Label>
        <Input value={value} style={readonly ? [textStyle, styles.disableInput] : textStyle} onChangeText={onChangeText} placeholder={placeholder} />
      </Item>
      <Text style={styles.errorMessage}>{error}</Text>
    </>
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
  errorMessage: {
    color: 'red',
  },
});

export default FormInput;
