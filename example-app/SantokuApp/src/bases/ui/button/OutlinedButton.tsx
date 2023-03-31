import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {Button, ButtonProps} from './Button';
import {useAppTheme} from '../theme/useAppTheme';

export const OutlinedButton: React.FC<ButtonProps> = props => {
  const styles = useStyles();
  return (
    <Button
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      disabledStyle={styles.buttonDisabledStyle}
      raised={false}
      {...props}
    />
  );
};

const useStyles = () => {
  const appTheme = useAppTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        titleStyle: {
          color: appTheme.colors.primary,
        },
        buttonStyle: {
          backgroundColor: 'white',
          borderColor: appTheme.colors.primary,
          borderWidth: 1,
        },
        buttonDisabledStyle: {
          borderWidth: 0,
        },
      }),
    [appTheme.colors.primary],
  );
};
