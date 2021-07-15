---
title: クライアントアプリの実装
---

## FirebaseのAPIを呼びだすための初期設定

クライアントアプリからFirebaseのAPIを呼びだすためには、Firebase SDKを利用します。
Firebase SDKはAndroid, iOS, Web向けのものが提供されています。

サンプルアプリとして公開している[santoku-app](https://github.com/{@inject:organization}/mobile-app-crib-notes/tree/master/react-native-samples/santoku-app)ではReact Nativeを利用しています。
そのため、本ガイドでは[React Native Firebase](https://rnfirebase.io/)というライブラリを利用して間接的にFirebase SDKを利用する例について解説します。

### React Native Firebaseのインストール

まず、React Native Firebaseをインストールします。
npmまたはyarnでインストール可能です。
今回はFirebase Cloud Messagingを利用するために必要なものだけを追加していますが、Firebaseの他のサービスも利用する場合はその分も追加してください。

#### npmの場合

```bash
npm install --save @react-native-firebase/app
npm install --save @react-native-firebase/messaging
```

#### yarnの場合

```bash
yarn add @react-native-firebase/app
yarn add @react-native-firebase/messaging
```

### Firebase SDKの導入と認証情報ファイルの配置

次に、Firebase SDKをAndroid/iOSのそれぞれのビルド時の依存関係に追加し、
Firebaseへのアクセスに必要な認証情報ファイルを適切なフォルダに設置します。
それぞれのOS向けの手順は以下のとおりです。

#### Androidの場合

1. Firebaseのコンソール画面からgoogle-services.jsonをダウンロード
1. google-services.jsonを、React Nativeプロジェクトフォルダ内の`android/app/google-services.json` として配置
1. `android/build.gradle`ファイルに以下のように追記

    ```groovy title="android/build.gradle" {4}
    buildscript {
      dependencies {
        // ... other dependencies
        classpath 'com.google.gms:google-services:4.3.4'
        // Add me --- /\
      }
    }
    ```

1. `android/app/build.gradle`ファイルに以下のように追記

    ```groovy title="android/app/build.gradle" {2}
    apply plugin: 'com.android.application'
    apply plugin: 'com.google.gms.google-services' // <- Add this line
    ```

#### iOSの場合

1. Firebaseのコンソール画面からGoogleService-Info.plistをダウンロード
1. GoogleService-Info.plistファイルを`ios/{projectName}/GoogleService-Info.plist`として配置
1. `ios/{projectName}/AppDelegate.m`ファイルの先頭のimport箇所に以下のように追記

    ```objectivec title="ios/{projectName}/AppDelegate.m" {1}
    #import <Firebase.h>
    ```

1. `ios/{projectName}/AppDelegate.m`ファイルのdidFinishLaunchingWithOptions内に以下のように追記

    ```objectivec title="ios/{projectName}/AppDelegate.m" {3-5}
    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
      // Add me --- \/
      if ([FIRApp defaultApp] == nil) {
        [FIRApp configure];
      }
      // Add me --- /\
      // ...
    }
    ```

1. pod installを再実行

    ```bash
    cd ios/
    pod install --repo-update
    ```

以上でリモート通知機能の開発に必要な初期設定は完了です。

## リモート通知機能の開発

本ガイドでは、クライアントアプリに以下の機能を組み込む時の流れについて説明します。

- リモート通知の宛先指定に必要な登録トークンの取得
- アプリがアクティブな時にメッセージを受信した場合の処理
- アプリがアクティブでない時にメッセージを受信した場合の処理
- トピックの購読
- トピックの購読解除

### リモート通知の宛先指定に必要な登録トークンの取得

Device Registration Token（登録トークン）とは、端末・アプリを一意に特定できる、Firebase SDKによって生成されるトークンです。
リモート通知を特定の端末へ配信する際には、この登録トークンを用いて宛先を指定します。

クライアントアプリ側で登録トークンを取得するコードは以下のとおりです。

```typescript jsx
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const PushNotification: React.FC = () => {
  const [deviceToken, setDeviceToken] = useState<string>();

  const getToken => async () => {
    // リモート通知がOS設定でこのアプリに許可されているか確認
    const permission = await messaging().hasPermission();
    // 許可されている場合はトークンを返す
    if (permission === messaging.AuthorizationStatus.AUTHORIZED || permission === messaging.AuthorizationStatus.PROVISIONAL) {
      return messaging().getToken();
    }
    // 明示的に拒否されている場合はトークンを取得できないためundefinedを返す
    if (permission === messaging.AuthorizationStatus.DENIED) {
      return undefined;
    }
    // 許可も明示的な拒否もされていない場合は、ユーザに許可を求めるダイアログを表示する
    const newPermission = await messaging().requestPermission();
    // 許可が得られた場合はトークンを返す
    if (permission === messaging.AuthorizationStatus.AUTHORIZED || permission === messaging.AuthorizationStatus.PROVISIONAL) {
      return messaging().getToken();
    }
    // 許可が得られなかった場合はundefindを返す
    return undefined;
  }

  useEffect(() => {
    if (!deviceToken) {
      getToken().then((token) => {
        setDeviceToken(token);
      });
    }
  }, [deviceToken]);

  return (
    <View>
      <Text>Device Registration Token: {deviceToken}</Text>
    </View>
  );
};

export default PushNotification;
```

登録トークンをアプリ上で取得するためには、アプリが端末のOSからプッシュ通知の許可を与えられている必要があります。この許可は、Androidの場合はデフォルトで許可されていますが、iOSではデフォルトで拒否されています。
そのためこのコード例では、このアプリに対してプッシュ通知の承認が得られていない場合は、ユーザにプッシュ通知の許可を求めるダイアログを表示する処理も含めています。

実際にリモート通知を送信する際には、特定の端末に送りたいというよりも、特定のユーザに送りたいケースが多いでしょう。
そのため、バックエンドサーバが特定のユーザへリモート通知を送るためには、どのユーザの端末がどの登録トークンを持つのかを知っておく必要があります。

今回のコード例ではそこまでは実装しませんでしたが、
このようにクライアント側で取得した登録トークンは、適宜APIなどを通じてバックエンドサーバへ共有しておく必要があるでしょう。

また注意点として、登録トークンは以下のような場合に再生成され、古いものを利用できなくなることがあります。

- 機種変更などの際に新端末でアプリが復元される場合
- ユーザがアプリをアンインストール/再インストールする場合
- ユーザがアプリのデータを消去する場合

そのため登録トークンが再生成された場合は、再度バックエンドサーバへそのことを共有しておく必要があります。
登録トークンに変更が無いか、アプリケーションを起動するたびに確認しておくとよいでしょう。

### アプリがアクティブな時にメッセージを受信した場合の処理

リモート通知が端末に届いた時、アプリがアクティブでなければOSの通知領域にメッセージが表示されます。
しかし対象アプリの起動中にリモート通知が届いた場合は、OSの通知領域にはメッセージは表示されません。
アプリの起動中にリモート通知が届いた場合にも何か表示などの処理を行いたい場合は、その処理をアプリに組み込んでおく必要があります。

アプリの起動中にリモート通知が届いた際にアプリ上でアラートダイアログを表示するコード例は以下のとおりです。

```typescript jsx
useEffect(() => {
  return messaging().onMessage((message) => {
    Alert.alert(
      'アプリの起動中にリモート通知を受信しました',
      JSON.stringify({
        notification: message.notification,
        data: message.data,
      }),
    );
  });
}, []);
```

アプリの起動中にリモート通知が届いた場合、`messaging().onMessage()`に渡した処理が呼び出されます。
今回のコード例では、アラートダイアログ上に受信したメッセージの内容を表示しています。

リモート通知のメッセージ内には、OSの通知領域に表示する内容が格納されたnotification部と、アプリに対して任意のデータを受け渡せるdata部が含まれています。
data部を上手く使えば、単にユーザに何かを通知するだけでなく、アプリに様々な処理を行わせることができるでしょう。

### アプリがアクティブでない時にメッセージを受信した場合の処理

アプリがアクティブでない時にメッセージを受信した場合、メッセージ内のnotification部に含まれるtitle, body, imageなどの内容がOSの通知領域に表示されます。通知領域に表示されたメッセージをタップすると、デフォルトではアプリが起動します。
notification部の内容がOSの通知領域に表示されることで十分であれば、アプリ側で特に何かを実装する必要はありません。

:::note
notification部が空でdata部のみを含むメッセージを受信した場合、OSの通知領域には何も表示されません。これを利用すると、ユーザにリモート通知を受信したことを意識させることなくアプリ上で任意のデータを受け取ることができます。
:::

一方で、data部に含まれるデータは、アプリ側で受信時の処理を定義しておかないと何も起こりません。非アクティブ時にリモート通知を受信した場合にそのデータを受け取るコード例は以下のとおりです。

```typescript jsx
const [loading, setLoading] = useState(true);

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  // バックグラウンド処理中に画面描画などは行えない
  console.log('Message handled in the background!', remoteMessage);
});

useEffect(() => {
  // アプリ起動後、アプリが非アクティブな時にメッセージを受信した場合の処理を登録
  messaging().onNotificationOpenedApp((remoteMessage) => {
    Alert.alert(
      'アプリが非アクティブな間にリモート通知を受信しました',
      JSON.stringify({
        notification: remoteMessage.notification,
        data: remoteMessage.data
      })
    );
  });
  // アプリを起動する前に受信していたメッセージがあったか確認
  // (確認が終わるまではロード中表示にしておく)
  messaging().getInitialNotification().then((remoteMessage) => {
    if (remoteMessage) {
      Alert.alert(
        'アプリが起動されていない間にリモート通知を受信しました',
        JSON.stringify({
          notification: remoteMessage.notification,
          data: remoteMessage.data
        })
      );
    }
    setLoadig(false);
  });
}, []);
```

このコード例では、以下の3通りの方法でメッセージを受信しています。それぞれの違いは以下のとおりです。

- `messaging().setBackgroundMessageHandler`
    - アプリを起動していない、または非アクティブな場合にバックグラウンドでメッセージを処理する
- `messaging().onNotificationOpenedApp`
    - アプリが起動しているが非アクティブな場合に、通知領域に表示されたメッセージをタップしてアプリがアクティブになったタイミングでメッセージを処理する
- `messaging().getInitialNotification`
    - アプリが起動していないまたは端末がロックされている時にメッセージを受信した後、通知領域に表示されたメッセージをタップしてアプリが起動した時に未処理のメッセージが無いか確認して処理する

:::info
setBackgroundMessageHandlerで設定した処理がどのように実行されるかはAndroid/iOSで異なります。iOS端末の場合、バックグラウンド処理にもかかわらずReact Componentがマウントされ、意図しないタイミングでReact Hooksなどが呼び出されてしまう可能性があります。

これを回避するため、コード上で現在バックグラウンド処理中かどうかを判定する方法も提供されています。詳細は以下をご確認ください。

[Background Application State](https://rnfirebase.io/messaging/usage#background-application-state)
:::

### トピックの購読

Firebase Cloud Messagingでは、特定の端末に対してリモート通知を送信するだけでなく、特定のトピックを購読している端末に対してリモート通知を送信する機能も提供されています。

トピックの購読は、クライアントアプリ側、バックエンドサーバ側のどちらからでも行えます。クライアントアプリ側で特定のトピックを購読するコード例は以下のとおりです。

```typescript
import messaging from '@react-native-firebase/messaging';

const onSubscribe = () => {
  messaging()
    .subscribeToTopic('weather')
    .then(() => console.log('Subscribed to topic!'));
}
```

注意点として、登録トークンが再インストール等で再生成された場合、トピックの購読状況は引き継がれず、何も購読していない状態に戻ります。
そのため、再生成時にはあらためてトピックを購読する必要があります。

トピックの購読処理はクライアントアプリ側、バックエンド側のどちらからでも行えます。
しかし登録トークンが再生成された場合の再講読処理を円滑に進めるためには、バックエンド側で購読処理を行い、どのユーザが何のトピックを購読しているかを管理しておく方が望ましいでしょう。

### トピックの購読解除

トピックの購読と同様に、トピックの購読解除もクライアントアプリ側、バックエンドサーバ側のどちらからでも行えます。クライアントアプリ側で特定のトピックを購読解除するコード例は以下のとおりです。

```typescript
import messaging from '@react-native-firebase/messaging';

const onUnsubscribe = () => {
  messaging()
    .unsubscribeFromTopic('weather')
    .then(() => console.log('Unsubscribed from the topic!'));
}
```

登録トークンが再インストール等で再生成された場合、古い登録トークンのトピック購読状況は自動的に解除されるため、あらためて購読解除する必要はありません。
