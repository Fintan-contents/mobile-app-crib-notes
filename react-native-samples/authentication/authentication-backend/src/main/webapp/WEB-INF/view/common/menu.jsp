<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ page session="false" %>
<n:link rel="stylesheet" type="text/css" href="/stylesheets/menu.css" />

<div>
    <!-- Navigation -->
    <nav class="navbar navbar-inverse">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Project</a>
            </div>
            <div class="navbar-collapse collapse navbar-responsive-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <n:a href="/action/project/index">プロジェクト検索</n:a>
                    </li>
                    <li>
                        <n:a href="/action/projectBulk/index">プロジェクト一括更新</n:a>
                    </li>
                    <li>
                        <n:a href="/action/projectUpload">プロジェクト一括登録</n:a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
