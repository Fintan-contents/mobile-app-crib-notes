package com.nablarch.example.app.web.action;

import com.nablarch.example.app.entity.Client;
import com.nablarch.example.app.entity.Project;
import com.nablarch.example.app.web.common.authentication.context.LoginUserPrincipal;
import com.nablarch.example.app.web.common.code.ProjectSortKey;
import com.nablarch.example.app.web.common.file.TempFileUtil;
import com.nablarch.example.app.web.dto.ProjectDownloadDto;
import com.nablarch.example.app.web.dto.ProjectDto;
import com.nablarch.example.app.web.dto.ProjectSearchDto;
import com.nablarch.example.app.web.form.ProjectForm;
import com.nablarch.example.app.web.form.ProjectSearchForm;
import com.nablarch.example.app.web.form.ProjectTargetForm;
import com.nablarch.example.app.web.form.ProjectUpdateForm;

import nablarch.common.dao.DeferredEntityList;
import nablarch.common.dao.UniversalDao;
import nablarch.common.databind.ObjectMapper;
import nablarch.common.databind.ObjectMapperFactory;
import nablarch.common.web.download.FileResponse;
import nablarch.common.web.interceptor.InjectForm;
import nablarch.common.web.session.SessionUtil;
import nablarch.common.web.token.OnDoubleSubmission;
import nablarch.core.beans.BeanUtil;
import nablarch.core.message.ApplicationException;
import nablarch.core.message.MessageLevel;
import nablarch.core.message.MessageUtil;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.interceptor.OnError;

import java.nio.file.Path;
import java.util.List;

/**
 * プロジェクト検索、登録、更新、削除機能 。
 *
 * @author Nabu Rakutaro
 */
public class ProjectAction {

    /**
     * プロジェクト登録初期画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse newEntity(HttpRequest request, ExecutionContext context) {

        // 登録処理で使用するセッション情報を削除しておく。
        SessionUtil.delete(context, "project");
        return new HttpResponse("/WEB-INF/view/project/create.jsp");
    }

    /**
     * 登録情報確認画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectForm.class, prefix = "form")
    @OnError(type = ApplicationException.class, path = "/WEB-INF/view/project/create.jsp")
    public HttpResponse confirmOfCreate(HttpRequest request, ExecutionContext context) {

        ProjectForm form = context.getRequestScopedVar("form");
        if (form.hasClientId()) {
            if (!UniversalDao.exists(Client.class, "FIND_BY_CLIENT_ID",
                    new Object[] {Integer.parseInt(form.getClientId())})) {
                //補足：数値に対する自動フォーマット(自動的にカンマ編集される)を避けるため、Integerを明示的に文字列に変換している。
                throw new ApplicationException(
                        MessageUtil.createMessage(MessageLevel.ERROR, "errors.nothing.client",
                                Client.class.getSimpleName(),
                                form.getClientId()));
            }
        }

        Project project = BeanUtil.createAndCopy(Project.class, form);
        LoginUserPrincipal userContext = SessionUtil.get(context, "userContext");
        project.setUserId(userContext.getUserId());
        SessionUtil.put(context, "project", project);
        final ProjectProfit projectProfit = new ProjectProfit(
                project.getSales(),
                project.getCostOfGoodsSold(),
                project.getSga(),
                project.getAllocationOfCorpExpenses()
        );
        context.setRequestScopedVar("profit", projectProfit);
        return new HttpResponse("/WEB-INF/view/project/confirmOfCreate.jsp");
    }

    /**
     * 登録処理。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @OnDoubleSubmission
    public HttpResponse create(HttpRequest request, ExecutionContext context) {
        final Project project = SessionUtil.delete(context, "project");

        UniversalDao.insert(project);

        return new HttpResponse(303, "redirect://completeOfCreate");
    }

    /**
     * 登録完了画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse completeOfCreate(HttpRequest request, ExecutionContext context) {
        return new HttpResponse("/WEB-INF/view/project/completeOfCreate.jsp");
    }

    /**
     * 登録情報入力画面へ戻る。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse backToNew(HttpRequest request, ExecutionContext context) {
        Project project = SessionUtil.get(context, "project");
        ProjectDto dto = BeanUtil.createAndCopy(ProjectDto.class, project);

        if (dto.hasClientId()) {
            // 入力画面に戻る際に顧客データが見つからない場合はデータ不整合なので、
            // NoDataException を発生させてシステムエラーとする。
            // ※ example アプリは顧客データのメンテナンス機能がないのでこの対応とするが、
            //   通常業務で削除されることが想定される場合はシステムエラーとはせずにユーザーへの通知が必要。
            Client client = UniversalDao.findById(Client.class, dto.getClientId());
            dto.setClientName(client.getClientName());
        }

        context.setRequestScopedVar("form", dto);

        return new HttpResponse("/WEB-INF/view/project/create.jsp");
    }

    /**
     * 検索一覧初期画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse index(HttpRequest request, ExecutionContext context) {

        // 初期表示時点でのページ番号とソートキーを設定する
        ProjectSearchForm searchForm = new ProjectSearchForm();
        searchForm.setSortKey(ProjectSortKey.ID.getCode());
        searchForm.setPageNumber("1");
        context.setRequestScopedVar("searchForm", searchForm);

        // 初期表示するページ番号、ソート順を検索条件として指定する
        ProjectSearchDto searchCondition = BeanUtil.createAndCopy(ProjectSearchDto.class, searchForm);
        List<Project> searchList = searchProject(searchCondition, context);
        context.setRequestScopedVar("searchResult", searchList);

        return new HttpResponse("/WEB-INF/view/project/index.jsp");
    }

    /**
     * 検索結果を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectSearchForm.class, prefix = "searchForm", name = "searchForm")
    @OnError(type = ApplicationException.class, path = "/WEB-INF/view/project/index.jsp")
    public HttpResponse list(HttpRequest request, ExecutionContext context) {

        ProjectSearchForm searchForm = context.getRequestScopedVar("searchForm");
        ProjectSearchDto searchCondition = BeanUtil.createAndCopy(ProjectSearchDto.class, searchForm);

        List<Project> searchList = searchProject(searchCondition, context);
        context.setRequestScopedVar("searchResult", searchList);

        return new HttpResponse("/WEB-INF/view/project/index.jsp");
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
    private List<Project> searchProject(ProjectSearchDto searchCondition,
            ExecutionContext context) {

        LoginUserPrincipal userContext = SessionUtil.get(context, "userContext");
        searchCondition.setUserId(userContext.getUserId());

        return UniversalDao
                .page(searchCondition.getPageNumber())
                .per(20L)
                .findAllBySqlFile(Project.class, "SEARCH_PROJECT", searchCondition);
    }

    /**
     * 検索結果CSVファイルをダウンロードする。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectSearchForm.class, prefix = "searchForm", name = "searchForm")
    @OnError(type = ApplicationException.class, path = "/WEB-INF/view/project/index.jsp")
    public HttpResponse download(HttpRequest request, ExecutionContext context) {

        ProjectSearchForm searchForm = context.getRequestScopedVar("searchForm");
        ProjectSearchDto searchCondition = BeanUtil.createAndCopy(ProjectSearchDto.class, searchForm);
        LoginUserPrincipal userContext = SessionUtil.get(context, "userContext");
        searchCondition.setUserId(userContext.getUserId());

        final Path path = TempFileUtil.createTempFile();
        try (DeferredEntityList<ProjectDownloadDto> searchList = (DeferredEntityList<ProjectDownloadDto>) UniversalDao
                .defer()
                .findAllBySqlFile(ProjectDownloadDto.class, "SEARCH_PROJECT", searchCondition);
             ObjectMapper<ProjectDownloadDto> mapper = ObjectMapperFactory.create(ProjectDownloadDto.class,
                     TempFileUtil.newOutputStream(path))) {

            for (ProjectDownloadDto dto : searchList) {
                mapper.write(dto);
            }
        }

        FileResponse response = new FileResponse(path.toFile(), true);
        response.setContentType("text/csv; charset=Shift_JIS");
        response.setContentDisposition("プロジェクト一覧.csv");

        return response;
    }

    /**
     * プロジェクト詳細画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectTargetForm.class)
    public HttpResponse show(HttpRequest request, ExecutionContext context) {
        ProjectTargetForm targetForm = context.getRequestScopedVar("form");
        context.setRequestScopedVar("projectId", targetForm.getProjectId());
        LoginUserPrincipal userContext = SessionUtil.get(context, "userContext");

        ProjectDto dto = UniversalDao.findBySqlFile(ProjectDto.class, "FIND_BY_PROJECT",
                new Object[] {targetForm.getProjectId(), userContext.getUserId()});

        // 出力情報をリクエストスコープにセット
        context.setRequestScopedVar("form", dto);
        context.setRequestScopedVar("profit", new ProjectProfit(
                dto.getSales(),
                dto.getCostOfGoodsSold(),
                dto.getSga(),
                dto.getAllocationOfCorpExpenses()
        ));

        return new HttpResponse("/WEB-INF/view/project/detail.jsp");
    }

    /**
     * 更新初期画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectTargetForm.class)
    public HttpResponse edit(HttpRequest request, ExecutionContext context) {

        // 更新処理で使用するセッション情報を削除しておく。
        SessionUtil.delete(context, "project");

        ProjectTargetForm targetForm = context.getRequestScopedVar("form");
        LoginUserPrincipal userContext = SessionUtil.get(context, "userContext");

        ProjectDto dto = UniversalDao.findBySqlFile(ProjectDto.class, "FIND_BY_PROJECT",
                new Object[] {targetForm.getProjectId(), userContext.getUserId()});

        // 出力情報をリクエストスコープにセット
        context.setRequestScopedVar("form", dto);

        SessionUtil.put(context, "project", BeanUtil.createAndCopy(Project.class, dto));

        return new HttpResponse("/WEB-INF/view/project/update.jsp");
    }

    /**
     * 更新確認画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @InjectForm(form = ProjectUpdateForm.class, prefix = "form")
    @OnError(type = ApplicationException.class, path = "/WEB-INF/view/project/update.jsp")
    public HttpResponse confirmOfUpdate(HttpRequest request, ExecutionContext context) {
        ProjectUpdateForm form = context.getRequestScopedVar("form");

        if (form.hasClientId()) {
            if (!UniversalDao.exists(Client.class, "FIND_BY_CLIENT_ID",
                    new Object[] {Integer.parseInt(form.getClientId())})) {
                //補足：数値に対する自動フォーマット(自動的にカンマ編集される)を避けるため、Integerを明示的に文字列に変換している。
                throw new ApplicationException(
                        MessageUtil.createMessage(MessageLevel.ERROR,
                                "errors.nothing.client", form.getClientId()));
            }
        }

        Project project = SessionUtil.get(context, "project");
        BeanUtil.copy(form, project);

        // 出力情報をリクエストスコープにセット
        context.setRequestScopedVar("form", BeanUtil.createAndCopy(ProjectDto.class, form));
        context.setRequestScopedVar("profit", new ProjectProfit(
                project.getSales(),
                project.getCostOfGoodsSold(),
                project.getSga(),
                project.getAllocationOfCorpExpenses()
        ));

        return new HttpResponse("/WEB-INF/view/project/confirmOfUpdate.jsp");
    }

    /**
     * 更新画面へ戻る。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse backToEdit(HttpRequest request, ExecutionContext context) {

        Project project = SessionUtil.get(context, "project");

        ProjectDto dto = BeanUtil.createAndCopy(ProjectDto.class, project);

        if (dto.hasClientId()) {
            // 入力画面に戻る際に顧客データが見つからない場合はデータ不整合なので、
            // NoDataException を発生させてシステムエラーとする。
            // ※ example アプリは顧客データのメンテナンス機能がないのでこの対応とするが、
            //   通常業務で削除されることが想定される場合はシステムエラーとはせずにユーザーへの通知が必要。
            Client client = UniversalDao.findById(Client.class, dto.getClientId());
            dto.setClientName(client.getClientName());
        }
        context.setRequestScopedVar("form", dto);

        return new HttpResponse("/WEB-INF/view/project/update.jsp");
    }

    /**
     * 更新処理。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @OnDoubleSubmission
    public HttpResponse update(HttpRequest request, ExecutionContext context) {
        final Project targetProject = SessionUtil.delete(context, "project");
        UniversalDao.update(targetProject);

        return new HttpResponse(303, "redirect://completeOfUpdate");
    }

    /**
     * 更新完了画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse completeOfUpdate(HttpRequest request, ExecutionContext context) {
        return new HttpResponse("/WEB-INF/view/project/completeOfUpdate.jsp");
    }

    /**
     * 削除処理。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @OnDoubleSubmission
    public HttpResponse delete(HttpRequest request, ExecutionContext context) {
        final Project project = SessionUtil.delete(context, "project");
        UniversalDao.delete(project);

        return new HttpResponse(303, "redirect://completeOfDelete");
    }

    /**
     * 削除完了画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse completeOfDelete(HttpRequest request, ExecutionContext context) {
        return new HttpResponse("/WEB-INF/view/project/completeOfDelete.jsp");
    }
}
