import {diffInDays} from './diffInDays';

describe('diffInDays', () => {
  test('diffInDaysの検証', () => {
    const diff = diffInDays(new Date('2023/4/01 12:00:00'), new Date('2023/3/31 06:00:00'));
    expect(diff).toEqual(1);
  });
});
