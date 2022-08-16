import {randomInt} from 'bases/core/utils/randomInt';

import {Item} from '../../types/Item';

// 商品取得API
export const getItem = async (id: number) => {
  return new Promise<Item>(resolve => {
    setTimeout(() => {
      resolve({id, name: `item-${id}`, type: randomInt(2), price: randomInt(1000)});
    }, 1000);
  });
};
