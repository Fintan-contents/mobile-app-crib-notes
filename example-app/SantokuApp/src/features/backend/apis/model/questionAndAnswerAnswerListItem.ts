/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import type {Answer} from './answer';
import type {Comment} from './comment';

/**
 * 回答とコメント
 */
export type QuestionAndAnswerAnswerListItem = {
  answer: Answer;
  /** 回答に対するコメントのリスト */
  commentList: Comment[];
};
