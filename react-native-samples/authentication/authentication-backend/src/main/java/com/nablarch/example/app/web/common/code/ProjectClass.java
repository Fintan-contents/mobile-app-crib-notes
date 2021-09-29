package com.nablarch.example.app.web.common.code;

/**
 * プロジェクト規模を定義したEnum。
 * 
 * @author Nabu Rakutaro
 */
public enum ProjectClass implements CodeEnum {
    /** SS級 */
    SS("ss", "SS"),
    /** S級 */
    S("s", "S"),
    /** A級 */
    A("a", "A"),
    /** B級 */
    B("b", "B"),
    /** C級 */
    C("c", "C"),
    /** D級 */
    D("d", "D");

    /** プロジェクト規模のラベル */
    private final String label;
    /** プロジェクト規模のコード */
    private final String code;

    /**
     * コンストラクタ。
     * @param code コード値
     * @param label ラベル
     */
    ProjectClass(String code, String label) {
        this.label = label;
        this.code = code;
    }

    @Override
    public String getLabel() {
        return label;
    }

    @Override
    public String getCode() {
        return code;
    }
}
