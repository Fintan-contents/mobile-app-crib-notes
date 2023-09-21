import * as Linking from 'expo-linking';
export const getInitialDeepLinkUrl = async () => (await Linking.getInitialURL()) ?? undefined;
