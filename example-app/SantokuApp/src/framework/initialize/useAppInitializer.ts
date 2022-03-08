import messaging from '@react-native-firebase/messaging';
import {activateKeepAwake} from 'expo-keep-awake';
import {refreshCsrfToken, setRefreshSessionInterceptor} from 'framework/backend';
import {useCallback, useMemo, useState} from 'react';

import {
  hideSplashScreen,
  initializeFirebaseCrashlyticsAsync,
  loadBundledMessagesAsync,
  loadInitialDataAsync,
} from './helpers';
import {AppInitialData} from './types';

export interface AppInitializer {
  initialize: () => Promise<void>;
  isInitialized: boolean;
  initialData?: Readonly<AppInitialData>;
}

const initializeCoreFeatures = async () => {
  // 開発中は画面がスリープしないように設定
  if (__DEV__) {
    activateKeepAwake();
  }

  // Firebase Crashlyticsの初期化
  await initializeFirebaseCrashlyticsAsync();
  // アプリ内で使用するメッセージのロード
  await loadBundledMessagesAsync();
};

const loadInitialData = async () => {
  // アプリ未起動の間に届いた通知メッセージの取得
  // このアプリでは初期画面の決定に利用するのみで、それ以外の個別の処理は行わない
  const notification = (await messaging().getInitialNotification()) ?? undefined;

  // TODO: ディープリンクから起動した場合のパラメータ取得
  // TODO: 強制アップデート対象バージョンかどうかの確認
  // TODO: キャッシュの削除

  // バックエンドから初期データを取得
  // この時点ではReact QueryのQueryClientProviderはマウントされていないため、useQueryは使わずにデータを取得する
  const account = await loadInitialDataAsync();
  return {
    notification,
    account,
  };
};

export const useAppInitializer: () => AppInitializer = () => {
  const [initializationState, setInitializationState] = useState<{
    isInitialized: boolean;
    initialData?: AppInitialData;
  }>({isInitialized: false});

  const initialize = useCallback(async () => {
    await initializeCoreFeatures();
    // CsrfTokenを取得し、AxiosInstanceのデフォルトヘッダに設定
    await refreshCsrfToken();
    // AxiosInstanceに401の時のリトライ処理を追加
    setRefreshSessionInterceptor();

    // 初期データの読み込み
    const initialData = Object.freeze(await loadInitialData());

    // TODO: 読み込んだ初期データをFirebase Crashlyticsの設定に反映

    setInitializationState({isInitialized: true, initialData});
    await hideSplashScreen();
  }, []);

  return useMemo(
    () => ({
      initialize,
      ...initializationState,
    }),
    [initializationState, initialize],
  );
};
