<%--------------------------------------------------------------
検索結果のリスト表示のサブミット要素用に変更パラメータを出力するタグ。
--------------------------------------------------------------%>
<%@ tag language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%--------------------------------------------------------------
属性
--------------------------------------------------------------%>
<%@ attribute name="pageNumber"  required="true" rtexprvalue="true" %>
<%@ attribute name="sortId"  required="false" rtexprvalue="true" %>
<%@ attribute name="listSearchInfoName" required="true" rtexprvalue="true" %>

<%--------------------------------------------------------------
本体処理
--------------------------------------------------------------%>
<c:if test="${not empty pageNumber}">
    <n:param paramName="${listSearchInfoName}.pageNumber" value="${pageNumber}" />
</c:if>
<c:if test="${not empty sortId}">
    <n:param paramName="${listSearchInfoName}.sortId" value="${sortId}" />
</c:if>