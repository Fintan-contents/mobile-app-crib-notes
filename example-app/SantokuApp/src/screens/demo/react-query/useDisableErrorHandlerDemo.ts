import {Alert} from 'react-native';
import {useQuery} from 'react-query';

const useDisableErrorHandlerDemo = () => {
  const queryFn = () => {
    throw new Error('リクエストエラー');
  };
  const defaultQuery = useQuery('dummy1', queryFn, {
    enabled: false,
  });
  const customErrorQuery = useQuery('dummy2', queryFn, {
    enabled: false,
    onError: () => {
      Alert.alert('カスタムエラー処理', 'エラーが発生しました');
    },
  });
  const customErrorQueryWithoutGlobalErrorHandling = useQuery('dummy3', queryFn, {
    enabled: false,
    meta: {disableGlobalErrorHandler: true},
    onError: () => {
      Alert.alert('カスタムエラー処理', 'エラーが発生しました');
    },
  });

  return {
    defaultQuery,
    customErrorQuery,
    customErrorQueryWithoutGlobalErrorHandling,
  };
};

export {useDisableErrorHandlerDemo};
