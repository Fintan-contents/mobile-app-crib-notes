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

import {FullWindowOverlay} from 'bases/ui/overlay/FullWindowOverlay';
import React, {useCallback, useMemo, useState} from 'react';

import {
  TermsAgreementOverlayComponent,
  TermsAgreementOverlayProps,
  TermsAgreementOverlayShowProps,
} from './TermsAgreementOverlayComponent';

type TermsAgreementOverlayType = {
  show: (props: TermsAgreementOverlayShowProps) => void;
  close: () => void;
  Component: typeof Component;
};

/**
 * 利用規約をOverlay表示するコンポーネント。
 */
const Component: React.FC = () => {
  const [state, setState] = useState<
    Omit<TermsAgreementOverlayProps, 'termsOfService'> & Partial<Pick<TermsAgreementOverlayProps, 'termsOfService'>>
  >({
    visible: false,
    close: () => {},
  });
  const close = useCallback(() => setState(prevState => ({...prevState, visible: false})), []);
  const show = useCallback(
    (props: Omit<TermsAgreementOverlayProps, 'visible' | 'close'>) => {
      setState({
        ...props,
        visible: true,
        close,
      });
    },
    [close],
  );

  TermsAgreementOverlay = useMemo(
    () => ({
      ...TermsAgreementOverlay,
      show,
      close,
    }),
    [close, show],
  );

  return (
    <FullWindowOverlay>
      {state.termsOfService && <TermsAgreementOverlayComponent {...state} termsOfService={state.termsOfService} />}
    </FullWindowOverlay>
  );
};

let TermsAgreementOverlay: TermsAgreementOverlayType = {
  show: (props: TermsAgreementOverlayShowProps) => {
    throw new Error('TermsAgreementOverlay.Component is required.');
  },
  close: () => {
    throw new Error('TermsAgreementOverlay.Component is required.');
  },
  Component,
};

export {TermsAgreementOverlay};
