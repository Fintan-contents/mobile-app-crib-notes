import {isGetFcmTokenError} from 'bases/firebase/messaging/getFcmToken';
import {isRequestPushPermissionError} from 'bases/firebase/messaging/requestPushPermission';
import {log} from 'bases/logging';
import {m} from 'bases/message/Message';
import {Button} from 'bases/ui/button/Button';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {EventList} from 'features/qa-event/components/EventList';
import {QuestionList} from 'features/qa-question/components/QuestionList';
import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {useRequestPermissionAndRegisterToken} from '../services/useRequestPermissionAndRegisterToken';

export type HomePageProps = {
  navigateToQuestionAndEventPost: () => void;
  navigateToQuestionDetail: (questionId: string) => void;
};

export const HomePage: React.VFC<HomePageProps> = ({navigateToQuestionAndEventPost, navigateToQuestionDetail}) => {
  const {requestPermissionAndRegisterToken: callRequestPermissionAndRegisterToken} =
    useRequestPermissionAndRegisterToken();
  // Push通知の許可ダイアログ表示とFCM登録トークンの登録・更新
  const requestPermissionAndRegisterToken = useCallback(async () => {
    try {
      await callRequestPermissionAndRegisterToken();
    } catch (e) {
      // Push通知のパーミッションリクエストに失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isRequestPushPermissionError(e)) {
        log.error(
          m('app.push.notification.requestPushPermissionError', String(e)),
          'app.push.notification.requestPushPermissionError',
        );
        Snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
      // FCMの登録トークンの取得に失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isGetFcmTokenError(e)) {
        log.error(m('app.push.notification.getFcmTokenError', String(e)), 'app.push.notification.getFcmTokenError');
        Snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
    }
  }, [callRequestPermissionAndRegisterToken]);

  useEffect(() => {
    requestPermissionAndRegisterToken().catch(() => {
      // requestPermissionAndRegisterTokenでエラーハンドリングを実施しているので、ここでは特に何もしない
    });
  }, [requestPermissionAndRegisterToken]);

  return (
    <View style={styles.container} testID="HomePage">
      <Text>開発中</Text>
      <EventList />
      <QuestionList />
      <Spacer heightRatio={0.02} />
      <Button title="Go to QuestionDetail" onPress={() => navigateToQuestionDetail('1')} size="large" />
      <Spacer heightRatio={0.02} />
      <Button title="Go to QuestionAndEventPost" onPress={navigateToQuestionAndEventPost} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
