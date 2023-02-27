import {useVisibility} from 'bases/core/utils/useVisibility';
import React, {useMemo} from 'react';
import {ColorValue, GestureResponderEvent, KeyboardTypeOptions, Platform, StyleSheet, View} from 'react-native';

import {TextInput, TextInputProps} from './TextInput';
import {IconButton} from '../button/IconButton';

export type RightIconsProps = {
  color: ColorValue | number | undefined;
  showClearButton?: boolean;
  onClearButtonPress?: (e: GestureResponderEvent) => void;
  clearButtonSize?: number;
  handlePasswordVisibility: () => void;
  passwordVisible: boolean;
  passwordVisibilityButtonSize?: number;
};

const RightIcons: React.FC<RightIconsProps> = ({
  color,
  showClearButton,
  onClearButtonPress,
  clearButtonSize,
  handlePasswordVisibility,
  passwordVisible,
  passwordVisibilityButtonSize,
}) => {
  const passwordVisibilityIconName = passwordVisible ? 'visibility' : 'visibility-off';

  // 入力したときに高さが変化してしまわないように、表示/非表示をwidthで切り替える
  const clearButtonStyle = useMemo(() => {
    const width = showClearButton ? undefined : 0;
    return {width};
  }, [showClearButton]);

  return (
    <View style={styles.iconContainer}>
      <IconButton
        color={color}
        type="material"
        name="cancel"
        size={clearButtonSize}
        onPress={onClearButtonPress}
        style={clearButtonStyle}
      />
      <View style={styles.iconBetween} />
      <IconButton
        color={color}
        type="material"
        name={passwordVisibilityIconName}
        size={passwordVisibilityButtonSize}
        onPress={handlePasswordVisibility}
      />
    </View>
  );
};

export type PasswordTextInputProps = Omit<TextInputProps, 'iconSize'> & {
  clearButtonSize?: number;
  passwordVisibilityButtonSize?: number;
};

export const PasswordTextInput: React.FC<PasswordTextInputProps> = React.forwardRef(
  ({showClearButton, onClearButtonPress, clearButtonSize, passwordVisibilityButtonSize, iconColor, ...props}, ref) => {
    const {isVisible: passwordVisible, toggleVisibility: togglePasswordVisibility} = useVisibility();

    const keyboardType = Platform.select<KeyboardTypeOptions>({
      ios: 'ascii-capable',
      android: passwordVisible ? 'visible-password' : undefined,
    });

    return (
      <TextInput
        ref={ref}
        secureTextEntry={!passwordVisible}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoComplete="password"
        textContentType="password"
        autoCorrect={false}
        rightIcon={
          <RightIcons
            clearButtonSize={clearButtonSize}
            showClearButton={showClearButton}
            onClearButtonPress={onClearButtonPress}
            passwordVisibilityButtonSize={passwordVisibilityButtonSize}
            handlePasswordVisibility={togglePasswordVisibility}
            passwordVisible={passwordVisible}
            color={iconColor}
          />
        }
        {...props}
      />
    );
  },
);

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
  },
  iconBetween: {
    marginRight: 5,
  },
});
