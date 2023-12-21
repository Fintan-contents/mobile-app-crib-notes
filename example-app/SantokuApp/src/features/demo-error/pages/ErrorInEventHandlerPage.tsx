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

const throwJsErrorInSyncProcess = () => {
  throw new Error('Error has occurred in synchronous process of EventHandler.');
};

const throwJsErrorInAsyncProcess = () => {
  // eslint-disable-next-line no-void -- 検証のためにあえてcatchをしないため、voidを使用して無視するようにしている
  void new Promise(() => {
    throw new Error('Error has occurred in asynchronous process of EventHandler.');
  });
};

export const ErrorInEventHandlerPage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwJsErrorInSyncProcess} title="同期処理でエラー発生" />
      <Button onPress={throwJsErrorInAsyncProcess} title="非同期処理でエラー発生" />
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
