/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {AccountDataLoader} from 'features/account/components/AccountDataLoader';
import {AutoLogin} from 'features/account/components/AutoLogin';
import {AppUpdatesChecker} from 'features/app-updates/components/AppUpdatesChecker';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {DeepLinkHandler} from './components/DeepLinkHandler';
import {ReactQueryProvider} from './contexts/ReactQueryProvider';
import {RootStackParamList} from './navigators/types';
import {AppInitialData} from './types/AppInitialData';
import {useAppInitialize} from './use-cases/useAppInitialize';

export const AppWithInitialization: React.FC = () => {
  const {initialize, initializationResult} = useAppInitialize();
  const [initializationError, setInitializationError] = useState<unknown>();
  const navigationRef = useNavigationContainerRef<RootStackParamList>();

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
    /*
      eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-var-requires --
      RootStackNavをimportしてしまうと、アプリの初期化処理が完了する前に各画面でimportしているモジュールも読み込まれてしまうため、
      アプリの初期化処理が完了した時点でrequireする。
      requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
     */
    const RootStackNav = require('./navigators/RootStackNav').RootStackNav as React.FC<
      React.PropsWithChildren<{initialData: AppInitialData}>
    >;
    /*
      eslint-disable-next-line @typescript-eslint/no-var-requires --
      WithFirebaseMessagingHandlersをimportしてしまうと、アプリの初期化処理が完了する前に各画面でimportしているモジュールも読み込まれてしまうため、
      アプリの初期化処理が完了した時点でrequireする。
    */
    const FirebaseMessagingHandlers = require('./components/FirebaseMessagingHandlers')
      .FirebaseMessagingHandlers as React.FC<React.PropsWithChildren<{initialData: AppInitialData}>>; // eslint-disable-line @typescript-eslint/no-unsafe-member-access -- requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。

    return (
      <ReactQueryProvider>
        <AppUpdatesChecker>
          <AutoLogin>
            <AccountDataLoader>
              <DeepLinkHandler initialData={initializationResult.data.initialData} navigationRef={navigationRef}>
                <NavigationContainer ref={navigationRef}>
                  <FirebaseMessagingHandlers initialData={initializationResult.data.initialData}>
                    <RootStackNav initialData={initializationResult.data.initialData} />
                  </FirebaseMessagingHandlers>
                  <TermsAgreementOverlay.Component />
                </NavigationContainer>
              </DeepLinkHandler>
            </AccountDataLoader>
          </AutoLogin>
        </AppUpdatesChecker>
      </ReactQueryProvider>
    );
  }
};
