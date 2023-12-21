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

import messaging from '@react-native-firebase/messaging';
import {useTheme} from '@shopify/restyle';
import axios, {AxiosError} from 'axios';
import {Box, StyledSafeAreaView, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledButton} from 'bases/ui/common/StyledButton';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {AddIllustration} from 'bases/ui/illustration/AddIllustration';
import {RemoveIllustration} from 'bases/ui/illustration/RemoveIllustration';
import {SelectPicker} from 'bases/ui/picker/SelectPicker';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {useAccountData} from 'features/account/services/account/useAccountData';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import {ErrorResponse} from 'features/sandbox/apis/model';
import React, {useCallback, useMemo} from 'react';
import {Pressable, Switch} from 'react-native';

import {usePushNotificationSenderForm} from '../forms/usePushNotificationSenderForm';
import {useGetFcmToken} from '../services/useGetFcmToken';
import {useHasPermission} from '../services/useHasPermission';
import {usePushNotificationSendCommands} from '../services/usePushNotificationSendCommands';
import {usePushNotificationSelectPicker} from '../use-cases/usePushNotificationSelectPicker';

const handleApiError = (e: unknown) => {
  if (axios.isAxiosError(e)) {
    const axiosError = e as AxiosError<ErrorResponse>;
    if (axiosError.response) {
      alert(axiosError.response.data.message);
      return;
    }
    alert(e);
  }
};

export type PushNotificationSenderPageProps = {
  navigateToPushNotificationStatus: () => void;
};
export const PushNotificationSenderPage: React.FC<PushNotificationSenderPageProps> = ({
  navigateToPushNotificationStatus,
}) => {
  const theme = useTheme<RestyleTheme>();
  const pickerTextInputProps = {style: {color: theme.textVariants.defaults.color, borderBottomWidth: 1}};
  const {
    form,
    setFormContentAvailable,
    setFormPriority,
    setFormInterruptionLevel,
    setFormChannel,
    addDataField,
    removeDataField,
  } = usePushNotificationSenderForm();
  const {
    priorities,
    onSelectedPriorityChange,
    interruptionLevels,
    onSelectedInterruptionLevelsKeyChange,
    channels,
    onSelectedChannelChange,
  } = usePushNotificationSelectPicker({setFormPriority, setFormInterruptionLevel, setFormChannel});
  const {fcmToken} = useGetFcmToken();
  const {permission} = useHasPermission();
  const {
    sendToMe: callSendToMe,
    isSendingToMe,
    sendToAll: callSendToAll,
    isSendingToAll,
  } = usePushNotificationSendCommands();

  const {data: accountData, isFetching: isFetchingAccountData} = useAccountData();

  const isAllowedPermission = useMemo(
    () =>
      permission === messaging.AuthorizationStatus.AUTHORIZED ||
      permission === messaging.AuthorizationStatus.PROVISIONAL,

    [permission],
  );

  const hasFcmToken = useMemo(() => {
    return !!fcmToken;
  }, [fcmToken]);

  const isRegisteredDeviceToken = useMemo(() => {
    return fcmToken ? accountData?.account.deviceTokens.includes(fcmToken) : false;
  }, [accountData?.account.deviceTokens, fcmToken]);

  const isReceivableOnThisDevice = useMemo(
    () => isAllowedPermission && hasFcmToken && isRegisteredDeviceToken,
    [hasFcmToken, isAllowedPermission, isRegisteredDeviceToken],
  );

  const buildPushNotificationParams = useCallback(() => {
    // string型の入力項目は、空文字の場合は送信しないため除外する
    const filteredStringField = Object.fromEntries(
      Object.entries(form.values).filter(([_, value]) => (typeof value === 'string' ? value : true)),
    );
    // Data属性は、Keyが入力されていないものは送信しないため除外する
    const filteredData = form.values.data.filter(f => f.key);
    return {...filteredStringField, data: filteredData.length ? filteredData : undefined};
  }, [form.values]);

  const sendToAll = useCallback(async () => {
    try {
      if (form.isValid) {
        await callSendToAll({params: buildPushNotificationParams()});
      }
    } catch (e) {
      handleApiError(e);
    }
  }, [form.isValid, callSendToAll, buildPushNotificationParams]);

  const sendToMe = useCallback(async () => {
    if (fcmToken) {
      // FCMトークンが取得できていない場合は、自分に送信ボタンが活性化しないため、必ず存在する想定
      try {
        if (form.isValid) {
          await callSendToMe({token: fcmToken, params: buildPushNotificationParams()});
        }
      } catch (e) {
        handleApiError(e);
      }
    }
  }, [fcmToken, form.isValid, callSendToMe, buildPushNotificationParams]);

  return (
    <StyledSafeAreaView flex={1}>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic" p="p12">
        <SpecAndSourceCodeLink feature="push-notification" />
        <Box flex={1} height={1} px="p16" backgroundColor="grey1" />
        <StyledSpace height="p12" />
        <Text>【このデバイスのプッシュ通知受信可否】</Text>
        <Box p="p16">
          {isFetchingAccountData ? (
            <Text>プッシュ通知受信可否を判定中...</Text>
          ) : isReceivableOnThisDevice ? (
            <Text>このデバイスでプッシュ通知を受信可能です。</Text>
          ) : (
            <StyledColumn gap="p2">
              <Text color="textRed" fontWeight="bold">
                このデバイスではプッシュ通知を受信できません。
              </Text>
              {!(isAllowedPermission && hasFcmToken) && (
                <StyledRow>
                  <StyledTouchableOpacity onPress={navigateToPushNotificationStatus}>
                    <Text color="blue">・設定を確認</Text>
                  </StyledTouchableOpacity>
                  <Text>してください。</Text>
                </StyledRow>
              )}
              {!isRegisteredDeviceToken && (
                <Text>・バックエンドAPIに存在しているアカウントで再ログインしてください。</Text>
              )}
            </StyledColumn>
          )}
        </Box>
        <Box flex={1} height={1} px="p16" backgroundColor="grey1" />
        <StyledSpace height="p12" />
        <Text>プッシュ通知として送るパラメータを入力してください。</Text>
        <Text>未入力の項目は、バックエンドに送信されません。</Text>
        <StyledSpace height="p12" />
        <SettingBox title="【共通設定】">
          <WithLabel label="通知タイトル">
            <StyledTextInput
              value={form.values.notificationTitle}
              onChangeText={form.handleChange('notificationTitle')}
              borderBottomWidth={1}
              multiline
            />
          </WithLabel>
          <WithLabel label="通知ボディ">
            <StyledTextInput
              value={form.values.notificationBody}
              onChangeText={form.handleChange('notificationBody')}
              borderBottomWidth={1}
              multiline
            />
          </WithLabel>
          <StyledRow gap="p8" alignItems="center">
            <Text>データ属性の追加</Text>
            <Pressable onPress={addDataField}>
              <AddIllustration color="blue" />
            </Pressable>
          </StyledRow>
          <Text>{`Keyが未入力の項目は、バックエンドに送信されません。
Keyが入力されており、Valueが未入力の場合は送信されます。`}</Text>
          <StyledColumn>
            {form.values.data.map((d, index) => {
              return (
                <StyledRow key={`data-${index}`} gap="p24">
                  <Box flex={2}>
                    <StyledTextInput
                      value={d.key}
                      onChangeText={form.handleChange(`data[${index}].key`)}
                      borderBottomWidth={1}
                      placeholder="Key"
                    />
                  </Box>
                  <Box flex={2}>
                    <StyledTextInput
                      value={d.value}
                      onChangeText={form.handleChange(`data[${index}].value`)}
                      borderBottomWidth={1}
                      placeholder="Value"
                    />
                  </Box>
                  <StyledRow>
                    <Pressable>
                      <RemoveIllustration color="textRed" onPress={() => removeDataField(index)} />
                    </Pressable>
                  </StyledRow>
                </StyledRow>
              );
            })}
          </StyledColumn>
        </SettingBox>
        <SettingBox title="【iOS設定】">
          <StyledRow alignItems="center" justifyContent="space-between" gap="p4">
            <Text>content-available</Text>
            <Switch value={form.values.contentAvailable} onValueChange={setFormContentAvailable} />
          </StyledRow>
          <WithLabel label="バッジ">
            <StyledTextInput
              value={form.values.badge}
              onChangeText={form.handleChange('badge')}
              keyboardType="numeric"
              borderBottomWidth={1}
              errorMessage={form.errors.badge}
            />
          </WithLabel>
          <WithLabel label="collapse-id">
            <StyledTextInput
              value={form.values.collapseId}
              onChangeText={form.handleChange('collapseId')}
              borderBottomWidth={1}
            />
          </WithLabel>
          <WithLabel label="Priority">
            <SelectPicker
              items={priorities}
              selectedItemKey={form.values.priority}
              onSelectedItemChange={onSelectedPriorityChange}
              textInputProps={pickerTextInputProps}
            />
          </WithLabel>
          <WithLabel label="InterruptionLevel">
            <SelectPicker
              items={interruptionLevels}
              selectedItemKey={form.values.interruptionLevel}
              onSelectedItemChange={onSelectedInterruptionLevelsKeyChange}
              textInputProps={pickerTextInputProps}
            />
          </WithLabel>
          <WithLabel label="RelevanceScore">
            <StyledTextInput
              value={form.values.relevanceScore}
              onChangeText={form.handleChange('relevanceScore')}
              borderBottomWidth={1}
              errorMessage={form.errors.relevanceScore}
            />
          </WithLabel>
        </SettingBox>
        <SettingBox title="【Android設定】">
          <WithLabel label="通知数">
            <StyledTextInput
              value={form.values.notificationCount}
              onChangeText={form.handleChange('notificationCount')}
              keyboardType="numeric"
              borderBottomWidth={1}
              errorMessage={form.errors.notificationCount}
            />
          </WithLabel>
          <WithLabel label="collapse_key">
            <StyledTextInput
              value={form.values.collapseKey}
              onChangeText={form.handleChange('collapseKey')}
              borderBottomWidth={1}
            />
          </WithLabel>
          <WithLabel label="チャンネル">
            <SelectPicker
              items={channels}
              selectedItemKey={form.values.channelId}
              onSelectedItemChange={onSelectedChannelChange}
              textInputProps={pickerTextInputProps}
            />
          </WithLabel>
        </SettingBox>
      </StyledScrollView>
      <StyledRow justifyContent="center" gap="p16">
        <StyledButton title="一斉送信" onPress={sendToAll} isLoading={isSendingToAll} />
        <StyledButton
          title="自分に送信"
          opacity={isReceivableOnThisDevice ? 1 : 0.5}
          disabled={!isReceivableOnThisDevice}
          onPress={sendToMe}
          isLoading={isSendingToMe}
        />
      </StyledRow>
    </StyledSafeAreaView>
  );
};

const SettingBox: React.FC<React.PropsWithChildren<{title: string}>> = ({title, children}) => {
  return (
    <Box>
      <Text>{title}</Text>
      <StyledColumn p="p24" gap="p12">
        {children}
      </StyledColumn>
    </Box>
  );
};
const WithLabel: React.FC<React.PropsWithChildren<{label: string}>> = ({label, children}) => {
  return (
    <StyledColumn>
      <Text>{label}</Text>
      <StyledRow>
        <StyledSpace width="p8" />
        <Box flex={1}>{children}</Box>
      </StyledRow>
    </StyledColumn>
  );
};
