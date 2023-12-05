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

import {Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';

export type AppInfoItemData = {
  name?: string;
  value: string | null;
};

type AppInfoListItemProps = {
  item: AppInfoItemData;
};

export const AppInfoListItem = ({item}: AppInfoListItemProps) => {
  return !item.name ? null : (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>
          <Text>{item.name}</Text>
        </ListItem.Title>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text>{item.value}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};
