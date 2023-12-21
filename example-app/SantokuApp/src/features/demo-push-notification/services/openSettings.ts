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

import {Linking, Platform} from 'react-native';

export const openSettings = async () => {
  if (Platform.OS === 'ios') {
    // アプリの設定画面を開きます。
    await Linking.openSettings();
  } else if (Platform.OS === 'android') {
    // 以下のようにLinking.sendIntentを使用することで、アプリの通知設定画面を表示できる想定でした。
    // https://reactnative.dev/docs/linking#send-intents-android
    // しかし、React Nativeの0.67未満では、Linking.sendIntentの不具合により、インテントを実行できないようです。
    // https://github.com/facebook/react-native/pull/29000
    // そのため、アプリの設定画面を開きます。
    await Linking.openSettings();
  }
};
