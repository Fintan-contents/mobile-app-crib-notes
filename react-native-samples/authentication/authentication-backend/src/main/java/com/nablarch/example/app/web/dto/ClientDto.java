package com.nablarch.example.app.web.dto;

/**
 * 顧客検索機能のDto。
 *
 * @author Nabu Rakutaro
 *
 */
public class ClientDto {

    /** 顧客ID */
    private Integer clientId;

    /** 顧客名 */
    private String clientName;

    /** 業種コード */
    private String industryCode;

    /** 業種名 */
    private String industryName;


    /**
     * 顧客IDを取得する。
     * @return 顧客ID
     */
    public Integer getClientId() {
        return clientId;
    }

    /**
     * 顧客IDを設定する。
     * @param clientId 顧客ID
     */
    public void setClientId(Integer clientId) {
        this.clientId = clientId;
    }

    /**
     * 顧客名を取得する。
     * @return 顧客名
     */
    public String getClientName() {
        return clientName;
    }

    /**
     * 顧客名を設定する。
     * @param clientName 顧客名
     */
    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    /**
     * 業種コードを取得する。
     * @return 業種コード
     */
    public String getIndustryCode() {
        return industryCode;
    }

    /**
     * 業種コードを設定する。
     * @param industryCode 業種コード
     */
    public void setIndustryCode(String industryCode) {
        this.industryCode = industryCode;
    }

    /**
     * 業種名を返する。
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
