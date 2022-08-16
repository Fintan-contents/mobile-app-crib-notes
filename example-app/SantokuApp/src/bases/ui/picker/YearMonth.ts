export type YearMonth = {
  year?: number;
  /**
   * 月は、1〜12の範囲で値を保持します。
   */
  month?: number;
};

export type RequiredYearMonth = Required<YearMonth>;
