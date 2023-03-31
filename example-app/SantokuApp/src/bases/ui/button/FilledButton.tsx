import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {Button, ButtonProps} from './Button';
import {useAppTheme} from '../theme/useAppTheme';

export const FilledButton: React.FC<ButtonProps> = props => {
  const styles = useStyles();
  return <Button titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle} raised={false} {...props} />;
};

const useStyles = () => {
  const appTheme = useAppTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        titleStyle: {
          color: 'white',
        },
        buttonStyle: {
          backgroundColor: appTheme.colors.primary,
        },
      }),
    [appTheme.colors.primary],
  );
};
