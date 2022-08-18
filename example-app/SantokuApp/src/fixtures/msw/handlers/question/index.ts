import {getQuestions} from './getQuestions';
import {getQuestionsQuestionId} from './getQuestionsQuestionId';
import {postAnswerComments} from './postAnswerComments';
import {postAnswers} from './postAnswers';
import {postQuestionComments} from './postQuestionComments';

export const questionHandlers = [
  getQuestions,
  getQuestionsQuestionId,
  postQuestionComments,
  postAnswers,
  postAnswerComments,
];
