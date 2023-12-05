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

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

type SnackbarTemplateProps = {
  testID?: string;
  showSnackbar: () => void;
  showSnackbarWithCloseButton: () => void;
};

export const SnackbarTemplate: React.FC<SnackbarTemplateProps> = ({
  showSnackbar,
  showSnackbarWithCloseButton,
  testID,
}) => {
  return (
    <View style={styles.container} testID={testID}>
      <Button onPress={showSnackbar} title="スナックバーを表示" />
      <Button onPress={showSnackbarWithCloseButton} title="閉じるボタン付きのスナックバーを表示" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
