---
title: OpenID Connectと端末認証を用いたモバイルアプリケーションとバックエンドサービスの認証方式
---

## 認証方式

今回紹介する認証方式は、[認証サービスを利用したシステム構成に関する不明点や課題](./overview.md#認証サービスを利用したシステム構成に関する不明点や課題)に対する1つの解決手法です。
この認証方式の特徴は次の通りです。

- [RFC 8252](https://www.rfc-editor.org/rfc/rfc8252.txt)に従ったOpenID Connect認証
- IDトークンによるバックエンドサービスとのセッション確立
- トークン保管による認証の継続と端末認証（パスコードの入力や指紋認証、Face IDなど端末機能を用いた本人認証）による保護

認証方式のアーキテクチャ図を次に示します。

![OpenID Connectと端末認証を用いたネイティブアプリケーションの認証方式](authn-with-backend-using-OIDC-and-device-authn-architecture.svg)

### RFC 8252に従ったOpenID Connect認証

[RFC 8252](https://www.rfc-editor.org/rfc/rfc8252.txt)では、モバイルアプリケーションの認証にOAuth 2.0を利用するときのBest Current Practiceを定義しています。
これに従うことで、充分に検証された手法で認証出来ます。

:::info
[RFC 8252](https://www.rfc-editor.org/rfc/rfc8252.txt)については、[OpenID Connectにおける認証フロー](./stateless-authn.md#openid-connectにおける認証フロー)でも紹介しております。
:::

### IDトークンによるバックエンドサービスとのセッション確立

本認証方式では、認証サービスによる認証で得たIDトークンを用いて、バックエンドサービスとのセッションを確立します。
IDトークンはリライング・パーティによる解析を意図されたものです。
フロントエンドとバックエンドサービスが同一リライング・パーティ内にある前提において、IDトークンを共有することは問題ありません。
アクセストークンとは違い、IDトークンは認証の証明に使用でき、そのフォーマットも仕様で定められています。
このIDトークンをHTTPSを使用してバックエンドサービスに（従来のID/パスワードの代わりに）送信し、IDトークンの妥当性を検証することでバックエンドサービスとのセッションを確立します。
IDトークンはバックエンドサービスとの認証のみに使用するため、有効期限は充分に短くすることが出来ます（通常数分以内）。

:::info
IDトークンの妥当性検証については、[Amazon CognitoのIDトークンを利用したREST APIの認証例](https://fintan.jp/?p=6598)に詳細な記載があります。
:::

:::caution
IDトークンは（リライング・パーティ内でない）他システムとの連携で用いるのは不適切です。
他システム連携によるアクセス制御は別の方式を採用してください。
:::

OpenID Connect認証と組合わせた認証シーケンスを次に示します。

![認証シーケンス図①](authn-sequence-1.svg)

### トークン保管による認証の継続と端末認証による保護

認証で得たリフレッシュトークンをログイン資格情報として保管することで、ログイン操作なしの認証を実現します。

:::note
ログイン資格情報の保管については、[ログイン資格情報の管理](./manage-credentials.md)に詳細な記載があります。
:::

ログイン操作なしの認証によりユーザの利便性はあがります。一方で、モバイル端末紛失や盗難時のリスクが生じます。
そこで、保管されたリフレッシュトークンを利用する場合、端末認証による許可を求めます。
そうすることで、端末所持者のみにログイン操作なしの認証を許可します。

保管されたトークンと端末認証を利用した認証シーケンスを次に示します。

![認証シーケンス図②](authn-sequence-2.svg)

### 認証フロー

本認証方式をまとめたフローチャートを次に示します。

![認証フロー](authn-flowchart.svg)

### 本認証方式で期待される効果

本認証方式で期待される効果は次の通りです。

- [RFC 8252](https://www.rfc-editor.org/rfc/rfc8252.txt)を実装したSDK（[AppAuth](https://appauth.io/)）を用いることで品質と生産性向上を期待できる
- 少ないコストで既存システムの認証方式を改修でき、ソフトウェア資産を流用できる
- 端末認証と組合わせることで、リスクに対処しながら利便性を向上できる
