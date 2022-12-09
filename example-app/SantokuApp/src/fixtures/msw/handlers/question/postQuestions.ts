import {QuestionContent, QuestionRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const postQuestions = rest.post(`${backendUrl}/questions`, async (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const {title, content, tags: tagIds, beginner} = await req.json<QuestionRegistration>();
    const db = getDb(accountId);
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401));
    }
    const question = {title, content, tags: tagIds ?? [], beginner, ...account};
    const savedQuestion = db.question.create(question);
    const tags = db.tag.getAll();
    return delayedResponse(
      ctx.status(201),
      ctx.json<QuestionContent>({
        questionId: savedQuestion.questionId,
        title: savedQuestion.title,
        content: savedQuestion.content,
        tags: tagIds?.map(tagId => tags.find(tag => tag.tagId === tagId)!) ?? [],
        datetime: savedQuestion.datetime,
        beginner: savedQuestion.beginner,
        resolved: savedQuestion.resolved,
        views: savedQuestion.views,
        answers: savedQuestion.answers,
        likes: savedQuestion.likes,
        comments: savedQuestion.comments,
        lastUpdatedAt: savedQuestion.lastUpdatedAt,
      }),
    );
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
