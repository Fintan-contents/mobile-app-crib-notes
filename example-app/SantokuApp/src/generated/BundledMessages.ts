export const bundledMessages = {
  ホーム: 'ホーム',
  チーム名: 'チーム名',
  'validation.required': '{0}を入力してください。',
  'msg.error.ネットワーク': 'ページの表示中にエラーが発生しました。ネットワーク環境を確認してください。',
} as const;

export type BundledMessagesType = typeof bundledMessages;
export type MessageKey = keyof typeof bundledMessages;
