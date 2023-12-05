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

import notifee, {AndroidImportance} from '@notifee/react-native';

export const messagingChannels = [
  {
    id: 'emergencyChannel',
    name: 'Emergency notification',
    sound: 'default',
    importance: AndroidImportance.HIGH,
  },
  {
    id: 'highChannel',
    name: 'High notification',
    sound: 'default',
    importance: AndroidImportance.DEFAULT,
  },
  {
    id: 'middleChannel',
    name: 'Middle notification',
    sound: 'default',
    importance: AndroidImportance.LOW,
  },
  {
    id: 'lowChannel',
    name: 'Low notification',
    sound: 'default',
    importance: AndroidImportance.MIN,
  },
];

export const createMessagingChannels = async () => {
  await notifee.createChannels(messagingChannels);
};
