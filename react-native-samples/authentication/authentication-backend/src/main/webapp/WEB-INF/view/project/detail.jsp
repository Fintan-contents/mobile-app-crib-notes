<%@page import="com.nablarch.example.app.web.common.code.ProjectClass"%>
<%@page import="com.nablarch.example.app.web.common.code.ProjectType"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ page session="false" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <%-- javascript --%>
        <n:script type="text/javascript" src="/javascripts/lib/jquery-1.11.2.min.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/projectInput.js"></n:script>
        <title>プロジェクト詳細画面</title>
    </head>

    <body>
        <div class="mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />
        </div>
        <section>
            <div class="title-nav">
                <span class="page-title">プロジェクト詳細画面</span>
                <div class="button-nav">
                    <div class="button-block real-button-block">
                        <n:a href="/action/project/edit/${projectId}" cssClass="btn btn-raised btn-success">変更</n:a>
                    </div>
                    <div class="button-block link-button-block">
                        <n:a id="topReturnList" href="#" cssClass="btn btn-raised btn-default">戻る</n:a>
                    </div>
                </div>
            </div>
            <div class="message-area margin-top">
                <n:errors cssClass="message-error"/>
            </div>
            <h4 class="font-group">
                プロジェクト詳細
            </h4>
            <table class="table table-striped table-hover">
                <tbody>
                    <tr>
                        <th class="width-250">
                            プロジェクト名
                        </th>
                        <td>
                            <n:write name="form.projectName"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            プロジェクト種別
                        </th>
                        <td>
                            <c:forEach var="projectType" items="<%= ProjectType.values() %>">
                                <c:if test="${projectType.code == form.projectType}">
                                    <n:write name="projectType.label" />
                                </c:if>
                            </c:forEach>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            プロジェクト分類
                        </th>
                        <td>
                            <c:forEach var="projectClass" items="<%= ProjectClass.values() %>">
                                <c:if test="${projectClass.code == form.projectClass}">
                                    <n:write name="projectClass.label" />
                                </c:if>
                            </c:forEach>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            プロジェクトマネージャー
                        </th>
                        <td>
                            <n:write name="form.projectManager"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            プロジェクトリーダー
                        </th>
                        <td>
                            <n:write name="form.projectLeader"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            顧客名
                        </th>
                        <td>
                            <n:write name="form.clientId"/>
                            <n:write name="form.clientName"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            プロジェクト開始日
                        </th>
                        <td>
                            <n:write value="${n:formatByDefault('dateTime', form.projectStartDate)}" />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            プロジェクト終了日
                        </th>
                        <td>
                            <n:write value="${n:formatByDefault('dateTime', form.projectEndDate)}"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            備考
                        </th>
                        <td>
                            <n:write name="form.note"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            売上高
                        </th>
                        <td>
                            <n:write value="${n:format('number', form.sales, '###,###,### 千円')}" />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            売上原価
                        </th>
                        <td>
                            <n:write value="${n:format('number', form.costOfGoodsSold, '###,###,### 千円')}" />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            販管費
                        </th>
                        <td>
                            <n:write value="${n:format('number',form.sga , '###,###,### 千円')}" />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            本社配賦
                        </th>
                        <td>
                            <n:write value="${n:format('number', form.allocationOfCorpExpenses, '###,###,### 千円')}" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            売上総利益
                        </td>
                        <td>
                            <n:write value="${n:format('number', profit.grossProfit, '###,###,### 千円')}" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            配賦前利益
                        </td>
                        <td>
                            <n:write value="${n:format('number', profit.profitBeforeAllocation, '###,###,### 千円')}" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            配賦前利益率
                        </td>
                        <td>
                            <n:write value="${n:format('number', profit.profitRateBeforeAllocation, '##0.0 %')}" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            営業利益
                        </td>
                        <td>
                            <n:write value="${n:format('number', profit.operatingProfit, '###,###,### 千円')}" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            営業利益率
                        </td>
                        <td>
                             <n:write value="${n:format('number', profit.operatingProfitRate, '##0.0 %')}" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="title-nav page-footer">
                <div class="button-nav">
                    <div class="button-block real-button-block">
                        <n:a href="/action/project/edit/${projectId}" cssClass="btn btn-raised btn-success">変更</n:a>
                    </div>
                    <div class="button-block link-button-block">
                        <n:a id="bottomReturnList" href="#" cssClass="btn btn-raised btn-default">戻る</n:a>
                    </div>
                </div>
            </div>

        </section>
        <n:include path="/WEB-INF/view/common/footer.jsp" />
        <n:script type="text/javascript">
            $(function(){
                setListUrlTo("topReturnList");
                setListUrlTo("bottomReturnList");
            });
        </n:script>
    </body>
</html>
