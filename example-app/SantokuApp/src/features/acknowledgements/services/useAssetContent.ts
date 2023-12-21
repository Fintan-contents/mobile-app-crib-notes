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

import {useQuery} from '@tanstack/react-query';
import {Asset} from 'expo-asset';
import * as FileSystem from 'expo-file-system';

const loadAssetContent = async (moduleId: number | undefined) => {
  if (moduleId == null) {
    // useQueryのqueryFnからundefinedを返却するとエラーがthrowされてしまうため、nullを返却する
    return null;
  }
  return Asset.loadAsync(moduleId).then(assets => {
    if (assets?.length && assets[0].localUri) {
      return FileSystem.readAsStringAsync(assets[0].localUri, {encoding: 'utf8'});
    }
    // useQueryのqueryFnからundefinedを返却するとエラーがthrowされてしまうため、nullを返却する
    return null;
  });
};

export const useAssetContent = (moduleId?: number) => {
  return useQuery(['acknowledgements', 'assetContent', moduleId], () => loadAssetContent(moduleId));
};
