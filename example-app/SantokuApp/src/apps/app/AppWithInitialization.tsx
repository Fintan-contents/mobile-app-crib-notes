import {NavigationContainer} from '@react-navigation/native';
import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {AccountDataLoader} from 'features/account/components/AccountDataLoader';
import {AutoLogin} from 'features/account/components/AutoLogin';
import {AppUpdatesChecker} from 'features/app-updates/components/AppUpdatesChecker';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {ReactQueryProvider} from './contexts/ReactQueryProvider';
import {AppInitialData} from './types/AppInitialData';
import {useAppInitialize} from './use-cases/useAppInitialize';

export const AppWithInitialization: React.FC = () => {
  const {initialize, initializationResult} = useAppInitialize();
  const [initializationError, setInitializationError] = useState<unknown>();

  useEffect(() => {
    // 初期化処理が1回だけ実行されるようにする。
    if (initializationResult.code === 'Initializing') {
      initialize().catch(e => setInitializationError(e));
    }
  }, [initialize, initializationResult]);

  useEffect(() => {
    // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
    if (initializationError) {
      throw new RuntimeError('Failed to initialize app.', initializationError);
    }
  }, [initializationError]);

  if (initializationResult.code === 'Initializing') {
    return null;
  } else if (initializationResult.code === 'Failed') {
    Alert.alert(initializationResult.title, initializationResult.message);
    return null;
  } else {
    // RootStackNav、WithFirebaseMessagingHandlersをimportしてしまうと、アプリの初期化処理が完了する前に各画面でimportしているモジュールも読み込まれてしまうため、
    // アプリの初期化処理が完了した時点でrequireする。
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const RootStackNav = require('./navigators/RootStackNav').RootStackNav as React.FC<
      React.PropsWithChildren<{initialData: AppInitialData}>
    >;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const FirebaseMessagingHandlers = require('./components/FirebaseMessagingHandlers')
      .FirebaseMessagingHandlers as React.FC<React.PropsWithChildren<{initialData: AppInitialData}>>;

    return (
      <NavigationContainer>
        <ReactQueryProvider>
          <AppUpdatesChecker>
            <AutoLogin>
              <AccountDataLoader>
                <FirebaseMessagingHandlers initialData={initializationResult.data.initialData}>
                  <RootStackNav initialData={initializationResult.data.initialData} />
                </FirebaseMessagingHandlers>
                <TermsAgreementOverlay.Component />
              </AccountDataLoader>
            </AutoLogin>
          </AppUpdatesChecker>
        </ReactQueryProvider>
      </NavigationContainer>
    );
  }
};
