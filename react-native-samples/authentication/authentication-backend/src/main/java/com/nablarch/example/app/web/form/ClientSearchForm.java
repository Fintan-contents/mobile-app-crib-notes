package com.nablarch.example.app.web.form;

import java.io.Serializable;
import java.util.Objects;

import nablarch.core.util.StringUtil;
import nablarch.core.validation.ee.Domain;

/**
 * 顧客検索フォーム。
 *
 * @author Nabu Rakutaro
 */
public class ClientSearchForm implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** 顧客名 */
    @Domain("clientName")
    private String clientName;

    /** 業種 */
    @Domain("industryCode")
    private String industryCode;

    /** 並び順項目 */
    @Domain("clientAlignmentItem")
    private String sortKey;

    /** 選択された並び順 */
    @Domain("alignment")
    private String sortDir;

    /**
     * 入力された顧客名値を取得する。
     *
     * @return 顧客名。
     */
    public String getClientName() {
        return clientName;
    }

    /**
     * 顧客名を設定する。
     *
     * @param clientName 設定したい顧客名。
     */
    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    /**
     * 業種コードを取得する。
     *
     * @return 業種。
     */
    public String getIndustryCode() {
        return industryCode;
    }

    /**
     * 業種コードを設定する。
     *
     * @param industryCode 設定したい業種。
     */
    public void setIndustryCode(String industryCode) {
        this.industryCode = industryCode;
    }

    /**
     * 選択された並び順項目を取得する。
     *
     * @return 並び順項目。
     */
    public String getSortKey() {
        return sortKey;
    }

    /**
     * 並び順項目を設定する。
     *
     * @param sortKey 設定したい 並び順項目。
     */
    public void setSortKey(String sortKey) {
        this.sortKey = sortKey;
    }

    /**
     * 選択された並び順を取得する。
     *
     * @return 並び順。
     */
    public String getSortDir() {
        return sortDir;
    }

    /**
     * 並び順を設定する。
     *
     * @param sortDir 設定したい並び順。
     */
    public void setSortDir(String sortDir) {
        this.sortDir = sortDir;
    }

    /**
     * sortKeyとsortDirの値からソートIDを作成する。
     * sortKeyとsortDirに正常な値が格納されていない場合は"clientIdAsc"を設定する。
     *
     * @return ソートID
     */
    public String getSortId() {
        String sortId = "clientIdAsc";
        if (StringUtil.hasValue(sortKey) && StringUtil.hasValue(sortDir)) {
            String sortKeyName = Objects.equals(sortKey, "name") ? "clientName" : "clientId";
            String sortDirName = Objects.equals(sortDir, "desc") ? "Desc" : "Asc";
            sortId = sortKeyName + sortDirName;
        }
        return sortId;
    }

}
