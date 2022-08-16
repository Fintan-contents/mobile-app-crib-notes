import {useCallback} from 'react';
import {useQuery} from 'react-query';

// 商品
type Item = {
  id: number;
  name: string;
  type: number;
  price: number;
};

// 商品の割引率
type ItemRate = {rate: number};

// 商品取得API
const getItem = async (id: number) => {
  return new Promise<Item>(resolve => {
    setTimeout(() => {
      resolve({id, name: `item-${id}`, type: getRandomInt(2), price: getRandomInt(1000)});
    }, 1000);
  });
};

// 金額計算API
const getAmount = async (req: {price: number; rate: number}) => {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(Math.round(req.price * (1 - req.rate))), 1000);
  });
};

// 商品種別0API
const getItemType0 = async (_: {id: number}) => {
  return new Promise<ItemRate>(resolve => {
    setTimeout(() => resolve({rate: 0.1}), 1000);
  });
};

// 商品種別1API
const getItemType1 = async (_: {id: number}) => {
  return new Promise<ItemRate>(resolve => {
    setTimeout(() => resolve({rate: 0.2}), 1000);
  });
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
export const useItem = (id: number) => {
  // 並列クエリ
  // 商品取得APIを呼び出した後、商品種別に応じて異なるAPIで割引率を取得する
  // その後、商品の価格と割引率を入力として金額計算APIを呼び出す
  const itemQuery = useQuery<Item>(['item'], () => getItem(id));
  const item = itemQuery.data;

  const itemType0Query = useQuery<ItemRate>(['itemType0', itemQuery.data], () => getItemType0(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 0,
  });

  const itemType1Query = useQuery<ItemRate>(['itemType1', itemQuery.data], () => getItemType1(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 1,
  });

  const rate =
    itemQuery.isSuccess && itemType0Query.isSuccess
      ? itemType0Query.data.rate
      : itemQuery.isSuccess && itemType1Query.isSuccess
      ? itemType1Query.data.rate
      : undefined;
  const amountQueryParams = itemQuery.data && rate ? {price: itemQuery.data.price, rate} : undefined;

  const amountQuery = useQuery(['amount', amountQueryParams], () => getAmount(amountQueryParams!), {
    enabled: !!amountQueryParams,
  });
  const amount = amountQuery.data;

  const queries = [itemQuery, itemType0Query, itemType1Query, amountQuery];
  const isIdle = queries.every(query => query.isIdle);
  const isLoading = queries.some(query => query.isLoading);
  const isRefetching = queries.some(query => query.isRefetching);
  const isSuccess = queries.every(query => query.isSuccess);
  const isError = queries.some(query => query.isError);
  const reload = useCallback(() => {
    itemQuery.remove();
    itemQuery.refetch().catch(() => {});
  }, [itemQuery]);

  return {
    item: {...item, rate, amount},
    isIdle,
    isLoading,
    isRefetching,
    isSuccess,
    isError,
    refetch: itemQuery.refetch,
    reload,
  };
};
