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
