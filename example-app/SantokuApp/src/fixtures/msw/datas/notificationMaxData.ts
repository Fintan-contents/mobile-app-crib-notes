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

import {maxDb} from '../db';
import {format2Iso8601} from '../utils/format2Iso8601';

export const notificationMaxData = () => {
  maxDb.notification.create({
    notificationId: '1',
    title:
      '【重要】メンテナンスのお知らせ - 長時間に渡りメンテナンス作業を実施致します。その間、アプリを使用できなくなる旨ご了承ください。',
    datetime: '2022-06-10T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  maxDb.notification.create({
    notificationId: '2',
    title: `新機能のリリース
新しい機能を使用するには、iOS・Androidのアプリのアップデートが必要です。
詳細はリンクページをご覧ください。`,
    datetime: '2022-07-01T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  const date = new Date(2022, 6, 1, 10, 0, 0);
  [...(Array(48) as unknown[])].forEach((_, index) => {
    date.setDate(date.getDate() + 1);
    maxDb.notification.create({
      notificationId: String(index + 3),
      title: `メンテナンスのお知らせ${index + 1}`,
      datetime: format2Iso8601(date),
      contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
    });
  });
};
