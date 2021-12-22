export const bundledMessages = {
  ホーム: 'ホーム',
  チーム詳細: 'チーム詳細',
  利用規約: '利用規約',
  リロード: 'リロード',
  同意: '同意',
  閉じる: '閉じる',
  'validation.required': '{0}を入力してください。',
  'msg.error.ネットワーク': 'ページの表示中にエラーが発生しました。ネットワーク環境を確認してください。',
  'app.webview.onError': '通信エラーが発生し、コンテンツの取得に失敗しました。ネットワーク環境を確認してください。',
  'app.terms.有効な利用規約の取得エラー': '利用規約の取得に失敗しました。画面をリロードして再度お試しください。',
} as const;

export type BundledMessagesType = typeof bundledMessages;
export type MessageKey = keyof typeof bundledMessages;
