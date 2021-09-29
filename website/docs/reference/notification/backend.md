---
title: バックエンドの実装
---

## FirebaseのAPIを呼びだすための初期設定

バックエンド側からFirebaseのAPIを呼びだす際には、[Firebase Admin SDK](https://firebase.google.com/docs/admin/setup?hl=ja)を利用します。
Firebase Admin SDKは、Node.js、Java、Python、Go、C#の言語向けのものが提供されています。
今回はFirebase Admin SDK for Javaを使用する前提で解説します。
他の言語を使用する際には、それぞれの言語向けのSDKのドキュメントを参照してください。

### Firebase Admin SDK for Javaのインストール

Mavenを使用してアプリケーションをビルドしている場合は、pom.xmlに以下の依存関係を追加します。

```xml title="pom.xml"
<dependency>
  <groupId>com.google.firebase</groupId>
  <artifactId>firebase-admin</artifactId>
  <version>7.1.0</version>
</dependency>
```

Gradleを使用してアプリケーションをビルドしている場合は、build.gradleに以下の依存関係を追加します。

```groovy title="build.gradle"
dependencies {
  implementation 'com.google.firebase:firebase-admin:7.1.0'
}
```

### Firebase Admin SDKの初期化処理

Firebase Admin SDKを利用するためには、Firebase Admin SDK用の秘密鍵ファイル（JSON形式）の情報を読み込んで初期化する必要があります。
この秘密鍵ファイルの情報を以下のような方法でアプリケーションに渡す必要があります。

- ローカルディスク内に秘密鍵ファイルを設置し、GOOGLE_APPLICATION_CREDENTIALS環境変数に秘密鍵ファイルのPathを設定する（推奨）
- 秘密鍵ファイルのJSONデータを直接アプリに受け渡す

1つ目のGOOGLE_APPLICATION_CREDENTIALS環境変数を使う場合のコード例は以下のとおりです。

```java
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

GoogleCredentials credentials = GoogleCredentials.getApplicationDefault();
FirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();
FirebaseApp.initializeApp(options);
```

`getApplicationDefault()`を呼びだすことで、自動的にGOOGLE_APPLICATION_CREDENTIALS環境変数で指定された秘密鍵ファイルが読み込まれます。
またGoogle Cloud環境上でコードを実行する場合、環境変数の指定がない場合はそのGoogle Cloudの実行環境に紐付けられた認証情報が代わりに読み込まれます。

2つめの、秘密鍵ファイルのJSONデータを直接アプリに受け渡す場合のコード例は以下のとおりです。ローカルディスク上に秘密鍵ファイルを設置することがどうしても難しい場合はこちらを用いるケースもあるでしょう。
この例では、JSONデータは環境変数から読み込んでいます。
この秘密鍵データは秘匿しなければいけないことを十分留意した上で扱いましょう。

```java
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.IOException;
import java.io.InputStream;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;

String serviceAccountJson = System.getenv("FIREBASE_SERVICE_ACCOUNT_JSON");
try (InputStream serviceAccountStream = new ByteArrayInputStream(serviceAccountJson.getBytes(StandardCharsets.UTF_8))) {
    GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccountStream);
    FirebaseOptions options = FirebaseOptions.builder()
            .setCredentials(credentials)
            .build();
    FirebaseApp.initializeApp(options);
} catch (IOException e) {
    // TODO: Error Handling
}
```

:::note
FirebaseApp.initializeApp()は複数回呼びだすと、\[DEFAULT\]アプリは既に存在するというエラーを返します。複数回呼びだすことが無いよう気を付けましょう。
:::

### Firebase Admin SDKの使用

一度Firebase Admin SDKの初期化処理が終われば、あとはSDKに含まれるFirebaseの各サービス用のモジュールを呼び出せば簡単に各種操作を行えます。
今回はリモート通知に関連する以下の4つの操作について解説します。

- 指定したデバイスへのリモート通知送信
- 指定したトピックへのリモート通知送信
- 指定したトピックの購読
- 指定したトピックの購読解除

### 指定したデバイスへのリモート通知送信

バックエンド側から指定したデバイスへリモート通知を送信する場合のコード例は以下のとおりです。

```java
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;

String token = "<your_registration_token>";
String title = "Notification title";
String body = "Notification body";
String dataKey = "text";
String dataValue = "Text Data";

// Initialize Firebase Admin SDK
GoogleCredentials credentials = GoogleCredentials.getApplicationDefault();
FirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();
FirebaseApp.initializeApp(options);

// Build notification data
Notification.Builder notificationBuilder = Notification.builder();
notificationBuilder.setTitle(title);
notificationBuilder.setBody(body);
Notification notification = notificationBuilder.build();

// Build message
Message.Builder messageBuilder = Message.builder();
messageBuilder.setToken(token);
messageBuilder.setNotification(notification);
messageBuilder.putData(dataKey, dataValue);
Message message = messageBuilder.build();

// Send message
try {
    String response = FirebaseMessaging.getInstance().send(message);
} catch (FirebaseMessagingException e) {
    // Error Handling
}
```

Notificationで指定した内容が通知領域に表示される内容となります。
今回の例ではタイトルと本文を指定していますが、他に画像ファイルのURLも指定できます。

リモート通知のメッセージには、通知領域に表示されるNotificationの他に、任意のKey-Value形式のデータを含めることができます。MessageにputDataで設定したデータは、クライアントアプリで読み込んで自由に処理を行えます。

宛先となるデバイスは、Registration Tokenと呼ばれる端末・アプリケーション毎に一意に生成されるトークンを用いて指定します。
このトークンは、Firebase SDKを組み込んだアプリの初回起動時に生成されます。また、アプリを一度削除して再インストールすると次の起動時に再生成されて値が更新されます。

実際にリモート通知を運用する上では、一定の条件を満たしたユーザに送るケースが多いでしょう。それを実現するためには、どのユーザがどのトークンを持つのか紐付けておく必要があります。
クライアント側でトークンを取得する方法については、クライアント側の開発ガイドを参照してください。

:::note
今回のサンプルではAndroid/iOS共通で利用可能な属性のみを指定していますが、リモート通知のメッセージにはOS固有の設定も多数用意されています。また、受信端末のOS毎にメッセージを変えることも可能です。

指定可能な属性については[公式ドキュメント](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages)をご確認ください。
:::

### 指定したトピックへのリモート通知送信

Firebaseでは、指定した端末にリモート通知を送信するだけでなく、
特定のトピックを購読している全端末に宛てたリモート通知の送信も可能です。
この機能は、各種OSがサポートしている機能ではなく、Firebase独自の機能です。
そのため、Firebaseを経由せずに直接APNsのAPIを呼び出してiOS端末にメッセージを送信する場合はトピックへの通知は行えません。

バックエンド側から指定したトピックへリモート通知を送信する場合のコード例は以下のとおりです。

```java
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;

String topic = "<your_topic_name>";
String title = "Notification title";
String body = "Notification body";
String dataKey = "text";
String dataValue = "Text Data";

// Initialize Firebase Admin SDK
GoogleCredentials credentials = GoogleCredentials.getApplicationDefault();
FirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();
FirebaseApp.initializeApp(options);

// Build notification data
Notification.Builder notificationBuilder = Notification.builder();
notificationBuilder.setTitle(title);
notificationBuilder.setBody(body);
Notification notification = notificationBuilder.build();

// Build message
Message.Builder messageBuilder = Message.builder();
messageBuilder.setTopic(topic);
messageBuilder.setNotification(notification);
messageBuilder.putData(dataKey, dataValue);
Message message = messageBuilder.build();

// Send message
try {
    String response = FirebaseMessaging.getInstance().send(message);
} catch (FirebaseMessagingException e) {
    // Error Handling
}
```

こちらも実装方法は個別のデバイスへの送信時とほぼ同じです。
違うのは、setTokenの代わりにsetTopicを呼びだす点のみです。
TokenとTopicは両方セットすると送信エラーとなるので、その点は気を付けましょう。

### 指定したトピックの購読

指定したトピックへリモート通知を送信する機能では、
そのトピックを購読している端末にのみリモート通知が配信されます。
そのためどの端末がどのトピックを購読しているのか事前にFirebaseへ登録しておく必要があります。

トピックの購読・購読解除は、バックエンド側とクライアントアプリ側のどちらからでも行うことができます。
どのユーザがどのトピックを購読しているのか・購読してよいのかを管理したい場合はバックエンド側で実装することになるでしょう。

バックエンド側から指定した端末に指定したトピックを購読させる場合のコード例は以下のとおりです。

```java
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;

import java.util.Arrays;

String token = "<your_registration_token>";
String topic = "<your_topic_name>";

// Initialize Firebase Admin SDK
GoogleCredentials credentials = GoogleCredentials.getApplicationDefault();
FirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();
FirebaseApp.initializeApp(options);

// Subscribe to topic.
try {
    TopicManagementResponse response = FirebaseMessaging.getInstance()
            .subscribeToTopic(Arrays.asList(token), topic);
} catch (FirebaseMessagingException e) {
    // Error Handling
}
```

許容されるトピック名は`[a-zA-Z0-9-_.~%]{1,900}`の範囲になります。
存在しないトピック名を指定した場合は、自動的にそのトピックが作成されます。

### 指定したトピックの購読解除

トピックの購読解除も、購読時の流れとほぼ同様です。
コード例は以下のとおりです。

```java
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;

import java.util.Arrays;

String token = "<your_registration_token>";
String topic = "<your_topic_name>";

// Initialize Firebase Admin SDK
GoogleCredentials credentials = GoogleCredentials.getApplicationDefault();
FirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();
FirebaseApp.initializeApp(options);

// Unsubscribe to topic.
try {
    TopicManagementResponse response = FirebaseMessaging.getInstance()
            .unsubscribeFromTopic(Arrays.asList(token), topic);
} catch (FirebaseMessagingException e) {
    // Error Handling
}
```

### その他の機能

今回のガイドでは触れませんでしたが、Firebase Cloud Messagingでは以下のような機能も提供されています。気になる方は[公式ドキュメント](https://firebase.google.com/docs/cloud-messaging/send-message)をご確認ください。

- 最大500台に同一のリモート通知を送信するマルチキャスト送信機能
- 最大500メッセージを一度に送信するバッチ送信機能
- デバイスグループを作成し、指定したデバイスグループ宛にリモート通知を送信する機能
