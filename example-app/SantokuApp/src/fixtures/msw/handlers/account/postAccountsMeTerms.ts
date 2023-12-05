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

import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const postAccountsMeTerms = rest.post(`${backendUrl}/accounts/me/terms`, async (req, res, ctx) => {
  try {
    const {hasAgreed, agreedVersion} = await req.json<TermsOfServiceAgreementStatus>();
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);

    const terms = db.accountTerms.findFirst({where: {accountId: {equals: accountId}}});
    if (terms) {
      db.accountTerms.update({where: {accountId: {equals: accountId}}, data: {hasAgreed, agreedVersion}});
    } else {
      db.accountTerms.create({accountId, hasAgreed, agreedVersion});
    }

    return delayedResponse(ctx.status(201), ctx.json<TermsOfServiceAgreementStatus>({hasAgreed, agreedVersion}));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
