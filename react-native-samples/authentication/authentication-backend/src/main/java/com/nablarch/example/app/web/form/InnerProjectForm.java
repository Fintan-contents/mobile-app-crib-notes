package com.nablarch.example.app.web.form;

import java.io.Serializable;

import javax.validation.constraints.AssertTrue;

import com.nablarch.example.app.entity.core.validation.validator.DateRangeValidator;
import nablarch.core.validation.ee.Domain;
import nablarch.core.validation.ee.Required;

/**
 * プロジェクト一覧検索更新フォームの一行分のフォーム。
 *
 * @author Nabu Rakutaro
 */
public class InnerProjectForm implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** プロジェクトID */
    @Required
    @Domain("id")
    private String projectId;

    /** プロジェクト名 */
    @Required
    @Domain("projectName")
    private String projectName;

    /** プロジェクト種別 */
    @Required
    @Domain("projectType")
    private String projectType;

    /** プロジェクト開始日文字列 */
    @Domain("date")
    private String projectStartDate;

    /** プロジェクト終了日文字列 */
    @Domain("date")
    private String projectEndDate;

    /**
     * プロジェクトIDを取得する。
     *
     * @return プロジェクトID
     */
    public String getProjectId() {
        return projectId;
    }

    /**
     * プロジェクトIDを設定する。
     *
     * @param projectId プロジェクトID
     */
    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    /**
     * プロジェクト名を取得する。
     *
     * @return プロジェクト名
     */
    public String getProjectName() {
        return projectName;
    }

    /**
     * プロジェクト種別を取得する。
     *
     * @return プロジェクト種別
     */
    public String getProjectType() {
        return projectType;
    }

    /**
     * プロジェクト開始日文字列を取得する。
     *
     * @return プロジェクト開始日文字列
     */
    public String getProjectStartDate() {
        return projectStartDate;
    }

    /**
     * プロジェクト終了日文字列を取得する。
     *
     * @return プロジェクト終了日文字列
     */
    public String getProjectEndDate() {
        return projectEndDate;
    }

    /**
     * プロジェクト名を設定する。
     *
     * @param projectName 設定するプロジェクト名
     *
     */
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    /**
     * プロジェクト種別を設定する。
     *
     * @param projectType 設定するプロジェクト種別
     */
    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    /**
     * プロジェクト開始日文字列を設定する。
     *
     * @param projectStartDate 設定するプロジェクト開始日文字列
     *
     */
    public void setProjectStartDate(String projectStartDate) {
        this.projectStartDate = projectStartDate;
    }

    /**
     * プロジェクト終了日文字列を設定する。
     *
     * @param projectEndDate 設定するプロジェクト終了日文字列
     *
     */
    public void setProjectEndDate(String projectEndDate) {
        this.projectEndDate = projectEndDate;
    }

    /**
     * プロジェクト期間（プロジェクト開始日～プロジェクト終了日）正しく設定されているかを判定する。
     * 開始日に終了日より後の日付が設定されていた場合はプロジェクト期間が正しくないと判定する。
     * それ以外の場合は問題なしとする。
     *
     * @return 開始日に終了日より後の日付が設定されていた場合は {@code false}
     * それ以外（開始日、終了日の両方又はいずれかが未定の場合も含む）は {@code true}
     */
    @AssertTrue(message = "{com.nablarch.example.app.entity.core.validation.validator.DateRangeValidator.message}")
    private boolean isValidProjectPeriod() {
        return new DateRangeValidator(projectStartDate, projectEndDate).isValid();
    }
}
