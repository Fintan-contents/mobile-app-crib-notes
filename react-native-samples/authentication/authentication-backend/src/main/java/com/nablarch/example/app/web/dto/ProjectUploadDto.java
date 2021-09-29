package com.nablarch.example.app.web.dto;

import java.io.Serializable;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.constraints.AssertTrue;

import nablarch.common.databind.LineNumber;
import nablarch.common.databind.csv.Csv;
import nablarch.common.databind.csv.Csv.CsvType;
import nablarch.common.databind.csv.CsvDataBindConfig.QuoteMode;
import nablarch.common.databind.csv.CsvFormat;
import nablarch.core.beans.CopyOption;
import nablarch.core.util.StringUtil;
import nablarch.core.validation.ee.Domain;
import nablarch.core.validation.ee.Required;

import com.nablarch.example.app.entity.core.validation.validator.DateRangeValidator;

/**
 * CSV形式でアップロードされたプロジェクト情報の一行分のデータをバインドするBeanクラス。
 *
 * @author Nabu Rakutaro
 */
@Csv(headers = {
        "プロジェクト名", "プロジェクト種別", "プロジェクト分類",
        "プロジェクトマネージャー", "プロジェクトリーダー", "顧客ID", "顧客名",
        "プロジェクト開始日", "プロジェクト終了日", "備考", "売上高",
        "売上原価", "販管費", "本社配賦" },
        properties = { "projectName", "projectType", "projectClass",
                "projectManager", "projectLeader", "clientId",
                "clientName", "projectStartDate", "projectEndDate",
                "note", "sales", "costOfGoodsSold", "sga", "allocationOfCorpExpenses" },
        type = CsvType.CUSTOM)
@CsvFormat(charset = "Shift_JIS", fieldSeparator = ',',
        ignoreEmptyLine = true, lineSeparator = "\r\n", quote = '"',
        quoteMode = QuoteMode.NORMAL, requiredHeader = true, emptyToNull = true)
public class ProjectUploadDto implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** 数値判定用の正規表現 */
    private static final Pattern NUMERIC_PATTERN = Pattern.compile("^[-]?[0-9]+$");

    /** プロジェクト名 */
    @Required(message = "{nablarch.core.validation.ee.Required.upload}")
    @Domain("projectName")
    private String projectName;

    /** プロジェクト種別 */
    @Required(message = "{nablarch.core.validation.ee.Required.upload}")
    @Domain("projectType")
    private String projectType;

    /** プロジェクト分類 */
    @Required(message = "{nablarch.core.validation.ee.Required.upload}")
    @Domain("projectClass")
    private String projectClass;

    /** プロジェクトマネージャー名 */
    @Domain("userName")
    private String projectManager;

    /** プロジェクトリーダー名 */
    @Domain("userName")
    private String projectLeader;

    /** 顧客ID */
    @Domain("id")
    @Required
    private String clientId;

    /** 顧客名 */
    @Domain("clientName")
    private String clientName;

    /** プロジェクト開始日文字列 */
    @Domain("dateWithSlash")
    @CopyOption(datePattern = "yyyy/MM/dd")
    private String projectStartDate;

    /** プロジェクト終了日文字列 */
    @Domain("dateWithSlash")
    @CopyOption(datePattern = "yyyy/MM/dd")
    private String projectEndDate;

    /** 備考 */
    @Domain("note")
    private String note;

    /** 売上高 */
    @Domain("amountOfMoney")
    private String sales;

    /** 売上原価 */
    @Domain("amountOfMoney")
    private String costOfGoodsSold;

    /** 販管費 */
    @Domain("amountOfMoney")
    private String sga;

    /** 本社配賦 */
    @Domain("amountOfMoney")
    private String allocationOfCorpExpenses;

    /** 行数 */
    private Long lineNumber;

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
    public String getProjectStartDate() {
        return projectStartDate;
    }

    /**
     * プロジェクト開始日を設定する。
     * @param projectStartDate プロジェクト開始日
     */
    public void setProjectStartDate(String projectStartDate) {
        this.projectStartDate = projectStartDate;
    }

    /**
     * プロジェクト終了日を取得する。
     * @return プロジェクト終了日
     */
    public String getProjectEndDate() {
        return projectEndDate;
    }

    /**
     * プロジェクト終了日を設定する。
     * @param projectEndDate プロジェクト終了日
     */
    public void setProjectEndDate(String projectEndDate) {
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

    /**
     * 行数を取得する。
     * @return 行数
     */
    @LineNumber
    public Long getLineNumber() {
        return lineNumber;
    }

    /**
     * 行数を設定する。
     * @param lineNumber 行数
     */
    public void setLineNumber(Long lineNumber) {
        this.lineNumber = lineNumber;
    }

    /**
     * 顧客IDが有効かを判定する。
     * 顧客IDが空でなく、数値である場合に有効。
     *
     * @return 顧客IDが有効ならtrue
     */
    public boolean hasValidClientId() {
        return StringUtil.hasValue(clientId) && isNumber(clientId);
    }

    /**
     * 文字列が数値かどうか判定する。
     *
     * @param numberStr 判定対象文字列
     * @return 文字列が数値ならtrue
     */
    private boolean isNumber(String numberStr) {
        Matcher matcher = NUMERIC_PATTERN.matcher(numberStr);
        return matcher.find();
    }

    /**
     * プロジェクト期間（プロジェクト開始日～プロジェクト終了日）正しく設定されているかを判定します。
     * 開始日に終了日より後の日付が設定されていた場合はプロジェクト期間が正しくないと判定します。
     * それ以外の場合は問題なしとします。
     *
     * @return 開始日に終了日より後の日付が設定されていた場合は false それ以外（開始日、終了日の両方又はいずれかが未定の場合も含む）は true
     */
    @AssertTrue(message = "{com.nablarch.example.app.entity.core.validation.validator.DateRangeValidator.message}")
    private boolean isValidProjectPeriod() {
        return new DateRangeValidator(projectStartDate, projectEndDate).isValid();
    }
}
