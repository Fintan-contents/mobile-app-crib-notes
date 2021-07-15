package com.nablarch.example.app.web.dto;

import com.nablarch.example.app.entity.Project;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * プロジェクト情報のリストを持つクラス。
 *
 * @author Nabu Rakutaro
 */
public class ProjectListDto implements Serializable {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /** プロジェクトリスト */
    private List<Project> projectList = new ArrayList<>();

    /**
     * プロジェクトリストを取得する。
     *
     * @return プロジェクトリスト
     */
    public List<Project> getProjectList() {
        return projectList;
    }

    /**
     * プロジェクトリストを設定する。
     *
     * @param projectList プロジェクトリスト
     */
    public void setProjectList(List<Project> projectList) {
        this.projectList = projectList;
    }
}
