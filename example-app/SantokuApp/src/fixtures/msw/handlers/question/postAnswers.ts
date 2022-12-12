import {AnswerContent, AnswerRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {format2Iso8601} from '../../utils/format2Iso8601';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const postAnswers = rest.post(`${backendUrl}/questions/:questionId/answers`, async (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const questionId = String(req.params.questionId);
    const {content} = await req.json<AnswerRegistration>();
    const db = getDb(accountId);
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401));
    }
    const answer = {questionId, content, datetime: format2Iso8601(new Date()), likes: 0, comments: 0};
    const savedAnswer = db.answer.create(answer);
    return delayedResponse(
      ctx.status(201),
      ctx.json<AnswerContent>({
        answerId: savedAnswer.answerId,
        content: savedAnswer.content,
        datetime: savedAnswer.datetime,
        likes: savedAnswer.likes,
        comments: savedAnswer.comments,
      }),
    );
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
