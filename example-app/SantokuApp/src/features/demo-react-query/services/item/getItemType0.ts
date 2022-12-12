import {ItemRate} from '../../types/ItemRate';

// 商品種別0API
export const getItemType0 = async (_: {id: number}) => {
  return new Promise<ItemRate>(resolve => {
    setTimeout(() => resolve({rate: 0.1}), 1000);
  });
};
