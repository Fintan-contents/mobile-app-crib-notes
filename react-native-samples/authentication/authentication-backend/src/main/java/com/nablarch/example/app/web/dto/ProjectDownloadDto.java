package com.nablarch.example.app.web.dto;

import java.io.Serializable;
import java.util.Date;

import nablarch.common.databind.csv.Csv;
import nablarch.common.databind.csv.Csv.CsvType;
import nablarch.common.databind.csv.CsvDataBindConfig.QuoteMode;
import nablarch.common.databind.csv.CsvFormat;
import nablarch.core.text.FormatterUtil;

/**
 * プロジェクト情報をCSV形式でダウンロード時に一行分のデータをバインドするBeanクラス。
 *
 * @author Nabu Rakutaro
 */
@Csv(headers = { "プロジェクト名", "プロジェクト種別", "プロジェクト分類",
        "プロジェクトマネージャー", "プロジェクトリーダー", "顧客ID", "顧客名",
        "プロジェクト開始日", "プロジェクト終了日", "備考", "売上高",
        "売上原価", "販管費", "本社配賦" },
        properties = { "projectName", "projectType", "projectClass",
                "projectManager", "projectLeader", "clientId",
                "clientName", "projectStartDateString", "projectEndDateString",
                "note", "sales", "costOfGoodsSold", "sga", "allocationOfCorpExpenses" },
        type = CsvType.CUSTOM)
@CsvFormat(charset = "Shift_JIS", fieldSeparator = ',',
        ignoreEmptyLine = true, lineSeparator = "\r\n", quote = '"',
        quoteMode = QuoteMode.NORMAL, requiredHeader = true, emptyToNull = true)
public class ProjectDownloadDto implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** プロジェクト名 */
    private String projectName;

    /** プロジェクト種別 */
    private String projectType;

    /** プロジェクト分類 */
    private String projectClass;

    /** プロジェクトマネージャー名 */
    private String projectManager;

    /** プロジェクトリーダー名 */
    private String projectLeader;

    /** 顧客ID */
    private String clientId;

    /** 顧客名 */
    private String clientName;

    /** プロジェクト開始日文字列 */
    private Date projectStartDate;

    /** プロジェクト終了日文字列 */
    private Date projectEndDate;

    /** 備考 */
    private String note;

    /** 売上高 */
    private String sales;

    /** 売上原価 */
    private String costOfGoodsSold;

    /** 販管費 */
    private String sga;

    /** 本社配賦 */
    private String allocationOfCorpExpenses;

    /**
     * プロジェクト名を取得する。
     * @return プロジェクト名
     */
    public String getProjectName() {
        return projectName;
    }

    /**
     * プロジェクト名を設定する。
     * @param projectName プロジェクト名
     */
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    /**
     * プロジェクト種別を取得する。
     * @return プロジェクト種別
     */
    public String getProjectType() {
        return projectType;
    }

    /**
     * プロジェクト種別を設定する。
     * @param projectType プロジェクト種別
     */
    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    /**
     * プロジェクト分類を取得する。
     * @return プロジェクト分類
     */
    public String getProjectClass() {
        return projectClass;
    }

    /**
     * プロジェクト分類を設定する。
     * @param projectClass プロジェクト分類
     */
    public void setProjectClass(String projectClass) {
        this.projectClass = projectClass;
    }

    /**
     * プロジェクトマネージャーを取得する。
     * @return プロジェクトマネージャー
     */
    public String getProjectManager() {
        return projectManager;
    }

    /**
     * プロジェクトマネージャーを設定する。
     * @param projectManager プロジェクトマネージャー
     */
    public void setProjectManager(String projectManager) {
        this.projectManager = projectManager;
    }

    /**
     * プロジェクトリーダーを取得する。
     * @return プロジェクトリーダー
     */
    public String getProjectLeader() {
        return projectLeader;
    }

    /**
     * プロジェクトリーダーを設定する。
     * @param projectLeader プロジェクトリーダー
     */
    public void setProjectLeader(String projectLeader) {
        this.projectLeader = projectLeader;
    }

    /**
     * 顧客IDを取得する。
     * @return 顧客ID
     */
    public String getClientId() {
        return clientId;
    }

    /**
     * 顧客IDを設定する。
     * @param clientId 顧客ID
     */
    public void setClientId(String clientId) {
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
     * プロジェクト開始日を取得する。
     * @return プロジェクト開始日
     */
    public Date getProjectStartDate() {
        return projectStartDate;
    }

    /**
     * プロジェクト開始日を文字列で取得する。
     * @return プロジェクト開始日（文字列）
     */
    public String getProjectStartDateString() {
        String ret = null;
        if (projectStartDate != null){
            ret = FormatterUtil.format("dateTime", projectStartDate);
        }
        return ret;
    }

    /**
     * プロジェクト開始日を設定する。
     * @param projectStartDate プロジェクト開始日
     */
    public void setProjectStartDate(Date projectStartDate) {
        this.projectStartDate = projectStartDate;
    }

    /**
     * プロジェクト終了日を取得する。
     * @return プロジェクト終了日
     */
    public Date getProjectEndDate() {
        return projectEndDate;
    }

    /**
     * プロジェクト終了日を文字列で取得する。
     * @return プロジェクト終了日（文字列）
     */
    public String getProjectEndDateString() {
        String ret = null;
        if (projectStartDate != null){
            ret = FormatterUtil.format("dateTime", projectEndDate);
        }
        return ret;
    }

    /**
     * プロジェクト終了日を設定する。
     * @param projectEndDate プロジェクト終了日
     */
    public void setProjectEndDate(Date projectEndDate) {
        this.projectEndDate = projectEndDate;
    }

    /**
     * 備考を取得する。
     * @return 備考
     */
    public String getNote() {
        return note;
    }

    /**
     * 備考を設定する。
     * @param note 備考
     */
    public void setNote(String note) {
        this.note = note;
    }

    /**
     * 売上を取得する。
     * @return 売上
     */
    public String getSales() {
        return sales;
    }

    /**
     * 売上を設定する。
     * @param sales 売上
     */
    public void setSales(String sales) {
        this.sales = sales;
    }

    /**
     * 売上原価を取得する。
     * @return 売上原価
     */
    public String getCostOfGoodsSold() {
        return costOfGoodsSold;
    }

    /**
     * 売上原価を設定する。
     * @param costOfGoodsSold 売上原価
     */
    public void setCostOfGoodsSold(String costOfGoodsSold) {
        this.costOfGoodsSold = costOfGoodsSold;
    }

    /**
     * 販管費を取得する。
     * @return 販管費
     */
    public String getSga() {
        return sga;
    }

    /**
     * 販管費を設定する。
     * @param sga 販管費
     */
    public void setSga(String sga) {
        this.sga = sga;
    }

    /**
     * 本社配賦を取得する。
     * @return 本社配賦
     */
    public String getAllocationOfCorpExpenses() {
        return allocationOfCorpExpenses;
    }

    /**
     * 本社配賦を設定する。
     * @param allocationOfCorpExpenses 本社配賦
     */
    public void setAllocationOfCorpExpenses(String allocationOfCorpExpenses) {
        this.allocationOfCorpExpenses = allocationOfCorpExpenses;
    }
}
