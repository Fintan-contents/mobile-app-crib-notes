/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * 登録するイベント情報
 */
export interface EventRegistration {
  /** イベントのタイトル */
  title: string;
  /** イベント内容 */
  content: string;
  /** 掲載終了日 */
  endDate: string;
}
