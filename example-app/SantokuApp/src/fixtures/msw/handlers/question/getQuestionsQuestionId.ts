import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const getQuestionsQuestionId = rest.get(`${backendUrl}/questions/:questionId`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const questionId = String(req.params.questionId);
    const db = getDb(accountId);
    const question = db.question.findFirst({where: {questionId: {equals: questionId}}});
    const commentList = db.questionComment.findMany({where: {questionId: {equals: questionId}}});
    const tags = db.tag.getAll();
    const questionResponse = {
      question: {...question, tags: question?.tags.map(tagId => tags.find(tag => tag.tagId === tagId))},
      commentList,
    };
    const answers = db.answer.findMany({where: {questionId: {equals: questionId}}});
    const answerListResponse = answers.map(answer => {
      const commentList = db.answerComment.findMany({where: {answerId: {equals: answer.answerId}}});
      return {answer, commentList};
    });
    if (questionResponse.question) {
      return delayedResponse(ctx.json({question: questionResponse, answerList: answerListResponse}));
    }
    return delayedResponse(ctx.status(404));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
