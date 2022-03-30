import {useCallback} from 'react';
import {useQuery} from 'react-query';
import {getItemInfo} from 'service';

const useDependentQueryDemo2 = () => {
  // 並列クエリ
  // 商品取得APIを呼び出した後、商品種別に応じて異なるAPIで割引率を取得する
  // その後、商品の価格と割引率を入力として金額計算APIを呼び出す
  const query = useQuery(['itemInfo'], () => getItemInfo(1));
  const reload = useCallback(() => {
    query.remove();
    query.refetch().catch(() => {});
  }, [query]);

  return {
    ...query,
    result: query.data,
    reload,
  };
};

export {useDependentQueryDemo2};
