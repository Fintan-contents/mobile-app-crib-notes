<%@page import="com.nablarch.example.app.web.common.code.ProjectType"%>
<%@page import="com.nablarch.example.app.web.common.code.ProjectSortKey"%>
<%@page import="com.nablarch.example.app.web.common.code.SortOrder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/listSearchResult" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <%-- javascript --%>
        <n:script type="text/javascript" src="/javascripts/lib/jquery-1.11.2.min.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/projectList.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/clientList.js"></n:script>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
        <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
        <title>プロジェクト検索一覧画面</title>
    </head>
    <body>
        <n:include path="/WEB-INF/view/common/noscript.jsp" />
        <div class="container-fluid mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />
            <div class="row">
                <n:include path="/WEB-INF/view/common/sidemenu.jsp" />
                <div class="pages col-xs-10">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="title-nav">
                                        <span>プロジェクト検索一覧画面</span>
                                        <div class="button-nav">
                                            <n:a href="/action/project" cssClass="btn btn-raised btn-default">新規登録</n:a>
                                        </div>
                                    </div>
                                    <!-- 検索フォームでバリデーションエラーが発生していない場合だけ、検索結果を表示する。 -->
                                    <c:if test="${searchResult != null}">
                                        <div class="message-area margin-top">
                                            <n:errors filter="global" cssClass="message-error"/>
                                        </div>
                                        <n:form method="GET" action="/action/project/list">

                                            <%-- 現在の検索結果の表示に使用した検索条件をパラメータとして持つURIを、
                                               変数としてpageスコープに登録する。
                                               この変数は、<app:listSearchResult>タグのページング用のURIとして使用される。--%>
                                            <c:url value="/action/project/list" var="uri" context="/">
                                                <c:param name="searchForm.clientId" value="${searchForm.clientId}"/>
                                                <c:param name="searchForm.clientName" value="${searchForm.clientName}"/>
                                                <c:param name="searchForm.projectName" value="${searchForm.projectName}"/>
                                                <c:param name="searchForm.projectType" value="${searchForm.projectType}"/>
                                                <c:forEach items="${searchForm.projectClass}" var="projectClass">
                                                    <c:param name="searchForm.projectClass" value="${projectClass}" />
                                                </c:forEach>
                                                <c:param name="searchForm.projectStartDateBegin"
                                                         value="${searchForm.projectStartDateBegin}"/>
                                                <c:param name="searchForm.projectStartDateEnd"
                                                         value="${searchForm.projectStartDateEnd}"/>
                                                <c:param name="searchForm.projectEndDateBegin"
                                                         value="${searchForm.projectEndDateBegin}"/>
                                                <c:param name="searchForm.projectEndDateEnd"
                                                         value="${searchForm.projectEndDateEnd}"/>
                                                <c:param name="searchForm.sortKey" value="${searchForm.sortKey}"/>
                                                <c:param name="searchForm.sortDir" value="${searchForm.sortDir}"/>
                                            </c:url>
                                            <div class="sort-nav">
                                                <div style="float:left;">
                                                    <span class="font-group">
                                                    検索結果
                                                    </span>
                                                    <span class="search-result-count">
                                                        <n:write name="searchResult.pagination.resultCount" />
                                                    </span>
                                                    <c:url value="/action/project/download" var="download_uri" context="/">
                                                        <c:param name="searchForm.clientId" value="${searchForm.clientId}"/>
                                                        <c:param name="searchForm.clientName" value="${searchForm.clientName}"/>
                                                        <c:param name="searchForm.projectName" value="${searchForm.projectName}"/>
                                                        <c:param name="searchForm.projectType" value="${searchForm.projectType}"/>
                                                        <c:forEach items="${searchForm.projectClass}" var="projectClass">
                                                            <c:param name="searchForm.projectClass" value="${projectClass}" />
                                                        </c:forEach>
                                                        <c:param name="searchForm.projectStartDateBegin" value="${searchForm.projectStartDateBegin}"/>
                                                        <c:param name="searchForm.projectStartDateEnd" value="${searchForm.projectStartDateEnd}"/>
                                                        <c:param name="searchForm.projectEndDateBegin" value="${searchForm.projectEndDateBegin}"/>
                                                        <c:param name="searchForm.projectEndDateEnd" value="${searchForm.projectEndDateEnd}"/>
                                                        <c:param name="searchForm.sortKey" value="${searchForm.sortKey}"/>
                                                        <c:param name="searchForm.sortDir" value="${searchForm.sortDir}"/>
                                                        <c:param name="searchForm.pageNumber" value="${searchForm.pageNumber}"/>
                                                    </c:url>
                                                    <n:a href="${download_uri}">
                                                        <n:write name="label" />
                                                        <n:img src="/images/download.png" alt="ダウンロード" />
                                                    </n:a>
                                                </div>

                                                <!-- ソート順を変更した際に現在の検索条件及びソート順を再送するためのパラメータ -->
                                                <n:plainHidden name="searchForm.clientId"/>
                                                <n:plainHidden name="searchForm.clientName"/>
                                                <n:plainHidden name="searchForm.projectName"/>
                                                <n:plainHidden name="searchForm.projectType"/>
                                                <n:plainHidden name="searchForm.projectClass"/>
                                                <n:plainHidden name="searchForm.projectStartDateBegin"/>
                                                <n:plainHidden name="searchForm.projectStartDateEnd"/>
                                                <n:plainHidden name="searchForm.projectEndDateBegin"/>
                                                <n:plainHidden name="searchForm.projectEndDateEnd"/>
                                                <n:set var="sortKeyList" value="<%= ProjectSortKey.values() %>"/>
                                                <n:select
                                                        id="sortKey"
                                                        name="searchForm.sortKey"
                                                        listName="sortKeyList"
                                                        elementValueProperty="code"
                                                        elementLabelProperty="label"
                                                        elementLabelPattern="$LABEL$"
                                                        cssClass="btn dropdown-toggle"/>
                                                <n:set var="sortOrderList" value="<%= SortOrder.values() %>"/>
                                                <n:select
                                                        id="sortDir"
                                                        name="searchForm.sortDir"
                                                        listName="sortOrderList"
                                                        elementValueProperty="code"
                                                        elementLabelProperty="label"
                                                        elementLabelPattern="$LABEL$"
                                                        cssClass="btn dropdown-toggle"/>
                                                <input id="firstPageNumber" type="hidden" name="searchForm.pageNumber" value="1" />
                                            </div>
                                        </n:form>

                                        <!-- 検索結果 -->
                                        <app:listSearchResult
                                            currentPageNumberCss="form-control"
                                            pagingCss="paging"
                                            usePageNumberSubmit="true"
                                            prevSubmitLabel="«"
                                            nextSubmitLabel="»"
                                            prevSubmitCss="prev-page-link"
                                            nextSubmitCss="next-page-link"
                                            resultSetCss="table table-striped table-hover"
                                            listSearchInfoName="searchForm"
                                            searchUri="${uri}"
                                            resultSetName="searchResult"
                                            useResultCount="false">
                                            <jsp:attribute name="headerRowFragment">
                                                <tr>
                                                    <th>プロジェクトID</th>
                                                    <th>プロジェクト名</th>
                                                    <th>プロジェクト種別</th>
                                                    <th>開始日</th>
                                                    <th>終了日</th>
                                                </tr>
                                            </jsp:attribute>
                                            <jsp:attribute name="bodyRowFragment">
                                                <tr class="info">
                                                    <td>
                                                        <!-- プロジェクトIDをパラメータとするリンクを表示する -->
                                                        <n:a href="/action/project/show/${row.projectId}">
                                                            <n:write name="row.projectId"/>
                                                        </n:a>
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
                                            </jsp:attribute>
                                        </app:listSearchResult>
                                    </c:if>

                                    <div class="title-nav page-footer">
                                        <div class="button-nav">
                                            <n:a href="/action/project" cssClass="btn btn-raised btn-default">新規登録</n:a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <n:include path="/WEB-INF/view/common/noscript.jsp" />
        <n:script type="text/javascript">
            $(function() {
                saveListUrl();
            });
        </n:script>
    </body>
</html>