import {Button} from 'components/button';
import {useAccountContextOperation} from 'context/useAccountContextOperation';
import {AuthenticationService} from 'framework/authentication';
import {m} from 'framework/message';
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
  const accountContextOperation = useAccountContextOperation();
  const {mutateAsync: callLogout, isLoading} = AuthenticationService.useLogout();
  const logout = useCallback(async () => {
    try {
      await callLogout();
      accountContextOperation.logout();
    } catch (e) {
      // 個別のエラーハンドリングは不要
    }
  }, [accountContextOperation, callLogout]);
  // NativeStackNavigatorのheaderRightに合わせたコンポーネント。
  const LogoutButton: React.FC<CloseThisNavigatorButtonProps> = () => (
    <HeaderRightLogoutButton onPress={logout} isLoading={isLoading} />
  );

  return {LogoutButton};
};
