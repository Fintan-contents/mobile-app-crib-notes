import type {ParamListBase} from '@react-navigation/routers';

// React Navigation の useNavigation/Link/ref 等のデフォルトタイプを指定
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }
}
