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
