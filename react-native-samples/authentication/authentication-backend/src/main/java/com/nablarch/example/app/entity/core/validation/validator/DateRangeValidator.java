package com.nablarch.example.app.entity.core.validation.validator;

import nablarch.core.util.DateUtil;
import nablarch.core.util.StringUtil;

/**
 * 開始日と終了日の関係が正しいかをバリデーションするクラス。
 *
 * @author Nabu Rakutaro
 */
public class DateRangeValidator {
    /** 開始日 */
    private final String start;
    /** 終了日 */
    private final String end;

    /**
     * 開始日と終了日を設定するコンストラクタ。
     *
     * @param start 開始日
     * @param end 終了日
     */
    public DateRangeValidator(final String start, final String end) {
        this.start = start;
        this.end = end;
    }

    /**
     * 開始日より終了日が後（同日を含む）ならtrueを返す。
     * また、どちらかが日付形式でない場合もtrueを返す。
     *
     * @return 開始日 <= 終了日 なら true
     */
    public boolean isValid() {
        if (isValidDate(start) && isValidDate(end)) {
            return DateUtil.getDate(start).compareTo(DateUtil.getDate(end)) <= 0;
        }
        // 日付以外はバリデーション対象外
        return true;
    }

    /**
     * 文字列が日付形式であるかをチェックする。
     *
     * @param date 日付文字列
     * @return 日付形式ならtrue
     */
    private boolean isValidDate(final String date) {
        if (StringUtil.isNullOrEmpty(date)) {
            return false;
        }
        return DateUtil.isValid(date, "yyyyMMdd");
    }
}
