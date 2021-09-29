package com.nablarch.example.app.web.dto;

/**
 * 業種情報を保持するDtoクラス。
 *
 * @author Nabu Rakutaro
 */
public class IndustryDto {

    /** 業種コード */
    private String industryCode;

    /** 業種名 */
    private String industryName;

    /**
     * 業種コードを取得する。
     *
     * @return 業種コード
     */
    public String getIndustryCode() {
        return industryCode;
    }

    /**
     * 業種コードを設定する。
     *
     * @param industryCode 業種コード
     */
    public void setIndustryCode(String industryCode) {
        this.industryCode = industryCode;
    }

    /**
     * 業種名を取得する。
     *
     * @return 業種名
     */
    public String getIndustryName() {
        return industryName;
    }

    /**
     * 業種名を設定する。
     *
     * @param industryName 業種名
     */
    public void setIndustryName(String industryName) {
        this.industryName = industryName;
    }
}
