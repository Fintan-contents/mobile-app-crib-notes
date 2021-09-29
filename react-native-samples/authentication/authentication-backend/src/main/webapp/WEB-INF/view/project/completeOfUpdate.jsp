<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ page session="false" %>

<!DOCTYPE html>
<html>
    <head>
        <title>プロジェクト変更完了画面</title>
    </head>

    <body>
        <n:include path="/WEB-INF/view/common/noscript.jsp" />

        <div class="mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />

            <n:form>
                <div class="title-nav">
                    <h1 class="page-title">プロジェクト変更完了画面</h1>
                    <div class="button-nav">
                        <div class="button-block link-button-block">
                            <n:a id="topReturnList" href="#" cssClass="btn btn-raised btn-success">次へ</n:a>
                        </div>
                    </div>
                </div>
                <div class="message-area message-info">
                    プロジェクトの更新が完了しました。
                </div>
                <div class="title-nav">
                    <div class="button-nav">
                        <div class="button-block link-button-block">
                            <n:a id="bottomReturnList" href="#" cssClass="btn btn-raised btn-success">次へ</n:a>
                        </div>
                    </div>
                </div>
            </n:form>

            <n:include path="/WEB-INF/view/common/footer.jsp" />
        </div>
        <n:script type="text/javascript">
            $(function(){
                setListUrlTo("topReturnList");
                setListUrlTo("bottomReturnList");
            });
        </n:script>
    </body>
</html>