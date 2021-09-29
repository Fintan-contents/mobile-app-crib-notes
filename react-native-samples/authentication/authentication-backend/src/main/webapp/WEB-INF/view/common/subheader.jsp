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

<div class="headerArea">
    <span class="headerLeftPane">
        <span class="headerElement applicationName">
           プロジェクト管理システム
        </span>
    </span>
    <span class="headerCenterPane">
    </span>
    <span class="headerRightPane">
    </span>
</div>
<hr class="floatClear" />
