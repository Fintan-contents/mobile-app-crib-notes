import {getQuestions} from './getQuestions';
import {getQuestionsQuestionId} from './getQuestionsQuestionId';
import {postAnswerComments} from './postAnswerComments';
import {postAnswers} from './postAnswers';
import {postQuestionComments} from './postQuestionComments';
import {postQuestions} from './postQuestions';

export const questionHandlers = [
  getQuestions,
  getQuestionsQuestionId,
  postQuestions,
  postQuestionComments,
  postAnswers,
  postAnswerComments,
];
