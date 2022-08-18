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
