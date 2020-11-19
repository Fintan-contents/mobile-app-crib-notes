import Config from 'react-native-config';
import SecureConfig from 'react-native-config-encrypted';

const secret = Config.REACT_NATIVE_SANTOKU_ENCRYPTION_SECRET;

if (!secret) {
  console.error('Encryption secret is no set. Can not configure SecureConfig.');
} else {
  console.debug(`Successfully get encryption secret. value=${secret}`);
}

// babel-plugin-transform-inline-environment-variableでビルド時にインライン化されます。
// ビルド成果物をリバースエンジニアリングすることで簡単に値がバレてしまうので、安全ではありません。
// このアプリケーションでは、悪戯防止程度の目的で設定値を暗号化しています。
// あまりセキュリティ向上に貢献するわけでもないので、ソースコードを公開しない場合にはこのような対応は不要だと思います。
SecureConfig.configure({
  key: secret,
  provider: Config,
});

export const AppConfig = {
  COGNITO_DOMAIN_URL: SecureConfig.get('COGNITO_DOMAIN_URL'),
  COGNITO_REDIRECT_URL: SecureConfig.get('COGNITO_REDIRECT_URL'),
  COGNITO_CLIENT_ID: SecureConfig.get('COGNITO_CLIENT_ID'),
  WEB_APP_URI: SecureConfig.get('WEB_APP_URI', false),
  STATEFUL_AUTH_DOMAIN: SecureConfig.get('STATEFUL_AUTH_DOMAIN', false),
  STATEFUL_AUTH_BASE_URL: SecureConfig.get('STATEFUL_AUTH_BASE_URL', false),
};

console.debug(`Successfully loaded configurations.\n${JSON.stringify(AppConfig, null, 2)}`);
