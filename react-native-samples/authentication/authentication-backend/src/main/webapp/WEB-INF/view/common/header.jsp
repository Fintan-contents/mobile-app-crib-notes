<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ page session="false" %>

<style>
.headerArea {
    height: 50px;
    margin: 5px;
}
.headerLeftPane {
    width: 55%;
    text-align: left;
    float: left;
}
.headerCenterPane {
    width: 10%;
    margin-top: 30px;
    text-align: center;
    float: left;
}
.headerRightPane {
    width: 34%;
    margin-top: 30px;
    text-align: right;
    float: left;
}
.headerElement {
    margin: 10px;
}
.applicationName {
    color: #000;
    font-size: 23px;
    text-shadow: 3px 3px 5px #AAA;
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<%-- javascripts --%>
<n:script type="text/javascript" src="/javascripts/lib/jquery-1.11.2.min.js"></n:script>
<n:script type="text/javascript" src="/javascripts/lib/jquery-ui.min.js"></n:script>
<script type="text/javascript" charset="UTF-8" src="//cdn.jsdelivr.net/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script type="text/javascript" charset="UTF-8" src="//cdn.jsdelivr.net/bootstrap.material-design/0.5.6/js/material.min.js"></script>
<script type="text/javascript" charset="UTF-8" src="//cdn.jsdelivr.net/bootstrap.material-design/0.5.6/js/ripples.min.js"></script>
<n:script type="text/javascript" charset="UTF-8" src="/javascripts/lib/jquery-ui-datepicker-ja.js"></n:script>
<n:script type="text/javascript" charset="UTF-8" src="/javascripts/common.js"></n:script>

<%-- stylesheets --%>
<n:link rel="stylesheet" type="text/css" href="/stylesheets/project.css" />
<n:link rel="stylesheet" type="text/css" href="/stylesheets/common.css" />
<n:link rel="stylesheet" type="text/css" href="/stylesheets/jquery-ui.css" />

<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/icon?family=Material+Icons">

<%-- Bootstrap Core CSS --%>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.material-design/0.5.6/css/bootstrap-material-design.css">
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.material-design/0.5.6/css/ripples.min.css">

<script>
  $.material.init();
</script>

<div class="headerArea">
    <span class="headerLeftPane">
        <span class="headerElement applicationName">
           プロジェクト管理システム
        </span>
    </span>
    <span class="headerCenterPane">
    </span>
    <span class="headerRightPane">
       <c:if test="${ !empty userContext }">
           <span class="headerElement">ログイン中：&nbsp;<n:write name="userContext.kanjiName" /></span>
           <span class="headerElement"><n:a href="/action/logout" >ログアウト</n:a></span>
       </c:if>
       <c:if test="${ empty userContext }">
           <span class="headerElement"><n:a href="/action/login" >ログイン</n:a></span>
       </c:if>
    </span>
</div>
<hr class="floatClear" />
