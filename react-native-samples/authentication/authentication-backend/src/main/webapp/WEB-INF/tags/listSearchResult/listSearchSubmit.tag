<%--------------------------------------------------------------
検索結果のリスト表示のサブミット要素を出力するタグ。
--------------------------------------------------------------%>
<%@ tag language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/listSearchResult" %>
<%--------------------------------------------------------------
属性
--------------------------------------------------------------%>
<%@ attribute name="css" required="false" rtexprvalue="true" %>
<%@ attribute name="label" required="true" rtexprvalue="true" %>
<%@ attribute name="enable" required="true" rtexprvalue="true" type="java.lang.Boolean" %>
<%@ attribute name="uri" required="true" rtexprvalue="true" %>
<%@ attribute name="name" required="true" rtexprvalue="true" %>
<%@ attribute name="pageNumber" required="true" rtexprvalue="true" %>
<%@ attribute name="sortId" required="false" rtexprvalue="true" %>
<%@ attribute name="listSearchInfoName" required="true" rtexprvalue="true" %>

<%--------------------------------------------------------------
本体処理
--------------------------------------------------------------%>
<c:if test="${enable}">
<li>
    <c:url value="${uri}" var="uri" context="/">
        <c:if test="${not empty pageNumber}">
            <c:param name="${listSearchInfoName}.pageNumber" value="${pageNumber}" />
        </c:if>
        <c:if test="${not empty sortId}">
            <c:param name="${listSearchInfoName}.sortId" value="${sortId}" />
        </c:if>
    </c:url>
    <n:a href="${uri}" name="${name}" cssClass="${css}"><n:write name="label" /></n:a>
</li>
</c:if>
<c:if test="${not enable}">
    <c:if test="${label == pageNumber}">
        <li class="active">
    </c:if>
    <c:if test="${label != pageNumber}">
        <li class="disabled">
    </c:if>
    <a href="javascript:void(0)"><n:write name="label" /></a>
    </li>
</c:if>
