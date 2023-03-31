import {diffInHours} from './diffInHours';

describe('diffInHours', () => {
  test('diffInHoursの検証', () => {
    const diff = diffInHours(new Date('2023/4/01 12:00:00'), new Date('2023/4/01 10:30:00'));
    expect(diff).toEqual(1);
  });
});
