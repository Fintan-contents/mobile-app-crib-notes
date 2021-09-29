package com.nablarch.example.app.web.action;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import nablarch.common.dao.UniversalDao;
import nablarch.common.databind.InvalidDataFormatException;
import nablarch.common.databind.ObjectMapper;
import nablarch.common.databind.ObjectMapperFactory;
import nablarch.common.web.session.SessionUtil;
import nablarch.common.web.token.OnDoubleSubmission;
import nablarch.core.beans.BeanUtil;
import nablarch.core.date.SystemTimeUtil;
import nablarch.core.message.ApplicationException;
import nablarch.core.message.Message;
import nablarch.core.message.MessageLevel;
import nablarch.core.message.MessageUtil;
import nablarch.core.util.DateUtil;
import nablarch.core.validation.ee.ValidatorUtil;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.interceptor.OnError;
import nablarch.fw.web.upload.PartInfo;
import nablarch.fw.web.upload.util.UploadHelper;

import com.nablarch.example.app.entity.Client;
import com.nablarch.example.app.entity.Project;
import com.nablarch.example.app.web.common.authentication.context.LoginUserPrincipal;
import com.nablarch.example.app.web.dto.ProjectUploadDto;

/**
 * プロジェクトファイルアップロード一括登録機能。
 *
 * @author Nabu Rakutaro
 */
public class ProjectUploadAction {

    /**
     * 一括登録初期画面の表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse index(HttpRequest request, ExecutionContext context) {
        return new HttpResponse("/WEB-INF/view/projectUpload/create.jsp");
    }

    /**
     * ファイルをアップロードし、ファイル内容どおりプロジェクトを一括登録する。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @OnDoubleSubmission
    @OnError(type = ApplicationException.class, path = "/WEB-INF/view/projectUpload/create.jsp")
    public HttpResponse upload(HttpRequest request, ExecutionContext context) {

        // アップロードファイルの取得
        List<PartInfo> partInfoList = request.getPart("uploadFile");
        if (partInfoList.isEmpty()) {
            throw new ApplicationException(MessageUtil.createMessage(MessageLevel.ERROR, "errors.upload"));
        }
        PartInfo partInfo = partInfoList.get(0);

        LoginUserPrincipal userContext = SessionUtil.get(context, "userContext");

        List<Project> projects = readFileAndValidate(partInfo, userContext);

        // DBへ一括登録する
        insertProjects(projects);

        // 完了メッセージの追加
        context.setRequestScopedVar("uploadProjectSize", projects.size());

        // ファイルの保存
        saveFile(partInfo);

        return new HttpResponse("/WEB-INF/view/projectUpload/create.jsp");
    }

    /**
     * アップロードファイルの読み込みとバリデーションを行う。
     * @param partInfo アップロードファイルの情報
     * @param userContext ユーザ情報
     * @return 読み込んだファイルの内容
     */
    private List<Project> readFileAndValidate(final PartInfo partInfo, final LoginUserPrincipal userContext) {
        List<Message> messages = new ArrayList<>();
        List<Project> projects = new ArrayList<>();

        // ファイルの内容をBeanにバインドしてバリデーションする
        try (final ObjectMapper<ProjectUploadDto> mapper
                     = ObjectMapperFactory.create(ProjectUploadDto.class, partInfo.getInputStream())) {
            ProjectUploadDto projectUploadDto;

            while ((projectUploadDto = mapper.read()) != null) {

                // 検証して結果メッセージを設定する
                messages.addAll(validate(projectUploadDto));

                // エンティティを作成
                projects.add(createProject(projectUploadDto, userContext.getUserId()));
            }
        } catch (InvalidDataFormatException e) {
            // ファイルフォーマットが不正な行がある場合はその時点で解析終了
            messages.add(MessageUtil.createMessage(MessageLevel.ERROR, "errors.upload.format", e.getLineNumber()));
        }

        // 一件でもエラーがある場合はデータベースに登録しない
        if (!messages.isEmpty()) {
            throw new ApplicationException(messages);
        }
        return projects;
    }

    /**
     * ファイルを保存する。
     *
     * @param partInfo アップロードファイルの情報
     */
    private void saveFile(final PartInfo partInfo) {
        String fileName = generateUniqueFileName(partInfo.getFileName());
        UploadHelper helper = new UploadHelper(partInfo);
        helper.moveFileTo("uploadFiles", fileName);
    }

    /**
     * プロジェクト情報をバリデーションして、結果をメッセージリストに格納する。
     *
     * @param projectUploadDto CSVから生成したプロジェクト情報Bean
     * @return messages         バリデーション結果のメッセージのリスト
     */
    private List<Message> validate(final ProjectUploadDto projectUploadDto) {

        List<Message> messages = new ArrayList<>();

        // 単項目バリデーション。Dtoに定義したアノテーションを元にBean Validationを実行する
        try {
            ValidatorUtil.validate(projectUploadDto);
        } catch (ApplicationException e) {
            messages.addAll(e.getMessages()
                             .stream()
                             .map(message -> MessageUtil.createMessage(MessageLevel.ERROR,
                                     "errors.upload.validate", projectUploadDto.getLineNumber(), message))
                             .collect(Collectors.toList()));
        }

        // 顧客存在チェック
        if (!existsClient(projectUploadDto)) {
            messages.add(MessageUtil.createMessage(MessageLevel.ERROR,
                    "errors.upload.client", projectUploadDto.getLineNumber()));
        }

        return messages;
    }

    /**
     * 対象の顧客が存在するかどうかを返す。
     * 顧客IDが数値でない場合はチェックしない（trueを返す)。
     *
     * @param projectUploadDto プロジェクト情報
     * @return 存在する場合true
     */
    private boolean existsClient(ProjectUploadDto projectUploadDto) {
        if (!projectUploadDto.hasValidClientId()) {
            // 顧客IDが正しくない場合はチェックしない。
            return true;
        }
        return UniversalDao.exists(Client.class, "FIND_BY_CLIENT_ID",
                new Object[] {Integer.valueOf(projectUploadDto.getClientId())});
    }

    /**
     * ファイルを解析して得たプロジェクト情報とユーザIDを元に、プロジェクトエンティティを作成する。
     *
     * @param projectUploadDto ファイルを解析して得たプロジェクト情報
     * @param userId 登録者ID
     * @return 作成したプロジェクトエンティティ
     */
    private Project createProject(ProjectUploadDto projectUploadDto, Integer userId) {
        Project project = BeanUtil.createAndCopy(Project.class, projectUploadDto);
        project.setUserId(userId);
        return project;
    }

    /**
     * 複数のプロジェクトエンティティを一括でデータベースに登録する。
     *
     * @param projects 検証済みのプロジェクトリスト
     */
    private void insertProjects(List<Project> projects) {

        List<Project> insertProjects = new ArrayList<>();

        for (Project project : projects) {
            insertProjects.add(project);
            // 100件ごとにbutchInsertする
            if (insertProjects.size() >= 100) {
                UniversalDao.batchInsert(insertProjects);
                insertProjects.clear();
            }
        }

        if (!insertProjects.isEmpty()) {
            UniversalDao.batchInsert(insertProjects);
        }
    }

    /**
     * 一意なファイル名を生成する。
     * 本システムでは同時に同名のファイルがアップロードされることはないというシステム運用のもと、
     * ”ファイル名+アップロード時刻.csv” というファイル名を生成している。
     *
     * @param fileName ファイル名
     * @return 一意なファイル名
     */
    private String generateUniqueFileName(String fileName) {
        String fileNameWithoutExtension;
        String fileExtension = "";

        int lastDotPos = fileName.lastIndexOf('.');
        if (lastDotPos == -1 || lastDotPos == 0) {
            fileNameWithoutExtension = fileName;
        } else {
            fileNameWithoutExtension = fileName.substring(0, lastDotPos);
            fileExtension = '.' + fileName.substring(lastDotPos + 1, fileName.length());
        }

        String date = DateUtil.formatDate(SystemTimeUtil.getDate(), "yyMMddHHmmss");
        return fileNameWithoutExtension + '_' + date + fileExtension;
    }
}
