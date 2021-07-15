package com.nablarch.example.app.entity.core.validation.validator;

import nablarch.core.util.DateUtil;
import nablarch.core.util.StringUtil;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * 検証処理が実装された内部クラス。
 *
 * @author Nabu Rakutaro
 */
public class YYYYMMDDValidator implements ConstraintValidator<YYYYMMDD, String> {

    /** 許容するフォーマット */
    private String allowFormat;

    /**
     * 検証処理を初期化する。
     * @param constraintAnnotation 対象プロパティに付与されたアノテーション
     */
    @Override
    public void initialize(YYYYMMDD constraintAnnotation) {
        allowFormat = constraintAnnotation.allowFormat();
    }

    /**
     * 対象の値が {@code allowFormat} で指定するフォーマットに適合しているか検証する。
     * @param value 対象の値
     * @param context バリデーションコンテキスト
     * @return フォーマットに適合している場合 {@code true}
     */
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (StringUtil.isNullOrEmpty(value)) {
            return true;
        }
        try {
            return DateUtil.getParsedDate(value, allowFormat) != null;
        } catch (IllegalArgumentException ignored) {
            return false;
        }
    }
}
