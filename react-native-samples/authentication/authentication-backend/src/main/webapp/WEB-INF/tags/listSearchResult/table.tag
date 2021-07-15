<%--------------------------------------------------------------
行データ、ヘッダ行とボディ行のフラグメントを使用してテーブルを出力するタグ。
--------------------------------------------------------------%>
<%@ tag language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/listSearchResult" %>
<%--------------------------------------------------------------
属性
--------------------------------------------------------------%>
<%@ attribute name="resultSetName" required="true" rtexprvalue="true" %>
<%@ attribute name="resultSetCss" required="false" rtexprvalue="true" %>
<%@ attribute name="headerRowFragment" required="true" fragment="true" %>
<%@ attribute name="bodyRowFragment" required="true" fragment="true" %>
<%@ attribute name="varRowName" required="false" rtexprvalue="true" %>
<%@ attribute name="varStatusName" required="false" rtexprvalue="true" %>
<%@ attribute name="varCountName" required="false" rtexprvalue="true" %>
<%@ attribute name="varRowCountName" required="false" rtexprvalue="true" %>
<%@ attribute name="varOddEvenName" required="false" rtexprvalue="true" %>
<%@ attribute name="oddValue" required="false" rtexprvalue="true" %>
<%@ attribute name="evenValue" required="false" rtexprvalue="true" %>
<%@ attribute name="startPosition" required="true" rtexprvalue="true" type="java.lang.Integer" %>

<%--------------------------------------------------------------
デフォルト
--------------------------------------------------------------%>
<c:if test="${empty resultSetCss}"><n:set var="resultSetCss" value="nablarch_resultSet" scope="page" /></c:if>
<c:if test="${empty varRowName}"><n:set var="varRowName" value="row" scope="page" /></c:if>
<c:if test="${empty varStatusName}"><n:set var="varStatusName" value="status" scope="page" /></c:if>
<c:if test="${empty varCountName}"><n:set var="varCountName" value="count" scope="page" /></c:if>
<c:if test="${empty varRowCountName}"><n:set var="varRowCountName" value="rowCount" scope="page" /></c:if>
<c:if test="${empty varOddEvenName}"><n:set var="varOddEvenName" value="oddEvenCss" scope="page" /></c:if>
<c:if test="${empty oddValue}"><n:set var="oddValue" value="nablarch_odd" scope="page" /></c:if>
<c:if test="${empty evenValue}"><n:set var="evenValue" value="nablarch_even" scope="page" /></c:if>

<%--------------------------------------------------------------
本体処理
--------------------------------------------------------------%>
<div>
<table class="<n:write name="resultSetCss" withHtmlFormat="false" />">
    <%-- ヘッダ行 --%>
    <jsp:invoke fragment="headerRowFragment" />
    <%-- ボディ行 --%>
    <n:set var="resultSet" name="${resultSetName}" scope="page" bySingleValue="false" />
    <c:forEach var="nablarch_row" items="${resultSet}" varStatus="nablarch_status">
        <n:set var="${varRowName}" value="${nablarch_row}" />
        <n:set var="${varStatusName}" value="${nablarch_status}" />
        <c:if test="${(nablarch_status.count % 2) != 0}">
            <n:set var="${varOddEvenName}" value="${oddValue}" />
        </c:if>
        <c:if test="${(nablarch_status.count % 2) == 0}">
            <n:set var="${varOddEvenName}" value="${evenValue}" />
        </c:if>
        <n:set var="${varCountName}" value="${nablarch_status.count}" />
        <n:set var="${varRowCountName}" value="${startPosition + nablarch_status.index}" />
        <jsp:invoke fragment="bodyRowFragment" />
    </c:forEach>
</table>
</div>
