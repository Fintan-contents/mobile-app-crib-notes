import notifee, {AndroidImportance} from '@notifee/react-native';

export const createMessagingChannels = async () => {
  await notifee.createChannels([
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
  ]);
};
