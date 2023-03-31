import {santokuAccount} from './accountData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const answerCommentData = () => {
  db.answerComment.create({
    commentId: '1',
    answerId: '1',
    questionId: '1',
    content: 'ありがとうございます。headerShown: falseを指定してできました〜',
    datetime: '2022-06-05T12:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.answerComment.create({
    commentId: '2',
    answerId: '2',
    questionId: '2',
    content: 'なるほど、スッキリしました。ありがとうございます。',
    datetime: '2022-07-05T12:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.answerComment.create({
    commentId: '3',
    answerId: '3',
    questionId: '3',
    content: '了解しました。AWS SDKを使用してやってみます。',
    datetime: '2022-07-07T12:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.answerComment.create({
    commentId: '4',
    answerId: '4',
    questionId: '4',
    content: 'AutocompleteっていうWidgetがあるんですね。知りませんでした。ありがとうございます。',
    datetime: '2022-07-04T11:00:00Z',
    likes: 1,
    ...partnerAccount,
  });
  db.answerComment.create({
    commentId: '5',
    answerId: '5',
    questionId: '4',
    content: 'Autocompleteを使ってみて、ちょうどその点で困ってました。ご連携ありがとうございます。',
    datetime: '2022-07-04T12:00:00Z',
    likes: 1,
    ...partnerAccount,
  });
  db.answerComment.create({
    commentId: '6',
    answerId: '6',
    questionId: '5',
    content: 'なるほど、TypeScriptを使ってみようかと思います。',
    datetime: '2022-07-04T12:00:00Z',
    likes: 1,
    ...partnerAccount,
  });
};
