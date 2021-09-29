package com.nablarch.example.app.web.handler;

import javax.persistence.OptimisticLockException;

import nablarch.common.dao.NoDataException;
import nablarch.common.web.session.SessionKeyNotFoundException;
import nablarch.core.log.app.FailureLogUtil;
import nablarch.fw.ExecutionContext;
import nablarch.fw.Handler;
import nablarch.fw.web.HttpErrorResponse;
import nablarch.fw.web.HttpResponse.Status;

import com.nablarch.example.app.web.common.file.TemporaryFileFailedException;

/**
 * 特定の例外が送出された場合に、適切なエラー画面に遷移させるハンドラ。
 * <p/>
 * 本ハンドラを業務アクションハンドラの前段に配置することで、業務アクションメソッドが送出した例外クラスを捕捉し、
 * 例外毎に任意のエラー画面へ遷移させることができる。
 * <p/>
 * [参考情報]HTTPステータスコードの使い分けについて、下記を参考とすること。<br>
 * @see <a href="http://qiita.com/kawasima/items/e48180041ace99842779">HTTPステータスコードの使い分け</a>
 * @author Nabu Rakutaro
 */
public class ExampleErrorForwardHandler implements Handler<Object, Object> {

    @Override
    public Object handle(Object data, ExecutionContext context) {

        try {
            // 後続の業務アクションハンドラが送出した例外をtry-catch文で捕捉する
            return context.handleNext(data);
        } catch (SessionKeyNotFoundException e) {
            throw new HttpErrorResponse(Status.BAD_REQUEST.getStatusCode(),
                    "/WEB-INF/view/common/errorPages/doubleSubmissionError.jsp", e);
        } catch (NoDataException e) {
            throw new HttpErrorResponse(Status.NOT_FOUND.getStatusCode(),
                    "/WEB-INF/view/common/errorPages/pageNotFoundError.jsp", e);
        } catch (OptimisticLockException e) {
            throw new HttpErrorResponse(Status.BAD_REQUEST.getStatusCode(),
                    "/WEB-INF/view/common/errorPages/optimisticLockError.jsp", e);
        } catch (TemporaryFileFailedException e) {
            FailureLogUtil.logFatal(e, data, null);
            throw new HttpErrorResponse(Status.INTERNAL_SERVER_ERROR.getStatusCode(), e);
        }
    }
}
