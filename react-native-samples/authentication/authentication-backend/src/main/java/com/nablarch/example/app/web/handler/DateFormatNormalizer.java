package com.nablarch.example.app.web.handler;

import nablarch.fw.web.handler.normalizer.Normalizer;

import java.util.Arrays;
import java.util.regex.Pattern;

/**
 * 日付文字列のスラッシュを除去するノーマライザ
 *
 * @author Nabu Rakutaro
 */
public class DateFormatNormalizer implements Normalizer {

    /** 日付文字列のスラッシュ */
    private static final Pattern PATTERN = Pattern.compile("/");

    /**
     * キーのサフィックスが"Date"であれば、{@code true}を返す
     *
     * @param key パラメータのキー
     * @return ノーマライズ対象の場合は {@code ture}
     */
    @Override
    public boolean canNormalize(String key) {
        return key.endsWith("Date");
    }

    /**
     * スラッシュを除去した値を返却する
     *
     * @param value ノーマライズ対象の値
     * @return ノーマライズ後の値
     */
    @Override
    public String[] normalize(String[] value) {
        return Arrays
                .stream(value)
                .map(s -> s == null ? null : PATTERN.matcher(s).replaceAll(""))
                .toArray(String[]::new);
    }
}
