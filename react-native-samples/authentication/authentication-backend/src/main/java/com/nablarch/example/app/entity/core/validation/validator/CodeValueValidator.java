package com.nablarch.example.app.entity.core.validation.validator;

import com.nablarch.example.app.web.common.code.CodeEnum;
import nablarch.core.util.StringUtil;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Arrays;

/**
 * CodeValueの検証を行う実装クラス。
 *
 * @author Nabu Rakutaro
 */
public class CodeValueValidator implements ConstraintValidator<CodeValue, String> {

    /** コードとラベルを持つEnumの配列 */
    private Object[] enumValues;

    /**
     * CodeValueValidator を初期化する。
     *
     * @param constraintAnnotation 対象プロパティに付与されたアノテーション
     */
    @Override
    public void initialize(CodeValue constraintAnnotation) {
        enumValues = constraintAnnotation.enumClass()
                                         .getEnumConstants();
    }

    /**
     * 検証対象の値が指定したenumクラスに含まれるかどうかを検証する。
     *
     * @param value 検証対象の値
     * @param context バリデーションコンテキスト
     * @return 含まれる場合 {@code true}
     */
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        if (StringUtil.isNullOrEmpty(value)) {
            return true;
        }

        if (enumValues != null) {
            return Arrays.stream(enumValues)
                         .map(CodeEnum.class::cast)
                         .map(CodeEnum::getCode)
                         .filter(value::equals)
                         .findFirst()
                         .map(v -> true)
                         .orElse(false);
        }
        return false;
    }
}
