package jp.fintan.mobile.santokuapp.system.nablarch.csrf;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.handler.csrf.HttpMethodVerificationTargetMatcher;

/**
 * 各リクエストにおいて、CSRFトークンの検証対象となるか判定を行う。
 * HTTPメソッドを検証対象になるかどうかは、{@link HttpMethodVerificationTargetMatcher}に処理を移譲する。
 * このクラスでは、Pathをもとに検証対象となるかの判定を行う。
 * HTTPメソッドが検証対象であり、かつPathも検証対象である場合のみ、CSRFトークンの検証を実施する。
 * なお、検証対象外とするPathは、ホワイトリスト形式で指定する。
 */
public class CsrfTokenVerificationTargetMatcher extends HttpMethodVerificationTargetMatcher {

  private final WhitePatterns whitePatterns = new WhitePatterns();

  public CsrfTokenVerificationTargetMatcher() {
    whitePatterns.add("/api/sandbox/**");
  }

  @Override
  public boolean match(HttpRequest request) {
    return super.match(request) && !whitePatterns.matches(request);
  }

  private static class WhitePatterns {

    private final List<WhitePattern> list = new ArrayList<>();

    WhitePatterns add(String url) {
      list.add(new WhitePattern(url));
      return this;
    }

    boolean matches(HttpRequest request) {
      return list.stream().anyMatch(whitePattern -> whitePattern.matches(request));
    }
  }

  private static class WhitePattern {

    private final Pattern urlPattern;

    WhitePattern(String url) {
      this.urlPattern =
          Pattern.compile("^" + url.replaceAll("\\*\\*", ".+").replaceAll("\\*", "[^/]+") + "$");
    }

    boolean matches(HttpRequest request) {
      String path = request.getRequestPath();
      return urlPattern.matcher(path).matches();
    }
  }
}
