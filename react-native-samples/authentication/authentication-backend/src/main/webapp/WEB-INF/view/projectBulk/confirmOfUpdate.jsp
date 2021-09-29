<%@page import="com.nablarch.example.app.web.common.code.ProjectType"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/listSearchResult" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
    <head>
        <%-- javascript --%>
        <n:script type="text/javascript" src="/javascripts/lib/jquery-1.11.2.min.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/projectList.js"></n:script>
        <title>プロジェクト検索一覧更新画面</title>
    </head>
    <body>
        <n:include path="/WEB-INF/view/common/noscript.jsp" />
        <div class="mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />
            <section>
                <div class="title-nav">
                    <span>プロジェクト検索一覧更新画面</span>
                    <div class="button-nav">
                        <n:form useToken="true">
                            <n:submit type="button" uri="backToList" cssClass="btn btn-raised btn-default" value="入力へ戻る"></n:submit>
                            <n:submit type="button" uri="update" allowDoubleSubmission="false" cssClass="btn btn-raised btn-success" value="確定"></n:submit>
                        </n:form>
                    </div>
                </div>
                <h4 class="font-group">プロジェクト変更一覧</h4>
                <div>
                    <table class="table table-striped table-hover">
                        <tr>
                            <th>プロジェクトID</th>
                            <th>プロジェクト名</th>
                            <th>プロジェクト種別</th>
                            <th>開始日</th>
                            <th>終了日</th>
                        </tr>
                        <c:forEach var="row" items="${projectListDto.projectList}">
                            <tr class="<n:write name='oddEvenCss' />">
                                <td>
                                    <n:write name="row.projectId" />
                                </td>
                                <td>
                                    <n:write name="row.projectName" />
                                </td>
                                <td>
                                    <c:forEach var="projectType" items="<%= ProjectType.values() %>">
                                        <c:if test="${projectType.code == row.projectType}">
                                            <n:write name="projectType.label" />
                                        </c:if>
                                    </c:forEach>
                                </td>
                                <td>
                                    <n:write value="${n:formatByDefault('dateTime', row.projectStartDate)}" />
                                </td>
                                <td>
                                    <n:write value="${n:formatByDefault('dateTime', row.projectEndDate)}" />
                                </td>
                            </tr>
                        </c:forEach>
                    </table>
                </div>
            </section>
            <div class="title-nav page-footer">
                <div class="button-nav">
                    <n:form useToken="true">
                        <n:submit type="button" uri="backToList" cssClass="btn btn-raised btn-default" value="入力へ戻る"></n:submit>
                        <n:submit type="button" uri="update" allowDoubleSubmission="false" cssClass="btn btn-raised btn-success" value="確定"></n:submit>
                    </n:form>
                </div>
            </div>
            <n:include path="/WEB-INF/view/common/footer.jsp" />
        </div>
    </body>
</html>