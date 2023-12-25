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

import {getAmount} from './getAmount';
import {getItem} from './getItem';
import {getItemType0} from './getItemType0';
import {getItemType1} from './getItemType1';

export const getItemInfo = async (id: number) => {
  const item = await getItem(id);
  const itemType = item.type === 0 ? await getItemType0({id: item.id}) : await getItemType1({id: item.id});
  const amount = await getAmount({price: item.price, rate: itemType.rate});
  return {
    ...item,
    rate: itemType.rate,
    amount,
  };
};
