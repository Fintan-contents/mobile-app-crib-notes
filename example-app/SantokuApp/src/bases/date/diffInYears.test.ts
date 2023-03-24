import {diffInYears} from './diffInYears';

describe('diffInYears', () => {
  describe.each([
    //month of dateRight < month of dateLeft
    ['2023/4/12 12:12:00', '2021/3/12 12:12:00', 2],
    // month of dateRight = month of dateLeft
    // day of dateRight < day of dateLeft
    ['2023/4/12 12:12:00', '2021/4/11 12:12:00', 2],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight < hours of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 11:12:00', 2],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight = hours of dateLeft
    // minutes of dateRight < minutes of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 12:11:00', 2],
  ])(
    '異なる二つのDateオブジェクトの年の差 = Dateオブジェクトの年部分の差 となるケース',
    (dateLeft, dateRight, expected) => {
      test(`diffInYearsの検証`, () => {
        const diff = diffInYears(new Date(dateLeft), new Date(dateRight));
        expect(diff).toEqual(expected);
      });
    },
  );

  describe.each([
    // month of dateRight > month of dateLeft
    ['2023/4/12 12:12:00', '2021/5/12 12:12:00', 1],
    // month of dateRight = month of dateLeft
    // day of dateRight > day of dateLeft
    ['2023/4/12 12:12:00', '2021/4/13 12:12:00', 1],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight > hours of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 13:12:00', 1],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight = hours of dateLeft
    // minutes of dateRight > minutes of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 12:13:00', 1],
  ])(
    '異なる二つのDateオブジェクトの年の差 = Dateオブジェクトの年部分の差-1 となるケース',
    (dateLeft, dateRight, expected) => {
      test(`diffInYearsの検証`, () => {
        const diff = diffInYears(new Date(dateLeft), new Date(dateRight));
        expect(diff).toEqual(expected);
      });
    },
  );
});
