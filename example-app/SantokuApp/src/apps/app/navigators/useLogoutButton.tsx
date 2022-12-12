import {handleErrorWithAlert} from 'bases/core/errors/handleErrorWithAlert';
import {isGetFcmTokenError} from 'bases/firebase/messaging/getFcmToken';
import {m} from 'bases/message/Message';
import {Button} from 'bases/ui/button/Button';
import {useAuthCommands} from 'features/account/services/auth/useAuthCommands';
import React, {useCallback} from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';

type HeaderRightLogoutButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  isLoading: boolean;
};

const HeaderRightLogoutButton: React.FC<HeaderRightLogoutButtonProps> = ({onPress, isLoading}) => {
  return (
    <Button
      title={m('ログアウト')}
      size="small"
      type="clear"
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      onPress={onPress}
      loading={isLoading}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 14,
    color: '#4b6bbd',
  },
  buttonStyle: {
    height: undefined,
  },
});

type CloseThisNavigatorButtonProps = {
  tintColor?: string;
};

export const useLogoutButton = () => {
  const {logout, isLoggingOut} = useAuthCommands();
  const onLogout = useCallback(async () => {
    try {
      await logout(undefined);
    } catch (e) {
      // 基本的にはFCM登録トークンの取得は失敗しない想定ですが、もし失敗した場合は、Firebase Crashlyticsにログを送信してアラートを表示します。
      if (isGetFcmTokenError(e)) {
        handleErrorWithAlert(e, m('app.account.ログアウトエラータイトル'), m('app.account.ログアウトエラー本文'));
      }
    }
  }, [logout]);
  // NativeStackNavigatorのheaderRightに合わせたコンポーネント。
  const LogoutButton: React.FC<React.PropsWithChildren<CloseThisNavigatorButtonProps>> = () => (
    <HeaderRightLogoutButton onPress={onLogout} isLoading={isLoggingOut} />
  );

  return {LogoutButton};
};
