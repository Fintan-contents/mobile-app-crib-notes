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

import {getAccountsMe, getAccountsMeTerms} from 'features/backend/apis/account/account';
import {getTerms} from 'features/backend/apis/terms/terms';

export const getAccountData = async (signal?: AbortSignal) => {
  const account = (await getAccountsMe(signal)).data;
  const termsAgreementStatus = (await getAccountsMeTerms(signal)).data;
  let termsOfService;
  if (!termsAgreementStatus.hasAgreed) {
    termsOfService = (await getTerms(signal)).data;
  }
  return {
    account,
    terms: {termsAgreementStatus, termsOfService},
  };
};
