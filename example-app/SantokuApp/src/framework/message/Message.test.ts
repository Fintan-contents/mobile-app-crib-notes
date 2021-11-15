import {log} from '../logging';
import {loadMessages, m} from './Message';

describe('Message message', () => {
  test('メッセージがロードされていない場合の検証', () => {
    // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
    expect(() => m('msg.error.network')).toThrowError(new Error('Messages are not loaded.'));
  });
  test('オプションが存在しないメッセージの取得を検証', async () => {
    await loadMessages({
      load: async () => {
        return new Promise((resolve) => {
          // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
          resolve({'msg.error.network': 'network error.'});
        });
      },
    });
    // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
    expect(m('msg.error.network')).toEqual('network error.');
  });
  test('オプションが存在するメッセージの取得を検証', async () => {
    await loadMessages({
      load: async () => {
        return new Promise((resolve) => {
          resolve({
            // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
            'validation.required': '{0}を入力してください。',
            // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
            'validation.max': '{0}が長すぎます。{0}は{1}桁以内で入力してください。',
          });
        });
      },
    });
    // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
    expect(m('validation.required', 'name')).toEqual('nameを入力してください。');
    // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
    expect(m('validation.max', 'name', 10)).toEqual('nameが長すぎます。nameは10桁以内で入力してください。');
    // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
    expect(m('validation.required')).toEqual('{0}を入力してください。');
  });
  test('指定されたメッセージキーに該当するメッセージが存在しない場合の検証', async () => {
    await loadMessages({
      load: async () => {
        return new Promise((resolve) => {
          // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
          resolve({'msg.error.network': 'network error.'});
        });
      },
    });
    const spy = jest.spyOn(log, 'error').mockImplementation();
    // @ts-ignore テスト用にMessageKeyには存在しないキーを指定しているため
    expect(m('dummyKey')).toEqual('dummyKey');
    expect(spy).toHaveBeenCalledWith('Could not find the message. messageKey=[dummyKey]', 'MessageNotFound');
  });
});
