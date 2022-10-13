import * as FileSystem from 'expo-file-system';
import {Image} from 'react-native';

import santokuAvatarImage from './assets/santoku-avatar.png';

export const avatarData = async () => {
  const image = Image.resolveAssetSource(santokuAvatarImage);
  if (!image) {
    return undefined;
  }
  const uri = image.uri;
  const documentDirectory = FileSystem.documentDirectory!;
  if (uri.match(/^https?:/)) {
    try {
      await FileSystem.downloadAsync(image.uri, `${documentDirectory}santoku-avatar.png`);
    } catch (e) {
      console.error(e);
    }
  } else if (uri.match(/^file:/)) {
    try {
      await FileSystem.copyAsync({from: uri, to: `${documentDirectory}santoku-avatar.png`});
    } catch (e) {
      console.error(e);
    }
  }
};
