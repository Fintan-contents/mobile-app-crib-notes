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

import {RestContext} from 'msw';

import {delayedResponse} from './delayedResponse';
import {isLoggedInAccountIdNotFound} from '../handlers/account/getLoggedInAccountId';

export const errorResponse = (e: unknown, ctx: RestContext) => {
  console.error(e);
  if (isLoggedInAccountIdNotFound(e)) {
    return delayedResponse(ctx.status(404), ctx.delay(100));
  }
  return delayedResponse(ctx.status(500), ctx.delay(100));
};
