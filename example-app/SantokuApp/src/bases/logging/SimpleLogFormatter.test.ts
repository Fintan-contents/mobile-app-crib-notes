import {SimpleLogFormatter} from './SimpleLogFormatter';

describe('SimpleLogFormatter format', () => {
  const formatter = new SimpleLogFormatter();
  test('エラーコードが指定された場合の検証', () => {
    const formatted = formatter.format('error', 'message', 'err0001');
    expect(formatted).toEqual('[error] [err0001] message');
  });
  test('エラーコードが指定されなかった場合の検証', () => {
    const formatted = formatter.format('error', 'message');
    expect(formatted).toEqual('[error] message');
  });
});
