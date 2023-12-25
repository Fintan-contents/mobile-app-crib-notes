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

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {TermsAgreementOverlay} from './TermsAgreementOverlay';

jest.useFakeTimers();

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Snackbar.Component />
    </SafeAreaProvider>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

const ChildComponent: React.FC = () => {
  useEffect(() => {
    TermsAgreementOverlay.show({termsOfService: {version: '1.0.0', url: AppConfig.termsUrl}});
  }, []);

  return <Text testID="text">test</Text>;
};

describe('TermsAgreementOverlay', () => {
  it('TermsAgreementOverlayのshowで、利用規約が正常に表示されることを確認', () => {
    render(
      <>
        <ChildComponent />
        <TermsAgreementOverlay.Component />
      </>,
      {wrapper: Wrapper},
    );
    expect(screen.queryByText('利用規約')).not.toBeNull();
  });
});
