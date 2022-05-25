import {loginPasswordValidator} from './loginPasswordValidator';

describe('loginPasswordValidator', () => {
  // 正常
  it('既存正常', () => {
    expect(loginPasswordValidator('ABCabc12!%')).toBe(true);
  });
  it('英大文字なしはNG-1', () => {
    expect(loginPasswordValidator('abcabcab')).toBe(false);
  });
  it('英大文字なしはNG-2', () => {
    expect(loginPasswordValidator('abcabc12')).toBe(false);
  });
  it('英小文字なしはNG-1', () => {
    expect(loginPasswordValidator('ABCABCAB')).toBe(false);
  });
  it('英小文字なしはNG-2', () => {
    expect(loginPasswordValidator('ABCABC12')).toBe(false);
  });
  it('数字なしはNG-1', () => {
    expect(loginPasswordValidator('abcabcab')).toBe(false);
  });
  it('数字なしはNG-2', () => {
    expect(loginPasswordValidator('abcabcAB')).toBe(false);
  });
});
