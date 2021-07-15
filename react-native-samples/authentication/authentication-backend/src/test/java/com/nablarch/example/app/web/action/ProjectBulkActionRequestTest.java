package com.nablarch.example.app.web.action;

import com.nablarch.example.app.entity.Project;
import com.nablarch.example.app.test.ExampleTestCaseInfo;
import com.nablarch.example.app.test.advice.SignedInAdvice;
import com.nablarch.example.app.test.MockEntityList;
import com.nablarch.example.app.test.ExampleHttpRequestTestTemplate;
import com.nablarch.example.app.web.dto.ProjectListDto;
import com.nablarch.example.app.web.dto.ProjectSearchDto;
import nablarch.common.web.session.SessionUtil;
import nablarch.core.beans.BeanUtil;
import nablarch.core.util.DateUtil;
import nablarch.fw.ExecutionContext;
import nablarch.test.Assertion;
import org.junit.Test;

import java.util.List;

/**
 * {@link ProjectBulkAction} のリクエスト単体テストクラス。
 *
 * @author Nabu Rakutaro
 */
public class ProjectBulkActionRequestTest extends ExampleHttpRequestTestTemplate {

    @Override
    protected String getBaseUri() {
        return "/action/projectBulk/";
    }

    /**
     * 一括更新画面初期表示正常系ケース。
     */
    @Test
    public void indexNormal() {
        execute("indexNormal", new SignedInAdvice() {

            @Override
            public void afterExecute(ExampleTestCaseInfo testCaseInfo,
                                     ExecutionContext context) {
                // 検索フォームの確認
                assertEntity(testCaseInfo.getSheetName(),
                        "searchForm" + testCaseInfo.getTestCaseNo(),
                        context.getRequestScopedVar("searchForm"));

                // プロジェクト表示結果の確認
                assertBeanList(testCaseInfo.getSheetName(), "projectListDto", testCaseInfo,
                        (List<Object>) BeanUtil.getProperty(context.getRequestScopedVar("bulkForm"), "projectList"));
            }
        });
    }

    /**
     * プロジェクト一括更新検索正常系ケース。
     */
    @Test
    public void listNormal() {
        execute("listNormal", new SignedInAdvice() {

            @Override
            public void afterExecute(ExampleTestCaseInfo testCaseInfo,
                                     ExecutionContext context) {
                // 検索フォームの確認
                assertEntity(testCaseInfo.getSheetName(),
                        "searchForm" + testCaseInfo.getTestCaseNo(),
                        context.getRequestScopedVar("searchForm"));

                // プロジェクト表示結果の確認
                assertBeanList(testCaseInfo.getSheetName(), "projectListDto", testCaseInfo,
                        (List<Object>) BeanUtil.getProperty(context.getRequestScopedVar("bulkForm"), "projectList"));

                // 検索結果がセッションに格納されていることの確認
                assertBeanList(testCaseInfo.getSheetName(), "projectListDtoInSession", testCaseInfo,
                        (List<Object>) BeanUtil.getProperty(SessionUtil.get(context, "projectListDto"), "projectList"));

                // 検索条件がセッションに格納されていることを確認する
                assertEntity(testCaseInfo.getSheetName(),
                        "projectSearchDto" + testCaseInfo.getTestCaseNo(),
                        SessionUtil.get(context, "projectSearchDto"));
            }
        });
    }

    /**
     * プロジェクト一括更新検索異常系ケース。
     */
    @Test
    public void listAbNormal() {
        execute("listAbNormal", new SignedInAdvice());
    }

    /**
     * プロジェクト一括更新確認正常系ケース。
     */
    @Test
    public void confirmOfUpdateNormal() {
        execute("confirmOfUpdateNormal", new SignedInAdvice() {

            @Override
            protected void signedInBeforeExecute(ExampleTestCaseInfo testCaseInfo,
                                                 ExecutionContext context) {

                // セッションに更新対象のプロジェクトを設定する
                ProjectListDto projectListDto = new ProjectListDto();
                Project p1 = new Project();
                p1.setProjectId(9998);
                p1.setProjectName("プロジェクト８９９８");
                p1.setProjectType("development");
                p1.setProjectClass("s");
                p1.setClientId(1);
                p1.setProjectStartDate(DateUtil.getDate("20180101"));
                p1.setProjectEndDate(DateUtil.getDate("20180102"));
                p1.setVersion(0L);
                p1.setSales(1);
                p1.setCostOfGoodsSold(2);
                p1.setSga(3);
                p1.setAllocationOfCorpExpenses(4);
                
                projectListDto.getProjectList().add(p1);

                Project p2 = new Project();
                p2.setProjectId(9999);
                p2.setProjectName("プロジェクト８９９９");
                p2.setProjectType("development");
                p2.setProjectClass("s");
                p2.setClientId(1);
                p1.setProjectStartDate(DateUtil.getDate("20180102"));
                p1.setProjectEndDate(DateUtil.getDate("20180103"));
                p2.setVersion(0L);
                p2.setSales(10);
                p2.setCostOfGoodsSold(20);
                p2.setSga(30);
                p2.setAllocationOfCorpExpenses(40);
                projectListDto.getProjectList().add(p2);
                SessionUtil.put(context, "projectListDto", projectListDto);
            }

            @Override
            public void afterExecute(ExampleTestCaseInfo testCaseInfo,
                                     ExecutionContext context) {

                // 更新内容が上書きされたことを確認する
                assertBeanList(testCaseInfo.getSheetName(), "projectListDtoInSession", testCaseInfo,
                        (List<Object>) BeanUtil.getProperty(SessionUtil.get(context, "projectListDto"), "projectList"));
            }
        });
    }

    /**
     * プロジェクト一括更新確認異常系ケース。
     */
    @Test
    public void confirmOfUpdateAbNormal() {
        execute("confirmOfUpdateAbNormal", new SignedInAdvice());
    }

    /**
     * プロジェクト一括更新確認異常系ケース。
     */
    @Test
    public void backToListNormal() {
        execute("backToListNormal", new SignedInAdvice() {
            @Override
            protected void signedInBeforeExecute(ExampleTestCaseInfo testCaseInfo,
                                                 ExecutionContext context) {

                ProjectListDto projectListDto = new ProjectListDto();
                MockEntityList<Project> projectList = new MockEntityList<Project>();
                projectList.setUpMockList(1, 20L, 1);
                projectListDto.setProjectList(projectList);

                Project p1 = new Project();
                p1.setProjectId(9998);
                p1.setProjectName("プロジェクト９９９８");
                p1.setProjectType("development");
                p1.setProjectClass("s");
                p1.setClientId(1);
                p1.setProjectStartDate(DateUtil.getDate("20180101"));
                p1.setProjectEndDate(DateUtil.getDate("20180102"));
                p1.setVersion(0L);
                projectListDto.getProjectList().add(p1);
                SessionUtil.put(context, "projectListDto", projectListDto);

                ProjectSearchDto searchDto = new ProjectSearchDto();
                searchDto.setPageNumber(1);
                searchDto.setClientId(1);
                searchDto.setSortKey("name");
                searchDto.setProjectName("プロジェクト０００１");
                SessionUtil.put(context, "projectSearchDto", searchDto);
            }

            @Override
            public void afterExecute(ExampleTestCaseInfo testCaseInfo,
                                     ExecutionContext context) {
                // 検索フォームの確認
                assertEntity(testCaseInfo.getSheetName(),
                        "projectSearchDto" + testCaseInfo.getTestCaseNo(),
                        context.getRequestScopedVar("searchForm"));

                // プロジェクト表示結果の確認
                assertBeanList(testCaseInfo.getSheetName(), "projectListDto", testCaseInfo,
                        (List<Object>) BeanUtil.getProperty(context.getRequestScopedVar("bulkForm"), "projectList"));
            }

        });
    }

    /**
     * プロジェクト一括登録正常系ケース。
     */
    @Test
    public void updateNormal() {
        execute("updateNormal", new SignedInAdvice() {
            @Override
            protected void signedInBeforeExecute(ExampleTestCaseInfo testCaseInfo,
                                                 ExecutionContext context) {

                // セッションに更新対象のプロジェクトを設定する
                ProjectListDto projectListDto = new ProjectListDto();
                Project p1 = new Project();
                p1.setProjectId(9998);
                p1.setProjectName("プロジェクト８９９８");
                p1.setProjectType("development");
                p1.setProjectClass("s");
                p1.setClientId(1);
                p1.setVersion(0L);
                p1.setProjectStartDate(DateUtil.getDate("20180101"));
                p1.setProjectEndDate(DateUtil.getDate("20180102"));
                p1.setProjectManager("まねーじゃ１");
                p1.setProjectLeader("りーだー１");
                p1.setNote("あ");
                p1.setUserId(105);
                p1.setSales(1);
                p1.setCostOfGoodsSold(2);
                p1.setSga(3);
                p1.setAllocationOfCorpExpenses(4);
                projectListDto.getProjectList().add(p1);

                Project p2 = new Project();
                p2.setProjectId(9999);
                p2.setProjectName("プロジェクト８９９９");
                p2.setProjectType("development");
                p2.setProjectClass("s");
                p2.setClientId(1);
                p2.setVersion(0L);
                p2.setProjectStartDate(DateUtil.getDate("20180201"));
                p2.setProjectEndDate(DateUtil.getDate("20180228"));
                p2.setProjectManager("まねーじゃ２");
                p2.setProjectLeader("りーだー２");
                p2.setNote("い");
                p2.setUserId(105);
                p2.setSales(10);
                p2.setCostOfGoodsSold(20);
                p2.setSga(30);
                p2.setAllocationOfCorpExpenses(40);
                projectListDto.getProjectList().add(p2);
                SessionUtil.put(context, "projectListDto", projectListDto);
            }
        });
    }

    /**
     * プロジェクト一括登録異常系ケース。
     */
    @Test
    public void updateAbNormal() {
        execute("updateAbNormal", new SignedInAdvice());
    }

    /**
     * プロジェクト一括登録完了画面正常系ケース。
     */
    @Test
    public void completeOfUpdateNormal() {
        execute("completeOfUpdateNormal", new SignedInAdvice() {
            @Override
            protected void signedInBeforeExecute(ExampleTestCaseInfo testCaseInfo,
                                                 ExecutionContext context) {

                ProjectListDto projectListDto = new ProjectListDto();
                projectListDto.getProjectList().add(new Project());
                SessionUtil.put(context, "projectListDto", projectListDto);

                ProjectSearchDto searchDto = new ProjectSearchDto();
                SessionUtil.put(context, "projectSearchDto", searchDto);
            }

            @Override
            public void afterExecute(ExampleTestCaseInfo testCaseInfo,
                                     ExecutionContext context) {

                if (SessionUtil.orNull(context, "projectListDto") != null) {
                    Assertion.fail("projectListDto is not deleted.");
                }

                if (SessionUtil.orNull(context, "projectSearchDto") != null) {
                    Assertion.fail("projectSearchDto is not deleted.");
                }
            }
        });
    }
}