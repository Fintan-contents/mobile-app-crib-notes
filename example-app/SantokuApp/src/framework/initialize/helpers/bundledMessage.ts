import {BundledMessagesLoader, loadMessages} from 'framework';

const loadBundledMessagesAsync = async () => {
  try {
    await loadMessages(new BundledMessagesLoader());
  } catch (e) {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
    throw new Error('Failed to load message.');
  }
};

export {loadBundledMessagesAsync};
