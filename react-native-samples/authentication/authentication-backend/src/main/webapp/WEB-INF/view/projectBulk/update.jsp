<%@page import="com.nablarch.example.app.web.common.code.ProjectType"%>
<%@page import="com.nablarch.example.app.web.common.code.ProjectSortKey"%>
<%@page import="com.nablarch.example.app.web.common.code.SortOrder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/listSearchResult" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
    <head>
        <%-- javascript --%>
        <n:script type="text/javascript" src="/javascripts/lib/jquery-1.11.2.min.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/projectList.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/projectInput.js"></n:script>
          <n:script type="text/javascript" src="/javascripts/clientList.js"></n:script>
        <%-- stylesheet --%>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
        <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
        <title>
            プロジェクト検索一覧更新画面
        </title>
    </head>
    <body>
        <n:include path="/WEB-INF/view/common/noscript.jsp" />

        <div class="mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />
        </div>
        <div class="container-fluid mainContents">
            <div class="row">
                <n:include path="/WEB-INF/view/common/sidemenu.jsp" />
                <div class="pages col-md-10">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="title-nav">
                                        <span>
                                            プロジェクト検索一覧更新画面
                                        </span>
                                        <n:set var="isUpdatable" value="${fn:length(projectListDto.projectList) == 0 ? 'disabled' : ''}" />
                                        <div class="button-nav">
                                            <button id="topUpdateButton" class="btn btn-raised btn-success" <n:write name="isUpdatable" />>更新</button>
                                            <n:a href="/action/project" cssClass="btn btn-raised btn-default">新規登録</n:a>
                                        </div>
                                    </div>
                                    <div class="message-area margin-top">
                                          <n:errors filter="global" cssClass="message-error"/>
                                    </div>
                                    <n:form method="GET" action="/action/projectBulk/list">
                                        <div class="sort-nav">
                                            <div style="float:left;">
                                                <span class="font-group">
                                                検索結果
                                                </span>
                                                <span class="search-result-count">
                                                <c:if test="${fn:length(projectListDto.projectList) != 0}">
                                                    <n:write name="projectListDto.projectList.pagination.resultCount" />
                                                </c:if>
                                                <c:if test="${fn:length(projectListDto.projectList) == 0}">
                                                    0
                                                </c:if>
                                                </span>
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
                                            <n:plainHidden name="searchForm.projectEndDateEnd" />
                                            <input type="hidden" name="searchForm.pageNumber" value="1" />
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
                                        </div>
                                    </n:form>
                                    <n:form>
                                        <%-- 現在の検索結果の表示に使用した検索条件をパラメータとして持つURIを、
                                             変数としてpageスコープに登録する。
                                             この変数は、<app:listSearchResult>タグのページング用のURIとして使用される。--%>
                                        <c:url value="/action/projectBulk/list" var="uri">
                                            <c:param name="searchForm.clientId" value="${projectSearchDto.clientId}"/>
                                            <c:param name="searchForm.clientName" value="${projectSearchDto.clientName}"/>
                                            <c:param name="searchForm.projectName" value="${projectSearchDto.projectName}"/>
                                            <c:param name="searchForm.projectType" value="${projectSearchDto.projectType}"/>
                                            <c:forEach items="${searchForm.projectClass}" var="projectClass">
                                                <c:param name="searchForm.projectClass" value="${projectClass}" />
                                            </c:forEach>
                                            <c:param name="searchForm.projectStartDateBegin" value="${projectSearchDto.projectStartDateBegin}"/>
                                            <c:param name="searchForm.projectStartDateEnd" value="${projectSearchDto.projectStartDateEnd}"/>
                                            <c:param name="searchForm.projectEndDateBegin" value="${projectSearchDto.projectEndDateBegin}"/>
                                            <c:param name="searchForm.projectEndDateEnd" value="${projectSearchDto.projectEndDateEnd}"/>
                                            <c:param name="searchForm.sortId" value="${projectSearchDto.sortId}"/>
                                        </c:url>
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
                                            resultSetName="projectListDto.projectList"
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
                                                            <n:write name="bulkForm.projectList[${status.index}].projectId"/>
                                                        </n:a>
                                                        <n:plainHidden name="bulkForm.projectList[${status.index}].projectId"/>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <n:text name="bulkForm.projectList[${status.index}].projectName" maxlength="64" cssClass="form-control" errorCss="input-error input-text"/>
                                                            <n:error errorCss="message-error" name="bulkForm.projectList[${status.index}].projectName" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <n:set var="projectTypeList" value="<%= ProjectType.values() %>"/>
                                                            <n:select name="bulkForm.projectList[${status.index}].projectType"
                                                                      listName="projectTypeList"
                                                                      elementValueProperty="code"
                                                                      elementLabelProperty="label"
                                                                      elementLabelPattern="$LABEL$"
                                                                      cssClass="form-control btn dropdown-toggle"/>
                                                            <n:error errorCss="message-error" name="bulkForm.projectList[${status.index}].projectType" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <n:set var="projectStartDate" name="bulkForm.projectList[${status.index}].projectStartDate" scope="page" />
                                                            <n:text name="bulkForm.projectList[${status.index}].projectStartDate" 
                                                                    nameAlias="bulkForm.projectList[${status.index}].date"
                                                                    value="${n:formatByDefault('dateTime', projectStartDate)}"
                                                                    maxlength="10"
                                                                    cssClass="form-control datepicker"
                                                                    errorCss="input-error input-text"/>
                                                            <n:error errorCss="message-error" name="bulkForm.projectList[${status.index}].projectStartDate" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <n:set var="projectEndDate" name="bulkForm.projectList[${status.index}].projectEndDate" scope="page" />
                                                            <n:text name="bulkForm.projectList[${status.index}].projectEndDate"
                                                                    nameAlias="bulkForm.projectList[${status.index}].date"
                                                                    value="${n:formatByDefault('dateTime', projectEndDate)}"
                                                                    maxlength="10"
                                                                    cssClass="form-control datepicker"
                                                                    errorCss="input-error input-text"/>
                                                            <n:error errorCss="message-error" name="bulkForm.projectList[${status.index}].projectEndDate" />
                                                            <n:error errorCss="message-error" name="bulkForm.projectList[${status.index}].validProjectPeriod" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </jsp:attribute>
                                        </app:listSearchResult>
                                        <div class="title-nav page-footer">
                                            <div class="button-nav">
                                                <n:button id="bottomUpdateButton" uri="/action/projectBulk/confirmOfUpdate" disabled="${isUpdatable}" cssClass="btn btn-raised btn-success">更新</n:button>
                                                <n:a id="bottomCreateButton" href="/action/project" cssClass="btn btn-raised btn-default">新規登録</n:a>
                                            </div>
                                        </div>
                                    </n:form>
                                    <n:include path="/WEB-INF/view/common/footer.jsp" />
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