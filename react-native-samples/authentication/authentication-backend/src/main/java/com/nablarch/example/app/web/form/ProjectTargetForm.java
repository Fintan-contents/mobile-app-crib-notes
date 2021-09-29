package com.nablarch.example.app.web.form;

import java.io.Serializable;

import nablarch.core.validation.ee.Required;

/**
 * 処理対象パラメータ。
 *
 * @author Nabu Rakutaro
 */
public class ProjectTargetForm implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** プロジェクトID */
    @Required
    private String projectId;

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
     * @param projectId 設定するプロジェクトID
     *
     */
    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

}
