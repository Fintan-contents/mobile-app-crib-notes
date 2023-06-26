import {messagingChannels} from 'bases/push-notification/createMessagingChannels';
import {Item} from 'bases/ui/picker/SelectPicker';
import {useCallback} from 'react';

const labelWithValue = ({value, label}: {value: string | undefined; label: string}) => ({
  value,
  label: `${label} (${String(value)})`,
});

const priorities = [
  // https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns
  {value: undefined, label: '選択しない'},
  {value: '1', label: 'Low'},
  {value: '5', label: 'Normal'},
  {value: '10', label: 'High'},
].map(labelWithValue);

const interruptionLevels = [
  // https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification
  {value: undefined, label: '選択しない'},
  {value: 'passive', label: 'passive'},
  {value: 'active', label: 'active'},
  {value: 'time-sensitive', label: 'time-sensitive'},
  {value: 'critical', label: 'critical'},
].map(labelWithValue);

const channels = [
  {value: undefined, label: 'No channel'},
  ...messagingChannels.map(channel => ({value: channel.id, label: channel.name})),
].map(labelWithValue);

type Props = {
  setFormPriority: (value?: string) => Promise<void>;
  setFormInterruptionLevel: (value?: string) => Promise<void>;
  setFormChannel: (value?: string) => Promise<void>;
};

export const usePushNotificationSelectPicker = ({setFormPriority, setFormInterruptionLevel, setFormChannel}: Props) => {
  const onSelectedPriorityChange = useCallback(
    (selectedItem?: Item<string | undefined>) => {
      return setFormPriority(selectedItem?.value);
    },
    [setFormPriority],
  );

  const onSelectedInterruptionLevelsKeyChange = useCallback(
    (selectedItem?: Item<string | undefined>) => {
      return setFormInterruptionLevel(selectedItem?.value);
    },
    [setFormInterruptionLevel],
  );

  const onSelectedChannelChange = useCallback(
    (selectedItem?: Item<string | undefined>) => {
      return setFormChannel(selectedItem?.value);
    },
    [setFormChannel],
  );
  return {
    priorities,
    interruptionLevels,
    channels,
    onSelectedPriorityChange,
    onSelectedInterruptionLevelsKeyChange,
    onSelectedChannelChange,
  };
};
