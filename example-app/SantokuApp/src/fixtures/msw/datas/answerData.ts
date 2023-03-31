import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const answerData = () => {
  db.answer.create({
    answerId: '1',
    questionId: '1',
    content: `React Navigationには、headerShownというプロパティがあります。
これをfalseに設定することで、ヘッダーを非表示にできるかと思います。
https://reactnavigation.org/docs/stack-navigator/#headershown
`,
    datetime: '2022-06-05T10:00:00Z',
    likes: 3,
    comments: 1,
    ...adminAccount,
  });
  db.answer.create({
    answerId: '2',
    questionId: '2',
    content:
      'ビックリマークを二つ指定することで、直後の変数の二重否定になります。全ての型を真偽値に変換できるのでとても便利です。',
    datetime: '2022-07-05T10:00:00Z',
    likes: 5,
    comments: 1,
    ...adminAccount,
  });
  db.answer.create({
    answerId: '3',
    questionId: '3',
    content: `Nablarchには、S3にアクセスする機能がありません。
AWSのドキュメントにあるように、AWSのSDKを使用してアクセスすることになるかと思います。
https://docs.aws.amazon.com/ja_jp/sdk-for-java/v1/developer-guide/examples-s3-objects.html
`,
    datetime: '2022-07-07T10:00:00Z',
    likes: 2,
    comments: 1,
    ...adminAccount,
  });
  db.answer.create({
    answerId: '4',
    questionId: '4',
    content: `Autocompleteを使用して実現できるかと思います。
https://api.flutter.dev/flutter/material/Autocomplete-class.html
`,
    datetime: '2022-07-03T18:00:00Z',
    likes: 10,
    comments: 1,
    ...santokuAccount,
  });
  db.answer.create({
    answerId: '5',
    questionId: '4',
    content: `補足です。
Autocompleteは、TextEditControllerなどを設定することはできますが、TextFormFieldのスタイルを変更したい場合などは、fieldViewBuilderを利用する必要があります。
https://api.flutter.dev/flutter/material/Autocomplete/fieldViewBuilder.html
`,
    datetime: '2022-07-04T10:00:00Z',
    likes: 3,
    comments: 1,
    ...santokuAccount,
  });
  db.answer.create({
    answerId: '6',
    questionId: '5',
    content: `TypeScriptは型の恩恵を受けれるため、コードの品質や読みやすさを高めると言われています。
https://typescript-jp.gitbook.io/deep-dive/getting-started/why-typescript

その反面、難しさもあります。慣れていないと戸惑う場面もあるとは思います。
そのため、一概にTypeScriptをお勧めすることはできませんが、私個人としてはTypeScriptを好んで使用しています。
`,
    datetime: '2022-07-04T10:00:00Z',
    likes: 12,
    comments: 1,
    ...partnerAccount,
  });
};
