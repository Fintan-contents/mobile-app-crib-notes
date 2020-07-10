---
title: 認証認可
---

モバイルアプリケーションは通信プロトコルとしてHTTPを使うのが一般的ですが、HTTP自体はステートレスなプロトコルです。
そのため初回以降のリクエストをユーザーに紐付ける場合、以下の2つの方法を使うことになります。

- **ステートフルな認証**
  - ログイン時にユニークなセッションIDをサーバーで生成する
  - サーバーに保存されたユーザー情報を参照するために、クライアントは毎回のリクエストにセッションIDを含める
  - セッションIDはただの識別子であり、ユーザーの情報は含まない
- **ステートレスな認証** ※詳細は[こちら]({{< relref "./stateless-authn/index.md" >}})を御覧ください
  - ユーザーを識別するための情報はすべてクライアントにトークンとして保存されます
  - この場合、サーバーはユーザーごとの認証状態をセッションなどで管理する必要がありません

Webアプリケーションではサーバーでランダムに生成されたセッションIDをクライアントのCookieに保存するステートフルな認証を使うのが一般的です。しかしモバイルアプリケーションでは、以下の理由からステートレスな認証を使うケースが多くなってきています。

- セッションをサーバで管理する必要がないため、スケーラビリティとパフォーマンスが向上する
- 認証ロジックをアプリケーションから分離でき、認証サーバーでトークンを生成できるので、認証ロジックを簡単に切り替えられる


## 参考
- [Mobile App Authentication Architectures - Mobile Security Testing Guide](https://mobile-security.gitbook.io/mobile-security-testing-guide/general-mobile-app-testing-guide/0x04e-testing-authentication-and-session-management#stateful-vs-stateless-authentication)

