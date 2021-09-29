<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ page session="false" %>

<!DOCTYPE html>
<html>
    <head>
        <title>プロジェクト登録完了画面</title>
    </head>

    <body>
        <n:include path="/WEB-INF/view/common/noscript.jsp" />

        <div class="mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />

            <n:form>
                <div class="title-nav">
                    <h1 class="page-title">プロジェクト登録完了画面</h1>
                    <div class="button-nav">
                        <n:a href="/action/project" cssClass="btn btn-raised btn-success">次へ</n:a>
                    </div>
                </div>
                <div class="message-area message-info">
                     登録が完了しました。
                </div>
                <div class="title-nav">
                    <div class="button-nav">
                        <n:a href="/action/project" cssClass="btn btn-raised btn-success">次へ</n:a>
                    </div>
                </div>
            </n:form>

            <n:include path="/WEB-INF/view/common/footer.jsp" />
        </div>
    </body>
</html>