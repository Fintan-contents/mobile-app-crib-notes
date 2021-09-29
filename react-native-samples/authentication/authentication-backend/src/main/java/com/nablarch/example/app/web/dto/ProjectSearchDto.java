package com.nablarch.example.app.web.dto;


import java.io.Serializable;
import java.util.Date;

/**
 * プロジェクト検索のDto
 *
 * @author Nabu Rakutaro
 */
public class ProjectSearchDto implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** プロジェクト名 */
    private String projectName;

    /** プロジェクト種別 */
    private String projectType;

    /** プロジェクト分類 */
    private String[] projectClass;

    /** プロジェクト開始日付(FROM） */
    private Date projectStartDateBegin;

    /** プロジェクト開始日付(TO） */
    private Date projectStartDateEnd;

    /** プロジェクト終了日付（FROM) */
    private Date projectEndDateBegin;

    /** プロジェクト終了日付（TO) */
    private Date projectEndDateEnd;

    /** 顧客ID */
    private Integer clientId;

    /** 顧客名 */
    private String clientName;

    /** ユーザID */
    private Integer userId;

    /** ソートID */
    private String sortId;

    /** 並び順項目 */
    private String sortKey;

    /** 並び順 */
    private String sortDir;

    /** ページ番号 */
    private Integer pageNumber;

    /**
     * projectNameを返却する。
     *
     * @return projectName
     */
    public String getProjectName() {
        return projectName;
    }

    /**
     * projectNameを設定する。
     * @param projectName プロジェクト名
     */
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    /**
     * projectTypeを返却する。
     * @return projectType
     */
    public String getProjectType() {
        return projectType;
    }

    /**
     * projectTypeを設定する。
     * @param projectType プロジェクト種別
     */
    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    /**
     * projectClassを返却する。
     * @return projectClass
     */
    public String[] getProjectClass() {
        return projectClass;
    }

    /**
     * projectClassを設定する。
     * @param projectClass プロジェクト分類
     */
    public void setProjectClass(String[] projectClass) {
        this.projectClass = projectClass;
    }

    /**
     * projectStartDateBeginを返却する。
     * @return projectStartDateBegin
     */
    public Date getProjectStartDateBegin() {
        return projectStartDateBegin;
    }

    /**
     * projectStartDateBeginを設定する。
     * @param projectStartDateBegin プロジェクト開始日（From）
     */
    public void setProjectStartDateBegin(Date projectStartDateBegin) {
        this.projectStartDateBegin = projectStartDateBegin;
    }

    /**
     * projectStartDateEndを返却する。
     * @return projectStartDateEnd
     */
    public Date getProjectStartDateEnd() {
        return projectStartDateEnd;
    }

    /**
     * projectStartDateEndを設定する。
     * @param projectStartDateEnd プロジェクト開始日（To）
     */
    public void setProjectStartDateEnd(Date projectStartDateEnd) {
        this.projectStartDateEnd = projectStartDateEnd;
    }

    /**
     * projectEndDateBeginを返却する。
     * @return projectEndDateBegin
     */
    public Date getProjectEndDateBegin() {
        return projectEndDateBegin;
    }

    /**
     * projectEndDateBeginを設定する。
     * @param projectEndDateBegin プロジェクト終了日（From)
     */
    public void setProjectEndDateBegin(Date projectEndDateBegin) {
        this.projectEndDateBegin = projectEndDateBegin;
    }

    /**
     * projectEndDateEndを返却する。
     * @return projectEndDateEnd
     */
    public Date getProjectEndDateEnd() {
        return projectEndDateEnd;
    }

    /**
     * projectEndDateEndを設定する。
     * @param projectEndDateEnd プロジェクト終了日（To）
     */
    public void setProjectEndDateEnd(Date projectEndDateEnd) {
        this.projectEndDateEnd = projectEndDateEnd;
    }

    /**
     * clientIdを返却する。
     * @return clientId
     */
    public Integer getClientId() {
        return clientId;
    }

    /**
     * clientIdを設定する。
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
     * ユーザIDを返却する。
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
     * sortIdを返却する。
     * @return sortId
     */
    public String getSortId() {
        return sortId;
    }

    /**
     * sortIdを設定する。
     * @param sortId ソートID
     */
    public void setSortId(String sortId) {
        this.sortId = sortId;
    }

    /**
     * 並び順項目を取得する。
     * @return 並び順項目
     */
    public String getSortKey() {
        return sortKey;
    }

    /**
     * 並び順項目を設定する。
     * @param sortKey 並び順項目
     */
    public void setSortKey(String sortKey) {
        this.sortKey = sortKey;
    }

    /**
     * 並び順を取得する。
     * @return 並び順
     */
    public String getSortDir() {
        return sortDir;
    }

    /**
     * 並び順を設定する。
     * @param sortDir 並び順
     */
    public void setSortDir(String sortDir) {
        this.sortDir = sortDir;
    }

    /**
     * pageNumberを返却する。
     * @return ページ番号
     */
    public Integer getPageNumber() {
        return pageNumber;
    }

    /**
     * pageNumber設定する。
     * @param pageNumber ページ番号
     */
    public void setPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
    }
}
