<%--------------------------------------------------------------
検索結果のリスト表示のソート用のサブミット要素を出力するタグ。
--------------------------------------------------------------%>
<%@ tag language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/listSearchResult" %>
<%--------------------------------------------------------------
属性
--------------------------------------------------------------%>
<%@ attribute name="tag" required="false" rtexprvalue="true" %>
<%@ attribute name="type" required="false" rtexprvalue="true" %>
<%@ attribute name="sortCss" required="false" rtexprvalue="true" %>
<%@ attribute name="ascCss" required="false" rtexprvalue="true" %>
<%@ attribute name="descCss" required="false" rtexprvalue="true" %>
<%@ attribute name="ascSortId" required="true" rtexprvalue="true" %>
<%@ attribute name="descSortId" required="true" rtexprvalue="true" %>
<%@ attribute name="defaultSort" required="false" rtexprvalue="true" %>
<%@ attribute name="label" required="true" rtexprvalue="true" %>
<%@ attribute name="uri" required="true" rtexprvalue="true" %>
<%@ attribute name="name" required="true" rtexprvalue="true" %>
<%@ attribute name="listSearchInfoName" required="true" rtexprvalue="true" %>

<%--------------------------------------------------------------
デフォルト
--------------------------------------------------------------%>
<c:if test="${empty tag}"><n:set var="tag" value="submitLink" scope="page" /></c:if>
<c:if test="${empty type}"><n:set var="type" value="" scope="page" /></c:if>
<c:if test="${empty sortCss}"><n:set var="sortCss" value="nablarch_sort" scope="page" /></c:if>
<c:if test="${empty ascCss}"><n:set var="ascCss" value="nablarch_asc" scope="page" /></c:if>
<c:if test="${empty descCss}"><n:set var="descCss" value="nablarch_desc" scope="page" /></c:if>
<c:if test="${empty defaultSort}"><n:set var="defaultSort" value="asc" scope="page" /></c:if>

<%--------------------------------------------------------------
本体処理
--------------------------------------------------------------%>
<n:set var="pagingInfo" name="${listSearchInfoName}" scope="page" bySingleValue="false" />
<c:if test="${pagingInfo.sortId == ascSortId}">
    <n:set var="useCss" value="${sortCss} ${ascCss}" scope="page" />
    <n:set var="useSortId" value="${descSortId}" scope="page" />
</c:if>
<c:if test="${pagingInfo.sortId == descSortId}">
    <n:set var="useCss" value="${sortCss} ${descCss}" scope="page" />
    <n:set var="useSortId" value="${ascSortId}" scope="page" />
</c:if>
<c:if test="${empty useSortId}">
    <c:if test="${defaultSort == 'asc'}">
        <n:set var="useCss" value="${sortCss}" scope="page" />
        <n:set var="useSortId" value="${ascSortId}" scope="page" />
    </c:if>
    <c:if test="${defaultSort != 'asc'}">
        <n:set var="useCss" value="${sortCss}" scope="page" />
        <n:set var="useSortId" value="${descSortId}" scope="page" />
    </c:if>
</c:if>
<app:listSearchSubmit tag="${tag}"
                    type="${type}"
                    css="${useCss}"
                    label="${label}"
                    enable="true"
                    uri="${uri}"
                    name="${name}"
                    pageNumber="1"
                    listSearchInfoName="${listSearchInfoName}"
                    sortId="${useSortId}" />