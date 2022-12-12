import {bundledMessages, BundledMessagesType} from './BundledMessages';
import {MessagesLoader} from './Message';

/**
 * アプリ内にバンドルされたメッセージをロードするクラスです。
 */
class BundledMessagesLoader implements MessagesLoader {
  load() {
    return new Promise<BundledMessagesType>(resolve => resolve(bundledMessages));
  }
}

export {BundledMessagesLoader};
