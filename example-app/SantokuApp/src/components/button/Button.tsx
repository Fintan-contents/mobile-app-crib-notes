import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as RNEButton, ButtonProps} from 'react-native-elements';

const buttonWidthSizes = {
  small: 90,
  middle: 140,
  large: 200,
  full: '100%',
} as const;

type ButtonSizeType = keyof typeof buttonWidthSizes;

type Props = ButtonProps & {
  size?: ButtonSizeType;
};

export const Button: React.FC<Props> = (props) => {
  const {size, ...buttonProps} = props;
  const widthStyle = {width: buttonWidthSizes[size ?? 'small']};
  const buttonStyle = StyleSheet.flatten([styles.button, widthStyle]);
  const containerStyle = StyleSheet.flatten([styles.container, widthStyle]);

  return <RNEButton {...buttonProps} buttonStyle={buttonStyle} containerStyle={containerStyle} />;
};

Button.defaultProps = {
  raised: true,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 50,
  },
  container: {
    borderRadius: 8,
  },
});
