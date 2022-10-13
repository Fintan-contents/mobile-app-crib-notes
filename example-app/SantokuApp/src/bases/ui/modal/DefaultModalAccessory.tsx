import React from 'react';
import {StyleSheet, TextProps, TouchableOpacityProps, View, ViewProps} from 'react-native';

import {ModalAccessoryButton, ModalAccessoryButtonProps} from './ModalAccessoryButton';

export type DefaultModalAccessoryProps = {
  containerProps?: ViewProps;
  onDelete?: () => void;
  deleteLabel?: string;
  deleteTextProps?: TextProps;
  deleteTextComponent?: ModalAccessoryButtonProps['textComponent'];
  deleteTouchableContainerProps?: TouchableOpacityProps;
  onCancel?: () => void;
  cancelLabel?: string;
  cancelTextProps?: TextProps;
  cancelTextComponent?: ModalAccessoryButtonProps['textComponent'];
  cancelTouchableContainerProps?: TouchableOpacityProps;
  onDone?: () => void;
  doneLabel?: string;
  doneTextProps?: TextProps;
  doneTextComponent?: ModalAccessoryButtonProps['textComponent'];
  doneTouchableContainerProps?: TouchableOpacityProps;
};

export const DefaultModalAccessory: React.FC<DefaultModalAccessoryProps> = ({
  containerProps: {style, ...containerProps} = {},
  onDelete,
  deleteTextProps,
  deleteLabel,
  deleteTextComponent,
  deleteTouchableContainerProps,
  onCancel,
  cancelTextProps,
  cancelLabel,
  cancelTextComponent,
  cancelTouchableContainerProps,
  onDone,
  doneTextProps,
  doneLabel,
  doneTextComponent,
  doneTouchableContainerProps,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])} {...containerProps}>
      {deleteLabel && (
        <>
          <ModalAccessoryButton
            onPress={onDelete}
            defaultStyle={styles.destructiveTextStyle}
            textProps={deleteTextProps}
            textComponent={deleteTextComponent}
            touchableContainerProps={deleteTouchableContainerProps}
            label={deleteLabel}
          />
          <View style={styles.flex} />
        </>
      )}
      {cancelLabel && (
        <ModalAccessoryButton
          onPress={onCancel}
          defaultStyle={styles.cancelTextStyle}
          textProps={cancelTextProps}
          textComponent={cancelTextComponent}
          touchableContainerProps={cancelTouchableContainerProps}
          label={cancelLabel}
        />
      )}
      {doneLabel && (
        <ModalAccessoryButton
          onPress={onDone}
          defaultStyle={styles.okTextStyle}
          textProps={doneTextProps}
          textComponent={doneTextComponent}
          touchableContainerProps={doneTouchableContainerProps}
          label={doneLabel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  destructiveTextStyle: {
    color: '#d9545e',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  cancelTextStyle: {
    color: '#4577CC',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  okTextStyle: {
    color: '#4577CC',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  flex: {
    flex: 1,
  },
});
