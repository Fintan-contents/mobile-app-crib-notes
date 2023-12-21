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

import {AppConfig} from 'bases/core/configs/AppConfig';
import React, {useCallback} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const openUrl = async (url: string) => {
  await Linking.openURL(url);
};

type Props = {
  feature: string;
};
export const SpecAndSourceCodeLink: React.FC<Props> = ({feature}) => {
  const openSpec = useCallback(async () => {
    await openUrl(`${AppConfig.mobileAppCribNotesWebsiteUrl}/react-native/santoku/design/demo/${feature}/overview`);
  }, [feature]);
  const openSourceCode = useCallback(async () => {
    await openUrl(
      `${AppConfig.mobileAppCribNotesRepositoryUrl}/tree/master/example-app/SantokuApp/src/features/demo-${feature}`,
    );
  }, [feature]);

  return (
    <View style={styles.container}>
      <Button title="・デモページの説明" type="clear" onPress={openSpec} />
      <Button title="・デモページのソースコード" type="clear" onPress={openSourceCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'flex-start',
  },
});
