import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Alert} from 'react-native';

import {showUpdateRequiredDialog} from './showUpdateRequiredDialog';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});
beforeEach(() => {
  jest.resetAllMocks();
});

describe('showUpdateRequiredDialog', () => {
  it('showUpdateRequiredDialog', () => {
    const spyAlert = jest.spyOn(Alert, 'alert');
    showUpdateRequiredDialog('0.0.1');
    expect(spyAlert).toHaveBeenCalledWith(
      'アプリアップデート',
      '現在のバージョン(0.0.1)ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
      expect.anything(),
    );
  });
});
