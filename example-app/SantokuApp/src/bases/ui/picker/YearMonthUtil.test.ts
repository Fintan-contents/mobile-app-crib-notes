import {YearMonthUtil} from './YearMonthUtil';

describe('YearMonthUtil#now', () => {
  beforeAll(() => {
    const mockDate = new Date(2022, 1);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  test('should get current year and month', () => {
    expect(YearMonthUtil.now()).toEqual({year: 2022, month: 2});
  });
});

describe('YearMonthUtil#fromDate', () => {
  test('should get specified year and month', () => {
    expect(YearMonthUtil.fromDate(new Date(2021, 11))).toEqual({year: 2021, month: 12});
  });
});

describe('YearMonthUtil#toDate', () => {
  test('should get undefined if year does not exist', () => {
    expect(YearMonthUtil.toDate({year: undefined, month: 1})).toBeUndefined();
  });
  test('should get only year if month does not exist', () => {
    expect(YearMonthUtil.toDate({year: 2022, month: undefined})).toEqual(new Date(2022));
  });
  test('should get year and month if year and month exists', () => {
    expect(YearMonthUtil.toDate({year: 2022, month: 2})).toEqual(new Date(2022, 1));
  });
});

describe('YearMonthUtil#isFuture', () => {
  test('ym1 > ym2', () => {
    const ym1 = {year: 2022, month: 4};
    const ym2 = {year: 2022, month: 3};
    expect(YearMonthUtil.isFuture(ym1, ym2)).toBeTruthy();
  });
  test('ym1 == ym2', () => {
    const ym1 = {year: 2022, month: 4};
    const ym2 = {year: 2022, month: 4};
    expect(YearMonthUtil.isFuture(ym1, ym2)).toBeFalsy();
  });
  test('ym1 < ym2', () => {
    const ym1 = {year: 2022, month: 4};
    const ym2 = {year: 2022, month: 5};
    expect(YearMonthUtil.isFuture(ym1, ym2)).toBeFalsy();
  });
  test('year/month == undefined', () => {
    const ym1 = {year: undefined, month: 4};
    const ym2 = {year: 2022, month: 3};
    expect(YearMonthUtil.isFuture(ym1, ym2)).toBeFalsy();
    const ym3 = {year: 2022, month: undefined};
    const ym4 = {year: 2022, month: 3};
    expect(YearMonthUtil.isFuture(ym3, ym4)).toBeFalsy();
    const ym5 = {year: 2022, month: 4};
    const ym6 = {year: undefined, month: 3};
    expect(YearMonthUtil.isFuture(ym5, ym6)).toBeFalsy();
    const ym7 = {year: 2022, month: 4};
    const ym8 = {year: 2022, month: undefined};
    expect(YearMonthUtil.isFuture(ym7, ym8)).toBeFalsy();
  });
});

describe('YearMonthUtil#isPast', () => {
  test('ym1 < ym2', () => {
    const ym1 = {year: 2022, month: 3};
    const ym2 = {year: 2022, month: 4};
    expect(YearMonthUtil.isPast(ym1, ym2)).toBeTruthy();
  });
  test('ym1 == ym2', () => {
    const ym1 = {year: 2022, month: 4};
    const ym2 = {year: 2022, month: 4};
    expect(YearMonthUtil.isPast(ym1, ym2)).toBeFalsy();
  });
  test('ym1 > ym2', () => {
    const ym1 = {year: 2022, month: 5};
    const ym2 = {year: 2022, month: 4};
    expect(YearMonthUtil.isPast(ym1, ym2)).toBeFalsy();
  });
  test('year/month == undefined', () => {
    const ym1 = {year: undefined, month: 4};
    const ym2 = {year: 2022, month: 3};
    expect(YearMonthUtil.isPast(ym1, ym2)).toBeFalsy();
    const ym3 = {year: 2022, month: undefined};
    const ym4 = {year: 2022, month: 3};
    expect(YearMonthUtil.isPast(ym3, ym4)).toBeFalsy();
    const ym5 = {year: 2022, month: 4};
    const ym6 = {year: undefined, month: 3};
    expect(YearMonthUtil.isPast(ym5, ym6)).toBeFalsy();
    const ym7 = {year: 2022, month: 4};
    const ym8 = {year: 2022, month: undefined};
    expect(YearMonthUtil.isPast(ym7, ym8)).toBeFalsy();
  });
});

describe('YearMonthUtil#addMonth', () => {
  const ym = {year: 2022, month: 4};
  test('add 0 month', () => {
    expect(YearMonthUtil.addMonth(ym, 0)).toEqual({year: 2022, month: 4});
  });
  test('add 1 month', () => {
    expect(YearMonthUtil.addMonth(ym, 1)).toEqual({year: 2022, month: 5});
  });
  test('add 8 month', () => {
    expect(YearMonthUtil.addMonth(ym, 8)).toEqual({year: 2022, month: 12});
  });
  test('add 9 month', () => {
    expect(YearMonthUtil.addMonth(ym, 9)).toEqual({year: 2023, month: 1});
  });
  test('add 12 month', () => {
    expect(YearMonthUtil.addMonth(ym, 12)).toEqual({year: 2023, month: 4});
  });
  test('add -1 month', () => {
    expect(YearMonthUtil.addMonth(ym, -1)).toEqual({year: 2022, month: 3});
  });
  test('add -3 month', () => {
    expect(YearMonthUtil.addMonth(ym, -3)).toEqual({year: 2022, month: 1});
  });
  test('add -4 month', () => {
    expect(YearMonthUtil.addMonth(ym, -4)).toEqual({year: 2021, month: 12});
  });
  test('add -12 month', () => {
    expect(YearMonthUtil.addMonth(ym, -12)).toEqual({year: 2021, month: 4});
  });
});
