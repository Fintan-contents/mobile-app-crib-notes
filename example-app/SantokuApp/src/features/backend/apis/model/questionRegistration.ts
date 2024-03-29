/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * 登録する質問情報
 */
export interface QuestionRegistration {
  /** 質問のタイトル */
  title: string;
  /** 質問内容 */
  content: string;
  /** 質問の設定するタグ */
  tags?: string[];
  /** 初心者か否か */
  beginner: boolean;
}
