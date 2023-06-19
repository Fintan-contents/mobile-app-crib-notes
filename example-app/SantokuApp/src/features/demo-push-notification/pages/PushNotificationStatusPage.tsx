import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledButton} from 'bases/ui/common/StyledButton';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import React, {useCallback, useMemo} from 'react';

import {openSettings} from '../services/openSettings';
import {requestUserPermission as requestUserPermissionService} from '../services/requestUserPermission';
import {useGetFcmToken} from '../services/useGetFcmToken';
import {useHasPermission} from '../services/useHasPermission';

const getPermissionAuthStatusForDisplay = (permissionAuthStatus: FirebaseMessagingTypes.AuthorizationStatus) => {
  switch (permissionAuthStatus) {
    case messaging.AuthorizationStatus.NOT_DETERMINED:
      return 'NOT_DETERMINED';
    case messaging.AuthorizationStatus.DENIED:
      return 'DENIED';
    case messaging.AuthorizationStatus.AUTHORIZED:
      return 'AUTHORIZED';
    case messaging.AuthorizationStatus.PROVISIONAL:
      return 'PROVISIONAL';
  }
};

export const PushNotificationStatusPage: React.FC = () => {
  const {fcmToken, refetch: refetchFcmToken} = useGetFcmToken();
  const {permission, refetch: refetchPermission} = useHasPermission();

  const permissionAuthStatus = useMemo(() => {
    return permission == null ? undefined : getPermissionAuthStatusForDisplay(permission);
  }, [permission]);

  const requestUserPermission = useCallback(
    async (options?: FirebaseMessagingTypes.IOSPermissions) => {
      await requestUserPermissionService(options);
      await refetchFcmToken();
      await refetchPermission();
    },
    [refetchFcmToken, refetchPermission],
  );

  const requestUserPermissionWithoutOptions = useCallback(async () => {
    await requestUserPermission();
  }, [requestUserPermission]);

  const requestUserPermissionWithProvisional = useCallback(async () => {
    await requestUserPermission({provisional: true});
  }, [requestUserPermission]);

  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex={1} p="p12">
          <Text>【Permission】</Text>
          <StyledColumn p="p24" gap="p12">
            <Text>現在のステータス：{permissionAuthStatus ?? 'Permissionのステータスが表示されます。'}</Text>
            <StyledRow justifyContent="center" gap="p16">
              <StyledButton onPress={requestUserPermissionWithoutOptions} title="許可" />
              <StyledButton onPress={requestUserPermissionWithProvisional} title="仮許可" />
            </StyledRow>
            <Text>
              一度でも許可ダイアログで許可もしくは拒否すると、それ以降はステータスを`PROVISIONAL`に変更できなくなります。
            </Text>
          </StyledColumn>
          <Text>【FCM登録トークン】</Text>
          <StyledColumn p="p24">
            <Text selectable>
              {fcmToken ??
                `FCM登録トークンは発行されていません。
Firebaseの設定ファイルが正しくない可能性があります。`}
            </Text>
          </StyledColumn>
          <Text>【通知設定】</Text>
          <StyledColumn p="p24" gap="p12">
            <Text>OSのアプリ設定画面に遷移します。</Text>
            <StyledRow justifyContent="center">
              <StyledButton onPress={openSettings} title="アプリの設定画面を開く" />
            </StyledRow>
          </StyledColumn>
        </Box>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};
