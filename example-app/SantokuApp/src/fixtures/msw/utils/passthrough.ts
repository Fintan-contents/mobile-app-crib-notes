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

import {MockedRequest, RestContext} from 'msw';

import {ApplicationError} from '../../../bases/core/errors/ApplicationError';

/**
 * オリジナルの通信先にバイバスします。
 *
 * - ステータスコードが200番台の場合は、{@link Response}を返却
 * - ステータスコードが200番台以外の場合は、{@link ApplicationError}をthrow
 * - ネットワークエラーなど、レスポンスが存在しない場合はctx.fetchからthrowされたエラーをそのままthrow
 */
export const passthrough = async (req: MockedRequest, ctx: RestContext) => {
  let response: Response;
  try {
    // ctx.fetchは、`node-fetch`を使用している
    // https://mswjs.io/docs/api/context/fetch#nodejs-compatibility
    response = await ctx.fetch(req);
  } catch (e) {
    // ネットワークエラーなど、レスポンスが返却されない場合
    handleError(req.url, String(e));
    throw e;
  }
  // ステータスコードが200番台の場合は、処理成功とする（300番台は現状使用していないのと、今後もMSWでpassthroughする想定はない）
  // https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
  if (response.ok) {
    return response;
  } else {
    handleError(req.url, JSON.stringify(response, null, 2));
    throw new ApplicationError(response);
  }
};

const handleError = (url: URL, causeString: string) => {
  console.warn(`Failed to passthrough to original request. url = ${url.toString()}. cause = ${causeString}`);
};
