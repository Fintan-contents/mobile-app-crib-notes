package com.nablarch.example.app.web.dto;

import java.io.Serializable;

/**
 * 顧客検索のDto
 *
 * @author Nabu Rakutaro
 */
public class ClientSearchDto implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** 顧客名 */
    private String clientName;

    /** 業種コード */
    private String industryCode;

    /** ソートID */
    private String sortId;

    /**
     * clientNameを返する。
     *
     * @return clientName
     */
    public String getClientName() {
        return clientName;
    }

    /**
     * clientNameを設定する。
     *
     * @param clientName 顧客名
     */
    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    /**
     * industryCodeを返する。
     *
     * @return industryCode
     */
    public String getIndustryCode() {
        return industryCode;
    }

    /**
     * industryCodeを設定する。
     *
     * @param industryCode 業種
     */
    public void setIndustryCode(String industryCode) {
        this.industryCode = industryCode;
    }

    /**
     * sortIdを返する。
     *
     * @return sortId
     */
    public String getSortId() {
        return sortId;
    }

    /**
     * sortIdを設定する。
     *
     * @param sortId ソートID
     */
    public void setSortId(String sortId) {
        this.sortId = sortId;
    }
}
