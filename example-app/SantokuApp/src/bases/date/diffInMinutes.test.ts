import {diffInMinutes} from './diffInMinutes';

describe('diffInMinutes', () => {
  test('diffInMinutesの検証', () => {
    const diff = diffInMinutes(new Date('2023/4/01 12:00:00'), new Date('2023/4/01 11:58:30'));
    expect(diff).toEqual(1);
  });
});
