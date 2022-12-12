import {m} from 'bases/message/Message';
import {Alert} from 'react-native';

import {openStoreLink} from '../services/openStoreLink';

export function showUpdateRequiredDialog(supportedVersion: string) {
  Alert.alert(
    m('アプリアップデート'),
    m(
      '現在のバージョン({0})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
      supportedVersion,
    ),
    [
      {
        text: m('OK'),
        onPress: () => {
          openStoreLink()?.catch(() => {
            // 中でハンドリングされているので、ここでは特に何もしない。
          });
        },
      },
    ],
  );
}
