import {db} from '../db';

export const notificationData = () => {
  db.notification.create({
    notificationId: '1',
    title: 'メンテナンスのお知らせ',
    datetime: '2022-06-01T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '2',
    title: 'メニュー構成の見直しについて',
    datetime: '2022-06-05T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '3',
    title: 'メンテナンスのお知らせ',
    datetime: '2022-06-10T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '4',
    title: 'メンテナンスのお知らせ',
    datetime: '2022-06-20T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '5',
    title: 'メンテナンスのお知らせ',
    datetime: '2022-06-30T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '6',
    title: '新機能のリリース',
    datetime: '2022-07-01T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '7',
    title: 'メンテナンスのお知らせ',
    datetime: '2022-07-08T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '8',
    title: 'メンテナンスのお知らせ',
    datetime: '2022-07-18T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '9',
    title: 'メンテナンスのお知らせ',
    datetime: '2022-07-29T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
  db.notification.create({
    notificationId: '10',
    title: '使用時の注意点',
    datetime: '2022-08-01T10:00:00Z',
    contentUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
  });
};
