package com.nablarch.example.app.web.handler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import nablarch.core.message.ApplicationException;
import nablarch.core.validation.ValidationResultMessage;
import nablarch.fw.ExecutionContext;
import nablarch.fw.jaxrs.ErrorResponseBuilder;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;

import javax.ws.rs.core.MediaType;

import java.util.List;
import java.util.stream.Collectors;

/**
 * RESTful API用のエラーレスポンス生成クラス。
 *
 * @author Nabu Rakutaro
 */
public class RestfulErrorResponseBuilder extends ErrorResponseBuilder {

    /** オブジェクトマッパー */
    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * エラーレスポンスを生成する。
     * <p/>
     * 発生したエラーがバリデーションエラーの場合、
     * 対応するエラーメッセージ及びプロパティ名をJSON形式でレスポンスに設定する。
     * <p/>
     * それ以外の{@link ApplicationException}の場合は、対応するエラーメッセージをJSON形式でレスポンスに設定する。
     * <p/>
     * それ以外のエラーの場合には、上位クラスに処理を委譲する。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @param throwable 発生したエラーの情報
     * @return エラーレスポンス
     */
    @Override
    public HttpResponse build(HttpRequest request, ExecutionContext context, Throwable throwable) {
        if (throwable instanceof ApplicationException) {
            return createResponseBody((ApplicationException) throwable);
        } else {
            return super.build(request, context, throwable);
        }
    }

    /**
     * バリデーションエラーのメッセージをボディ部に持つレスポンスを生成する。
     *
     * @param ae バリデーションエラーの例外
     * @return 構築したレスポンス
     */
    private HttpResponse createResponseBody(final ApplicationException ae) {
        final HttpResponse response = new HttpResponse(400);
        response.setContentType(MediaType.APPLICATION_JSON);
        final List<ErrorMessage> errorMessages = ae.getMessages()
                                                   .stream()
                                                   .map(message ->
                                                           message instanceof ValidationResultMessage
                                                                   ? new ErrorMessage(message.formatMessage(),
                                                                   ((ValidationResultMessage) message).getPropertyName())
                                                                   : new ErrorMessage(message.formatMessage())
                                                   )
                                                   .collect(Collectors.toList());

        try {
            response.write(objectMapper.writeValueAsString(errorMessages));
        } catch (JsonProcessingException ignored) {
            return new HttpResponse(500);
        }
        return response;
    }

    /**
     * エラーメッセージを保持するクラス。
     */
    private static final class ErrorMessage {

        /**
         * エラーメッセージを保持するインスタンスを生成する。
         *
         * @param message エラーメッセージ
         */
        private ErrorMessage(final String message) {
            this(message, null);
        }

        /**
         * エラーメッセージとプロパティ名を保持するインスタンスを生成する。
         *
         * @param message エラーメッセージ
         * @param propertyName プロパティ名
         */
        private ErrorMessage(final String message, final String propertyName) {
            this.message = message;
            this.propertyName = propertyName;
        }

        /** プロパティ名 */
        private final String propertyName;

        /** エラーメッセージ */
        private final String message;

        /**
         * プロパティ名を取得する。
         *
         * @return プロパティ名
         */
        public String getPropertyName() {
            return propertyName;
        }

        /**
         * エラーメッセージを取得する。
         *
         * @return エラーメッセージ
         */
        public String getMessage() {
            return message;
        }
    }
}
