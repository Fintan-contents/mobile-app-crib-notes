/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * イベント内容
 */
export interface EventContent {
  /** イベントID */
  readonly eventId: string;
  /** イベントのタイトル */
  title: string;
  /** イベントの内容 */
  content: string;
  /** 掲載終了日 */
  endDate: string;
  /** いいね数 */
  likes: number;
}
