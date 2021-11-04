package jp.fintan.mobile.santokuapp.presentation.restapi.system;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import nablarch.core.ThreadContext;
import nablarch.core.message.MessageUtil;
import nablarch.core.repository.di.config.externalize.annotation.ConfigValue;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.core.util.FileUtil;
import nablarch.fw.web.HttpErrorResponse;

/**
 * フロントエンドにメッセージ一覧を渡すためのREST API。
 * messages.propertiesに定義されたメッセージのうち、除外対象のメッセージを除いたすべてのメッセージを取得して返却する。
 *
 * <p>除外対象のメッセージについては設定ファイル（env.config）に記載する。
 *
 * <p>env.config例： # 除外するメッセージIDのprefix messages.export.excludes=nablarch.core.validation,
 * nablarch.common.code.validator
 *
 * <p>メッセージの取得にはNablarchが提供しているMessageUtilを使用する。 なお、メッセージIDの一覧を取得するAPIは提供されていないため、直接
 * messages.properties を読み込んでいる。
 *
 * <p>messages.properties例： ## bean validation message
 * nablarch.core.validation.ee.Required.message=入力してください。
 * nablarch.core.validation.ee.Domain.message=形式が正しくありません。
 * nablarch.common.code.validator.ee.CodeValue.message=不正な値が指定されました。
 *
 * <p>## 画面のラベル label.welcome=Welcome
 *
 * <p>## バリデーションエラーのメッセージ errors.required={0}を入力してください。 errors.length.min={0}は{1}文字以上の値を入力してください。
 * errors.email=メールアドレスの形式が正しくありません。
 *
 * <p>返却されるJSON例： { "label.welcome": "Welcome", "errors.required": "{0}を入力してください。",
 * "errors.length.min": "{0}は{1}文字以上の値を入力してください。", "errors.email": "メールアドレスの形式が正しくありません。" }
 */
@SystemRepositoryComponent
@Path("/system/messages")
public class SystemMessageAction {

  private final String[] messagesExportExcludes;
  private final Set<String> messageIds;

  public SystemMessageAction(
      @ConfigValue("${messages.export.excludes}") String[] messagesExportExcludes) {
    this.messagesExportExcludes = messagesExportExcludes;

    Properties props = new Properties();
    try (InputStream in = FileUtil.getResource("classpath:messages.properties");
        Reader reader = new InputStreamReader(in, StandardCharsets.UTF_8)) {
      props.load(reader);
    } catch (IOException e) {
      throw new HttpErrorResponse(503);
    }
    messageIds = props.stringPropertyNames();
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Map<String, String> get() {

    // Message.formatMessage()は内部でThreadContextを参照しているので
    // コンストラクタではなくリクエストをハンドリングしているときに実行したい。
    // そのためコンストラクタではメッセージIDの一覧を取得するにとどめている。

    // Message.formatMessage()はローカライズが考慮されている。
    // 言語を指定してメッセージ一覧を取得したい場合はThreadContextへ言語を設定してから
    // メッセージの取得処理をすれば良い。
    // ただし、処理が終わった後はThreadContextへ元の言語を設定しなおすこと。
    // コード例をコメントで示しておく。
    //
    // Locale originalLanguage = ThreadContext.getLanguage();
    // ThreadContext.setLanguage(language);
    // try {
    // //ここでメッセージの取得処理を行う
    // } finally {
    // ThreadContext.setLanguage(originalLanguage);
    // }

    Map<String, String> messages = new HashMap<>();
    for (String messageId : messageIds) {
      if (Arrays.stream(messagesExportExcludes).anyMatch(messageId::startsWith)) {
        continue;
      }
      // フォーマット処理前のメッセージを取得する
      String message =
          MessageUtil.getStringResource(messageId).getValue(ThreadContext.getLanguage());
      messages.put(messageId, message);
    }
    return messages;
  }
}
