import messaging from '@react-native-firebase/messaging';
import * as Application from 'expo-application';
import {activateKeepAwake} from 'expo-keep-awake';
import {refreshCsrfToken, setRefreshSessionInterceptor} from 'framework/backend';
import {resolveErrorMessage} from 'framework/error/resolveErrorMessage';
import {sendErrorLog} from 'framework/error/sendErrorLog';
import {useCallback, useMemo, useState} from 'react';
import {Platform} from 'react-native';

import {AuthenticationService, isUnauthorizedError} from '../authentication';
import {enhanceValidator} from '../validator';
import {
  AccountData,
  checkAppUpdates,
  hideSplashScreen,
  initializeFirebaseCrashlyticsAsync,
  isInitialDataError,
  isUpdateRequiredError,
  loadBundledMessagesAsync,
  loadInitialAccountDataAsync,
  UpdateRequiredError,
} from './helpers';
import {autoLogin} from './helpers/autoLogin';
import {AppInitialData} from './types';

export interface AppInitializer {
  initialize: () => Promise<void>;
  initializationResult: InitializationResult;
}

type Initializing = {
  code: 'Initializing';
};
type InitializeSuccessResult = {
  code: 'Success';
  data: {accountData: AccountData; initialData: AppInitialData};
};
type InitializeUpdateRequiredResult = {
  code: 'UpdateRequired';
  message: string;
  supportedVersion: string;
};
type InitializeFailedResult = {
  code: 'Failed';
  title: string;
  message: string;
};

type InitializationResult =
  | Initializing
  | InitializeSuccessResult
  | InitializeUpdateRequiredResult
  | InitializeFailedResult;

const initializeCoreFeatures = async () => {
  // 開発中は画面がスリープしないように設定
  if (__DEV__) {
    activateKeepAwake();
  }

  // Firebase Crashlyticsの初期化
  await initializeFirebaseCrashlyticsAsync();
  // アプリ内で使用するメッセージのロード
  await loadBundledMessagesAsync();
  // メッセージのロード後にYupの設定をする必要がある
  enhanceValidator();
};

const loadData = async () => {
  // アプリ未起動の間に届いた通知メッセージの取得
  // このアプリでは初期画面の決定に利用するのみで、それ以外の個別の処理は行わない
  const notification = (await messaging().getInitialNotification()) ?? undefined;

  // TODO: ディープリンクから起動した場合のパラメータ取得

  const appUpdates = await checkAppUpdates(Platform.OS, Application.nativeApplicationVersion);
  if (appUpdates.updateRequired) {
    throw new UpdateRequiredError(appUpdates.message, appUpdates.supportedVersion);
  }

  // TODO: キャッシュの削除
  const initialData = {notification};
  if (!(await AuthenticationService.canAutoLogin())) {
    return {accountData: {}, initialData};
  }

  try {
    await autoLogin();
  } catch (e) {
    if (isUnauthorizedError(e)) {
      return {accountData: {}, initialData};
    }
    throw e;
  }

  // バックエンドから初期データを取得
  // この時点ではReact QueryのQueryClientProviderはマウントされていないため、useQueryは使わずにデータを取得する
  const accountData = await loadInitialAccountDataAsync();
  return {
    accountData,
    initialData,
  };
};

export const useAppInitializer: () => AppInitializer = () => {
  const [initializationResult, setInitializationResult] = useState<InitializationResult>({code: 'Initializing'});

  const initialize = useCallback(async () => {
    await initializeCoreFeatures();
    // CsrfTokenを取得し、AxiosInstanceのデフォルトヘッダに設定
    await refreshCsrfToken();
    // AxiosInstanceに401の時のリトライ処理を追加
    setRefreshSessionInterceptor();

    // 初期データの読み込み
    try {
      const data = await loadData();

      setInitializationResult({code: 'Success', data});
      await hideSplashScreen();
    } catch (e) {
      if (isUpdateRequiredError(e)) {
        setInitializationResult({code: 'UpdateRequired', message: e.message, supportedVersion: e.supportedVersion});
      } else if (isInitialDataError(e)) {
        const {title, message} = resolveErrorMessage(e.cause);
        sendErrorLog(e.cause);
        setInitializationResult({code: 'Failed', title, message});
      } else {
        throw e;
      }
    }
  }, []);

  return useMemo(
    () => ({
      initialize,
      initializationResult,
    }),
    [initializationResult, initialize],
  );
};
