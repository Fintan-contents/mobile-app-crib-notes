package com.nablarch.example.app.web.common.code;

/**
 * コード値を定義したEnumが実装するインタフェース。
 * 
 * @author Nabu Rakutaro
 */
public interface CodeEnum {
    /**
     * ラベルを返却する。
     * @return ラベル
     */
    String getLabel();

    /**
     * コード値を返却する。
     * @return コード値
     */
    String getCode();
}
