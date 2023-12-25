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

import {setupServer} from 'msw/native';

import {handlers} from './handlers';

export const initialServer = () => {
  const server = setupServer(...handlers);
  // setupServerでハンドリングしていないリクエストは、デフォルトではwarnログが出力されるため、Metroサーバへのリクエスト時に常にwarnログが出力されてしまいます。
  // そのため、ハンドリングしていないリクエスト時はMSWでは何も実施しないようにします。
  // https://mswjs.io/docs/api/setup-server/listen#onunhandledrequest
  // なお、onUnhandledRequestにbypassを設定しても同様のことができそうですが、リリースモードではバイパスされなかったため、明示的にreq.passthroughを呼び出しています。
  server.listen({
    onUnhandledRequest(req) {
      req.passthrough();
    },
  });
};
