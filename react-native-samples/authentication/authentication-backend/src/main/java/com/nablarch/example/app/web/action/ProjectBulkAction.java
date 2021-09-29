package com.nablarch.example.app.web.action;

import java.util.List;
import java.util.Objects;

import com.nablarch.example.app.web.dto.ProjectListDto;
import com.nablarch.example.app.web.form.ProjectBulkForm;

import nablarch.common.dao.EntityList;
import nablarch.common.dao.UniversalDao;
import nablarch.common.web.interceptor.InjectForm;
import nablarch.common.web.session.SessionUtil;
import nablarch.common.web.token.OnDoubleSubmission;
import nablarch.core.beans.BeanUtil;
import nablarch.core.message.ApplicationException;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.interceptor.OnError;

import com.nablarch.example.app.entity.Project;
import com.nablarch.example.app.web.common.authentication.context.LoginUserPrincipal;
import com.nablarch.example.app.web.dto.ProjectSearchDto;
import com.nablarch.example.app.web.form.InnerProjectForm;
import com.nablarch.example.app.web.form.ProjectSearchForm;

/**
 * プロジェクト一括更新機能。
 *
 * @author Nabu Rakutaro
 */
public class ProjectBulkAction {

    /**
     * 一括更新更新初期画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse index(HttpRequest request, ExecutionContext context) {

        SessionUtil.delete(context, "projectSearchDto");
        SessionUtil.delete(context, "projectListDto");

        // 初期表示時の検索条件を設定
        ProjectSearchForm searchForm = new ProjectSearchForm();
        searchForm.setPageNumber("1");
        context.setRequestScopedVar("searchForm", searchForm);

        ProjectSearchDto projectSearchDto = BeanUtil.createAndCopy(ProjectSearchDto.class, searchForm);
        SessionUtil.put(context, "projectSearchDto", projectSearchDto);

        // 検索実行
        EntityList<Project> projectList = searchProject(projectSearchDto, context);
        ProjectListDto projectListDto = new ProjectListDto();
        projectListDto.setProjectList(projectList);
        SessionUtil.put(context, "projectListDto", projectListDto);
        context.setRequestScopedVar("bulkForm", projectListDto);

        return new HttpResponse("/WEB-INF/view/projectBulk/update.jsp");
    }

    /**
     * 検索結果を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectSearchForm.class, prefix = "searchForm", name = "searchForm")
    @OnError(type = ApplicationException.class, path = "forward://initialize")
    public HttpResponse list(HttpRequest request, ExecutionContext context) {

        ProjectSearchForm searchForm = context.getRequestScopedVar("searchForm");

        // 検索実行
        ProjectSearchDto projectSearchDto = BeanUtil.createAndCopy(ProjectSearchDto.class, searchForm);
        EntityList<Project> projectList = searchProject(projectSearchDto, context);
        ProjectListDto projectListDto = new ProjectListDto();
        projectListDto.setProjectList(projectList);
        SessionUtil.put(context, "projectListDto", projectListDto);
        context.setRequestScopedVar("bulkForm", projectListDto);

        // 検索条件を保存
        SessionUtil.put(context, "projectSearchDto", projectSearchDto);

        return new HttpResponse("/WEB-INF/view/projectBulk/update.jsp");
    }

    /**
     * 検索条件、実行コンテキスト、取得するページ番号を指定してプロジェクトのリストを取得する。
     * <p/>
     * 実行コンテキスト及びセッションから、ログインユーザの情報を取得して検索条件に追加する。
     *
     * @param searchCondition 検索条件
     * @param context 実行コンテキスト
     * @return プロジェクトのリスト
     */
    private EntityList<Project> searchProject(ProjectSearchDto searchCondition, ExecutionContext context) {
        LoginUserPrincipal userContext = SessionUtil.get(context, "userContext");
        searchCondition.setUserId(userContext.getUserId());

        return UniversalDao
                .page(searchCondition.getPageNumber())
                .per(20L)
                .findAllBySqlFile(Project.class, "SEARCH_PROJECT_FOR_BULK_UPDATE", searchCondition);
    }

    /**
     * 一括更新確認画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectBulkForm.class, prefix = "bulkForm", name = "bulkForm")
    @OnError(type = ApplicationException.class, path = "/WEB-INF/view/projectBulk/update.jsp")
    public HttpResponse confirmOfUpdate(HttpRequest request, ExecutionContext context) {

        ProjectBulkForm form = context.getRequestScopedVar("bulkForm");
        ProjectListDto dto = SessionUtil.get(context, "projectListDto");

        // 更新内容をセッションに上書き
        final List<InnerProjectForm> innerForms = form.getProjectList();
        dto.getProjectList()
           .forEach(project -> innerForms.stream()
                                         .filter(innerForm ->
                                                 Objects.equals(innerForm.getProjectId(), project.getProjectId()
                                                                                                 .toString()))
                                         .findFirst()
                                         .ifPresent(innerForm -> BeanUtil.copy(innerForm, project)));
        return new HttpResponse("/WEB-INF/view/projectBulk/confirmOfUpdate.jsp");
    }

    /**
     * 検索一覧入力画面へ戻る。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse backToList(HttpRequest request, ExecutionContext context) {

        context.setRequestScopedVar("bulkForm", SessionUtil.get(context, "projectListDto"));
        context.setRequestScopedVar("searchForm", SessionUtil.get(context, "projectSearchDto"));

        return new HttpResponse("/WEB-INF/view/projectBulk/update.jsp");
    }

    /**
     * 一括更新処理。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @OnDoubleSubmission
    public HttpResponse update(HttpRequest request, ExecutionContext context) {

        ProjectListDto projectListDto = SessionUtil.get(context, "projectListDto");
        projectListDto.getProjectList()
                      .forEach(UniversalDao::update);

        return new HttpResponse(303, "redirect://completeOfUpdate");
    }

    /**
     * 一括更新完了画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse completeOfUpdate(HttpRequest request, ExecutionContext context) {
        SessionUtil.delete(context, "projectSearchDto");
        SessionUtil.delete(context, "projectListDto");
        return new HttpResponse("/WEB-INF/view/projectBulk/completeOfUpdate.jsp");
    }

    /**
     * 一括更新画面を初期化する。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse initialize(HttpRequest request, ExecutionContext context) {
        SessionUtil.delete(context, "projectSearchDto");
        SessionUtil.delete(context, "projectListDto");

        return new HttpResponse("/WEB-INF/view/projectBulk/update.jsp");
    }
}
