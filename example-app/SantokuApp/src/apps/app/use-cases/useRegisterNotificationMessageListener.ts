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

import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {useCallback} from 'react';

const showMessageOnSnackbar = (
  message: FirebaseMessagingTypes.RemoteMessage,
  // snackbar: ReturnType<typeof useSnackbar>,
) => {
  if (message.notification) {
    // アプリ操作中に受信した場合は通知内容をスナックバーに表示し、通知データに応じた処理は行わない
    const snackBarText = message.notification.body ?? message.notification.title;
    if (snackBarText) {
      Snackbar.show(snackBarText);
    }
  }
};

export const useRegisterNotificationMessageListener = () => {
  // アプリを前面で操作中に通知を受信した際に行う処理
  const listener = useCallback((message: FirebaseMessagingTypes.RemoteMessage) => showMessageOnSnackbar(message), []);
  const registerNotificationMessageListener = useCallback(() => {
    return messaging().onMessage(listener);
  }, [listener]);
  return {registerNotificationMessageListener};
};
