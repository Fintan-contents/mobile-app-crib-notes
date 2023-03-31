import {santokuAccount} from './accountData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const questionCommentData = () => {
  db.questionComment.create({
    commentId: '1',
    questionId: '1',
    content: 'React Navigationは、6系を使用しています。',
    datetime: '2022-06-02T10:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.questionComment.create({
    commentId: '2',
    questionId: '4',
    content: 'テキストインプットには、TextFormFieldを使用しています。',
    datetime: '2022-07-04T10:00:00Z',
    likes: 1,
    ...partnerAccount,
  });
};
