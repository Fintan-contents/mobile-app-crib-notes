/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
