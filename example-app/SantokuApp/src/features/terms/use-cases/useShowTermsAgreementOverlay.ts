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

import {useAccountData} from 'features/account/services/account/useAccountData';
import {useCallback} from 'react';

import {TermsAgreementOverlay} from '../components/TermsAgreementOverlay';
import {TermsAgreementOverlayShowProps} from '../components/TermsAgreementOverlayComponent';

/**
 * AccountContextから利用規約情報を取得して、未同意の場合は利用規約を表示します。
 *
 * @example
 * const showTermsAgreementOverlay = useShowTermsAgreementOverlay();
 * showTermsAgreementOverlay(onAgree);
 */
export const useShowTermsAgreementOverlay = () => {
  const {accountData} = useAccountData();

  return useCallback(
    (onAgree?: TermsAgreementOverlayShowProps['exitingCallbackOnAgreed']) => {
      const terms = accountData?.terms;
      const termsAgreementStatus = terms?.termsAgreementStatus;
      const termsOfService = terms?.termsOfService;
      if (termsOfService && termsAgreementStatus?.hasAgreed === false) {
        TermsAgreementOverlay.show({termsOfService, exitingCallbackOnAgreed: onAgree, dismissible: false});
      }
    },
    [accountData?.terms],
  );
};
