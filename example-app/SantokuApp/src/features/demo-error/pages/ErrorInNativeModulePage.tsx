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
import {StyleSheet, View, NativeModules} from 'react-native';
import {Button} from 'react-native-elements';
const {ThrowErrorModule} = NativeModules;

const throwNativeErrorInSyncProcess = async () => {
  /*
    eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access --
    デモ画面で検証する用に作成したNative Modulesは型定義を作成していないため
   */
  await ThrowErrorModule.throwErrorSyncProcess();
};

const throwNativeErrorInAsyncProcess = async () => {
  /*
    eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access --
    デモ画面で検証する用に作成したNative Modulesは型定義を作成していないため
   */
  await ThrowErrorModule.throwErrorAsyncProcess();
};

export const ErrorInNativeModulePage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwNativeErrorInSyncProcess} title="Native Modules内の同期処理でエラー発生" />
      <Button onPress={throwNativeErrorInAsyncProcess} title="Native Modules内の非同期処理でエラー発生" />
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
