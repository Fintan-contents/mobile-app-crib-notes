package com.nablarch.example.app.web.dto;

import java.io.Serializable;
import java.util.Date;

/**
 * プロジェクト情報のDto
 *
 * @author Nabu Rakutaro
 */
public class ProjectDto implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** プロジェクトID */
    private Integer projectId;

    /** プロジェクト名 */
    private String projectName;

    /** プロジェクト種別 */
    private String projectType;

    /** プロジェクト分類 */
    private String projectClass;

    /** プロジェクト開始日付 */
    private Date projectStartDate;

    /** プロジェクト終了日付 */
    private Date projectEndDate;

    /** 顧客ID */
    private Integer clientId;

    /** 顧客名 */
    private String clientName;

    /** プロジェクトマネージャー */
    private String projectManager;

    /** プロジェクトリーダー */
    private String projectLeader;

    /** ユーザID */
    private Integer userId;

    /** 備考 */
    private String note;

    /** 売上高 */
    private Integer sales;

    /** 売上原価 */
    private Integer costOfGoodsSold;

    /** 販管費 */
    private Integer sga;

    /** 本社配賦 */
    private Integer allocationOfCorpExpenses;

    /** バージョン番号 */
    private Long version;

    /**
     * プロジェクトIDを取得する。
     * @return プロジェクトID
     */
    public Integer getProjectId() {
        return projectId;
    }

    /**
     * プロジェクトIDを設定する。
     * @param projectId プロジェクトID
     */
    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

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
     * プロジェクト開始日付を取得する。
     * @return プロジェクト開始日付
     */
    public Date getProjectStartDate() {
        return projectStartDate;
    }

    /**
     * プロジェクト開始日付を設定する。
     * @param projectStartDate プロジェクト開始日付
     */
    public void setProjectStartDate(Date projectStartDate) {
        this.projectStartDate = projectStartDate;
    }

    /**
     * プロジェクト終了日付を取得する。
     * @return プロジェクト終了日付
     */
    public Date getProjectEndDate() {
        return projectEndDate;
    }

    /**
     * プロジェクト終了日付を設定する。
     * @param projectEndDate プロジェクト終了日付
     */
    public void setProjectEndDate(Date projectEndDate) {
        this.projectEndDate = projectEndDate;
    }

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
     * ユーザIDを取得する。
     * @return ユーザID
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * ユーザIDを設定する。
     * @param userId ユーザID
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
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
     * 売上高を取得する。
     * @return 売上高
     */
    public Integer getSales() {
        return sales;
    }

    /**
     * 売上高を設定する。
     * @param sales 売上高
     */
    public void setSales(Integer sales) {
        this.sales = sales;
    }

    /**
     * 売上原価を取得する。
     * @return 売上原価
     */
    public Integer getCostOfGoodsSold() {
        return costOfGoodsSold;
    }

    /**
     * 売上原価を設定する。
     * @param costOfGoodsSold 売上原価
     */
    public void setCostOfGoodsSold(Integer costOfGoodsSold) {
        this.costOfGoodsSold = costOfGoodsSold;
    }

    /**
     * 販管費を取得する。
     * @return 販管費
     */
    public Integer getSga() {
        return sga;
    }

    /**
     * 販管費を設定する。
     * @param sga 販管費
     */
    public void setSga(Integer sga) {
        this.sga = sga;
    }

    /**
     * 本社配賦を取得する。
     * @return 本社配賦
     */
    public Integer getAllocationOfCorpExpenses() {
        return allocationOfCorpExpenses;
    }

    /**
     * 本社配賦を設定する。
     * @param allocationOfCorpExpenses 本社配賦
     */
    public void setAllocationOfCorpExpenses(Integer allocationOfCorpExpenses) {
        this.allocationOfCorpExpenses = allocationOfCorpExpenses;
    }

    /**
     * バージョン番号を取得する。
     * @return バージョン番号
     */
    public Long getVersion() {
        return version;
    }

    /**
     * バージョン番号を設定する。
     * @param version バージョン番号
     */
    public void setVersion(Long version) {
        this.version = version;
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
     * 顧客IDを保持しているか否かを返す。
     * @return trueの場合は、顧客IDを保持している。
     */
    public boolean hasClientId() {
        return clientId != null;
    }
}
