<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ page session="false" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>エラー画面</title>
    </head>

    <body>
        <n:include path="/WEB-INF/view/common/noscript.jsp" />

        <div class="mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />

            <n:form>
                <div class="title-nav">
                    <h1 class="page-title">エラー画面</h1>
                </div>
                <div class="message-area">
                    <n:errors errorCss="message-error"/>
                    <br />
                    <p>
                        処理を正常に終了することができませんでした。<br/>
                        お手数ですが、入力内容をご確認の上、少し間をおいてから、もう一度手順をやりなおして下さい。<br/>
                        状況が変わらない場合は、お手数ですが、このシステムの管理者にご連絡ください。
                    </p>
                </div>

                <div class="title-nav">
                </div>
            </n:form>


            <n:include path="/WEB-INF/view/common/footer.jsp" />
        </div>
    </body>
</html>
