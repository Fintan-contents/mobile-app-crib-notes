import {CommentContent, CommentRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {format2Iso8601} from '../../utils/format2Iso8601';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const postQuestionComments = rest.post(`${backendUrl}/questions/:questionId/comments`, async (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const questionId = String(req.params.questionId);
    const {content} = await req.json<CommentRegistration>();
    const db = getDb(accountId);
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401));
    }
    const comment = {questionId, content, datetime: format2Iso8601(new Date()), likes: 0};
    const savedComment = db.questionComment.create(comment);
    return delayedResponse(
      ctx.status(201),
      ctx.json<CommentContent>({
        commentId: savedComment.commentId,
        content: savedComment.content,
        datetime: savedComment.datetime,
        likes: savedComment.likes,
      }),
    );
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
