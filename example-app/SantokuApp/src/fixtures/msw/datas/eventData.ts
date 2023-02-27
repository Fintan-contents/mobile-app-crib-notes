import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const eventData = () => {
  db.event.create({
    eventId: '1',
    title: '【勉強会】今話題の技術を触ってみよう',
    content: `2022年話題の技術を触ってみる勉強会です。
日時：2022年5月31日（火） 14:00〜15:00

■参加資格
制限なし
`,
    endDate: '2022-06-01T10:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.event.create({
    eventId: '2',
    title: '【勉強会】TCP/IPについて',
    content: `TCP/IPについて勉強します。
日時：2022年6月2日（木） 18:00〜19:00

■参加資格
制限なし

■概要
マスタリングTCP/IP 入門を読みながら、不明点などを議論していくスタイルです。
`,
    endDate: '2022-06-03T10:00:00Z',
    likes: 3,
    ...santokuAccount,
  });
  db.event.create({
    eventId: '3',
    title: '【イベント】React Native - New Architecture',
    content: `React NativeのNew Architectureに関するイベントです。
日時：2022年6月9日（木） 18:00〜20:00

■参加資格
制限なし

■概要
React NativeのNew Architectureは、さまざまな理由により導入に踏み切ってない方も多いかと思います。
まだまだ少ない事例の中、実際にNew Architectureを導入した開発者に、導入して感じたことを話して頂きます。
`,
    endDate: '2022-06-10T10:00:00Z',
    likes: 10,
    ...adminAccount,
  });
  db.event.create({
    eventId: '4',
    title: '【勉強会】OIDC',
    content: `Open ID Connectの勉強会。
日時：2023年1月17日（火） 18:00〜19:00

■参加資格
制限なし

■概要
Keycloakを使用しながら、実際にOpen ID Connectの各種フローを追っていきます。
`,
    endDate: '2023-01-18T10:00:00Z',
    likes: 5,
    ...santokuAccount,
  });
  db.event.create({
    eventId: '5',
    title: '【イベント】React x Firebase',
    content: `ReactとFirebaseを使用したWebアプリケーションに関するイベントです。
日時：2023年1月30日（月） 17:00〜19:00

■参加資格
制限なし

■概要
ReactとFirebaseを使用してWebアプリケーションを構築した開発者が、そのメリットやデメリットなどを話します。
`,
    endDate: '2023-02-01T10:00:00Z',
    likes: 8,
    ...santokuAccount,
  });
  db.event.create({
    eventId: '6',
    title: '【勉強会】CSR/SSR/SSG/ISR',
    content: `XXRについて違いがわからない！って方もいるかと思います。
勉強会を主催している私も全くわかりません。
この勉強会では、全くわからない方が集まって、ワイワイ調べながら知識を深めていきたいと考えています。

■参加資格
XXRが全くわからない方
`,
    endDate: '2023-06-07T10:00:00Z',
    likes: 15,
    ...partnerAccount,
  });
  db.event.create({
    eventId: '7',
    title: '【イベント】トレーサビリティ',
    content: `Cloud Native時代のトレーサビリティ
日時：2023年7月14日（金） 17:00〜19:00

■参加資格
制限なし

■概要
不具合が発生した場合に、みなさんはどのようにログを追っていますか？
今回のイベントは、Cloud Nativeのトレーサビリティに関する話を中心とした催しになります。
`,
    endDate: '2023-07-17T10:00:00Z',
    likes: 18,
    ...adminAccount,
  });
};
