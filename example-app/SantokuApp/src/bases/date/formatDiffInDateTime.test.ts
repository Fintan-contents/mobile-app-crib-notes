import {formatDiffInDateTime} from './formatDiffInDateTime';
describe.each([
  ['2023/4/01 12:00:00', '2022/4/01 12:00:00', '1年前'],
  ['2023/4/01 12:00:00', '2023/3/31 12:00:00', '1日前'],
  ['2023/4/01 12:00:00', '2023/4/01 11:00:00', '1時間前'],
  ['2023/4/01 12:00:00', '2023/4/01 11:59:00', '1分前'],
])('formatDiffInDateTime', (dateLeft, dateRight, expected) => {
  test(`formatDiffInDateTimeの検証`, () => {
    const options = {
      daysSuffix: '日前',
      hoursSuffix: '時間前',
      minutesSuffix: '分前',
      yearsSuffix: '年前',
    };
    const diff = formatDiffInDateTime(new Date(dateLeft), new Date(dateRight), options);
    expect(diff).toEqual(expected);
  });
});
