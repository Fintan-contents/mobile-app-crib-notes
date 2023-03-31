import {formatLargeNumber} from './formatLargeNumber';

describe('formatLargeNumber', () => {
  test('整形された値が取得できるかの検証', () => {
    const maxValue = 999;
    const value = formatLargeNumber(999, maxValue);
    expect(value).toEqual('999');

    const formatedValue = formatLargeNumber(1000, maxValue);
    expect(formatedValue).toEqual('999+');
  });
});
