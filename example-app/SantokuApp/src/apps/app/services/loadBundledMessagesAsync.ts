import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';

const loadBundledMessagesAsync = async () => {
  try {
    await loadMessages(new BundledMessagesLoader());
  } catch {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
    throw new Error('Failed to load message.');
  }
};

export {loadBundledMessagesAsync};
