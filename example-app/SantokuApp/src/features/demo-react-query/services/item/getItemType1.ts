import {ItemRate} from '../../types/ItemRate';

// 商品種別1API
export const getItemType1 = async (_: {id: number}) => {
  return new Promise<ItemRate>(resolve => {
    setTimeout(() => resolve({rate: 0.2}), 1000);
  });
};
