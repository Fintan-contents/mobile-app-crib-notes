package com.nablarch.example.app.web.form;

import javax.validation.Valid;
import java.io.Serializable;
import java.util.ArrayList;

/**
 * プロジェクト一括更新フォーム
 *
 * @author Nabu Rakutaro
 */
public class ProjectBulkForm implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** プロジェクト情報のリスト */
    @Valid
    private ArrayList<InnerProjectForm> projectList = new ArrayList<>();

    /**
     * プロジェクト情報のリストを返す。
     *
     * @return プロジェクト情報のリスト
     */
    public ArrayList<InnerProjectForm> getProjectList() {
        return projectList;
    }

    /**
     * プロジェクト情報のリストを設定する。
     *
     * @param projectList 設定したいプロジェクト情報のリスト
     */
    public void setProjectList(ArrayList<InnerProjectForm> projectList) {
        this.projectList = projectList;
    }
}
