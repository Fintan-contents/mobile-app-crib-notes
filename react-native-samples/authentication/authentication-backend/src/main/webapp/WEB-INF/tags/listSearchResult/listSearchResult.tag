<%--------------------------------------------------------------
検索結果のリスト表示を行うタグ。
--------------------------------------------------------------%>
<%@ tag language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/listSearchResult" %>

<%--------------------------------------------------------------
属性
--------------------------------------------------------------%>
<%-- 全体ラッパ --%>
<%@ attribute name="listSearchResultWrapperCss" required="false" rtexprvalue="true" %>
<%@ attribute name="listSearchInfoName" required="false" rtexprvalue="true" %>
<%-- 検索結果件数 --%>
<%@ attribute name="useResultCount" required="false" rtexprvalue="true" %>
<%@ attribute name="resultCountCss" required="false" rtexprvalue="true" %>
<%@ attribute name="resultCountFragment" required="false" fragment="true" %>
<%-- ページング --%>
<%@ attribute name="usePaging" required="false" rtexprvalue="true" %>
<%@ attribute name="pagingPosition" required="false" rtexprvalue="true" %>
<%@ attribute name="pagingCss" required="false" rtexprvalue="true" %>
<%@ attribute name="searchUri" required="false" rtexprvalue="true" %>
<%-- ページング(現在のページ番号) --%>
<%@ attribute name="useCurrentPageNumber" required="false" rtexprvalue="true" %>
<%@ attribute name="currentPageNumberCss" required="false" rtexprvalue="true" %>
<%@ attribute name="currentPageNumberFragment" required="false" fragment="true" %>
<%-- ページング(最初) --%>
<%@ attribute name="useFirstSubmit" required="false" rtexprvalue="true" %>
<%@ attribute name="firstSubmitCss" required="false" rtexprvalue="true" %>
<%@ attribute name="firstSubmitLabel" required="false" rtexprvalue="true" %>
<%@ attribute name="firstSubmitName" required="false" rtexprvalue="true" %>
<%-- ページング(前へ) --%>
<%@ attribute name="usePrevSubmit" required="false" rtexprvalue="true" %>
<%@ attribute name="prevSubmitCss" required="false" rtexprvalue="true" %>
<%@ attribute name="prevSubmitLabel" required="false" rtexprvalue="true" %>
<%@ attribute name="prevSubmitName" required="false" rtexprvalue="true" %>
<%-- ページング(ページ番号(1 2 3 ...n)) --%>
<%@ attribute name="usePageNumberSubmit" required="false" rtexprvalue="true" %>
<%@ attribute name="pageNumberSubmitWrapperCss" required="false" rtexprvalue="true" %>
<%@ attribute name="pageNumberSubmitCss" required="false" rtexprvalue="true" %>
<%@ attribute name="pageNumberSubmitName" required="false" rtexprvalue="true" %>
<%-- ページング(次へ) --%>
<%@ attribute name="useNextSubmit" required="false" rtexprvalue="true" %>
<%@ attribute name="nextSubmitCss" required="false" rtexprvalue="true" %>
<%@ attribute name="nextSubmitLabel" required="false" rtexprvalue="true" %>
<%@ attribute name="nextSubmitName" required="false" rtexprvalue="true" %>
<%-- ページング(最後) --%>
<%@ attribute name="useLastSubmit" required="false" rtexprvalue="true" %>
<%@ attribute name="lastSubmitCss" required="false" rtexprvalue="true" %>
<%@ attribute name="lastSubmitLabel" required="false" rtexprvalue="true" %>
<%@ attribute name="lastSubmitName" required="false" rtexprvalue="true" %>
<%-- 検索結果 --%>
<%@ attribute name="showResult" required="false" rtexprvalue="true" %>
<%@ attribute name="resultSetName" required="true" rtexprvalue="true" %>
<%@ attribute name="resultSetCss" required="false" rtexprvalue="true" %>
<%@ attribute name="headerRowFragment" required="false" fragment="true" %>
<%@ attribute name="bodyRowFragment" required="false" fragment="true" %>
<%@ attribute name="varRowName" required="false" rtexprvalue="true" %>
<%@ attribute name="varStatusName" required="false" rtexprvalue="true" %>
<%@ attribute name="varCountName" required="false" rtexprvalue="true" %>
<%@ attribute name="varRowCountName" required="false" rtexprvalue="true" %>
<%@ attribute name="varOddEvenName" required="false" rtexprvalue="true" %>
<%@ attribute name="oddValue" required="false" rtexprvalue="true" %>
<%@ attribute name="evenValue" required="false" rtexprvalue="true" %>

<%--------------------------------------------------------------
デフォルト
--------------------------------------------------------------%>
<%-- 全体ラッパ --%>
<c:if test="${empty listSearchResultWrapperCss}"><n:set var="listSearchResultWrapperCss" value="nablarch_listSearchResultWrapper" scope="page" /></c:if>
<c:if test="${empty pagingPosition}"><n:set var="pagingPosition" value="top" scope="page" /></c:if>
<c:if test="${empty showResult}"><n:set var="showResult" value="true" scope="page" /></c:if>
<%-- 検索結果件数 --%>
<c:if test="${empty useResultCount}"><n:set var="useResultCount" value="true" scope="page" /></c:if>
<c:if test="${empty resultCountCss}"><n:set var="resultCountCss" value="true" scope="page" /></c:if>
<%-- ページング --%>
<c:if test="${empty usePaging}"><n:set var="usePaging" value="true" scope="page" /></c:if>

<%--------------------------------------------------------------
本体処理
--------------------------------------------------------------%>
<%-- 全体ラッパ --%>
<n:set var="resultSet" name="${resultSetName}" scope="page" bySingleValue="false" />
<%-- resultSetはListを継承したクラスであるため、EL式ではindex番号以外でのアクセスができない。 --%>
<%-- そのため、paginationを一旦別変数に保存して使用する。 --%>
<n:set var="pagination" name="${resultSetName}.pagination" scope="page" />
<c:if test="${resultSet != null}">
<c:if test="${not empty listSearchInfoName}">
    <n:set var="listSearchInfo" name="${listSearchInfoName}" scope="page" bySingleValue="false" />
</c:if>
<div class="<n:write name="listSearchResultWrapperCss" withHtmlFormat="false" />">
    <%-- 検索結果件数 --%>
    <c:if test="${not empty listSearchInfo && (useResultCount == 'true')}">
    <jsp:invoke fragment="resultCountFragment" var="resultCountTag" />
    <div class="<n:write name="resultCountCss" withHtmlFormat="false" />">
        <c:if test="${empty resultCountTag}">
            検索結果 <n:write name="${listSearchInfoName}.pagination.resultCount" />件
        </c:if>
        <c:if test="${not empty resultCountTag}">
            <jsp:invoke fragment="resultCountFragment" />
        </c:if>
    </div>
    </c:if>
    <%-- ページング(top) --%>
    <c:if test="${(not empty listSearchInfo && (usePaging == 'true')) && ((pagingPosition == 'top') || (pagingPosition == 'both'))}">
    <app:listSearchPaging resultSetName="${resultSetName}"
                        listSearchInfoName="${listSearchInfoName}"
                        pagingCss="${pagingCss}"
                        searchUri="${searchUri}"
                        submitNameSuffix="_top"
                        useCurrentPageNumber="${useCurrentPageNumber}"
                        currentPageNumberCss="${currentPageNumberCss}"
                        useFirstSubmit="${useFirstSubmit}"
                        firstSubmitCss="${firstSubmitCss}"
                        firstSubmitLabel="${firstSubmitLabel}"
                        firstSubmitName="${firstSubmitName}"
                        usePrevSubmit="${usePrevSubmit}"
                        prevSubmitCss="${prevSubmitCss}"
                        prevSubmitLabel="${prevSubmitLabel}"
                        prevSubmitName="${prevSubmitName}"
                        usePageNumberSubmit="${usePageNumberSubmit}"
                        pageNumberSubmitWrapperCss="${pageNumberSubmitWrapperCss}"
                        pageNumberSubmitCss="${pageNumberSubmitCss}"
                        pageNumberSubmitName="${pageNumberSubmitName}"
                        useNextSubmit="${useNextSubmit}"
                        nextSubmitCss="${nextSubmitCss}"
                        nextSubmitLabel="${nextSubmitLabel}"
                        nextSubmitName="${nextSubmitName}"
                        useLastSubmit="${useLastSubmit}"
                        lastSubmitCss="${lastSubmitCss}"
                        lastSubmitLabel="${lastSubmitLabel}"
                        lastSubmitName="${lastSubmitName}">
        <jsp:attribute name="currentPageNumberFragment"><jsp:invoke fragment="currentPageNumberFragment" /></jsp:attribute>
    </app:listSearchPaging>
    </c:if>
    <%-- 検索結果 --%>
    <c:if test="${showResult}">
        <c:if test="${not empty listSearchInfo}">
            <n:set var="startPosition" value="${pagination.startPosition}" scope="page" />
        </c:if>
        <c:if test="${empty listSearchInfo}">
            <n:set var="startPosition" value="1" scope="page" />
        </c:if>
        <app:table resultSetName="${resultSetName}"
                 resultSetCss="${resultSetCss}"
                 varRowName="${varRowName}"
                 varStatusName="${varStatusName}"
                 varCountName="${varCountName}"
                 varRowCountName="${varRowCountName}"
                 varOddEvenName="${varOddEvenName}"
                 oddValue="${oddValue}"
                 evenValue="${evenValue}"
                 startPosition="${startPosition}">
            <jsp:attribute name="headerRowFragment"><jsp:invoke fragment="headerRowFragment" /></jsp:attribute>
            <jsp:attribute name="bodyRowFragment"><jsp:invoke fragment="bodyRowFragment" /></jsp:attribute>
        </app:table>
    </c:if>
    <%-- ページング(bottom) --%>
    <c:if test="${(not empty listSearchInfo && (usePaging == 'true')) && ((pagingPosition == 'bottom') || (pagingPosition == 'both'))}">
    <app:listSearchPaging resultSetName="${resultSetName}"
                        listSearchInfoName="${listSearchInfoName}"
                        pagingCss="${pagingCss}"
                        searchUri="${searchUri}"
                        submitNameSuffix="_bottom"
                        useCurrentPageNumber="${useCurrentPageNumber}"
                        currentPageNumberCss="${currentPageNumberCss}"
                        useFirstSubmit="${useFirstSubmit}"
                        firstSubmitCss="${firstSubmitCss}"
                        firstSubmitLabel="${firstSubmitLabel}"
                        firstSubmitName="${firstSubmitName}"
                        usePrevSubmit="${usePrevSubmit}"
                        prevSubmitCss="${prevSubmitCss}"
                        prevSubmitLabel="${prevSubmitLabel}"
                        prevSubmitName="${prevSubmitName}"
                        usePageNumberSubmit="${usePageNumberSubmit}"
                        pageNumberSubmitWrapperCss="${pageNumberSubmitWrapperCss}"
                        pageNumberSubmitCss="${pageNumberSubmitCss}"
                        pageNumberSubmitName="${pageNumberSubmitName}"
                        useNextSubmit="${useNextSubmit}"
                        nextSubmitCss="${nextSubmitCss}"
                        nextSubmitLabel="${nextSubmitLabel}"
                        nextSubmitName="${nextSubmitName}"
                        useLastSubmit="${useLastSubmit}"
                        lastSubmitCss="${lastSubmitCss}"
                        lastSubmitLabel="${lastSubmitLabel}"
                        lastSubmitName="${lastSubmitName}">
        <jsp:attribute name="currentPageNumberFragment"><jsp:invoke fragment="currentPageNumberFragment"/></jsp:attribute>
    </app:listSearchPaging>
    </c:if>
</div>
</c:if>
