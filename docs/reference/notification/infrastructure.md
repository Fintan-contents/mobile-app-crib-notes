---
title: Firebase Cloud Messagingを用いたプッシュ通知の構成例
---

## Firebase Cloud Messaging (FCM)を用いた構成例

本ガイドでは、Firebase Cloud Messaging (FCM) を用いてAndroid/iOS端末へのリモート通知を実現する例について解説します。

FCMを利用する際のアーキテクチャについては、[Firebaseの公式ドキュメント](https://firebase.google.com/docs/cloud-messaging/fcm-architecture?hl=ja)内の以下の図がわかりやすいです。

![FCM](https://firebase.google.com/docs/cloud-messaging/images/diagram-FCM.png?hl=ja])

開発者は、この図における1番（一般的にはバックエンドサービス）と4番（クライアントアプリ）の部分を実装することになります。

本ガイドではこの両者について、サンプルコードを交えながら解説します。
