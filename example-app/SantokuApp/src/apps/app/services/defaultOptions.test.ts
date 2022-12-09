import {defaultOptions} from './defaultOptions';

describe('defaultOptions', () => {
  test('retryがfalseに設定されていること', () => {
    expect(defaultOptions.queries?.retry).toEqual(false);
  });
});
