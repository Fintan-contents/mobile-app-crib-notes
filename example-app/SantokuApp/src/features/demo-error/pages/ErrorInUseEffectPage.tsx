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

export type ErrorCasePageProps = {
  navigateToErrorInUseEffectSyncProcess: () => void;
  navigateToErrorInUseEffectAsyncProcessPage: () => void;
};

export const ErrorInUseEffectPage: React.FC<ErrorCasePageProps> = ({
  navigateToErrorInUseEffectSyncProcess,
  navigateToErrorInUseEffectAsyncProcessPage,
}) => {
  return (
    <View style={styles.container}>
      <Button onPress={navigateToErrorInUseEffectSyncProcess} title="useEffect内の同期処理でエラー" />
      <Button onPress={navigateToErrorInUseEffectAsyncProcessPage} title="useEffect内の非同期処理でエラー" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
