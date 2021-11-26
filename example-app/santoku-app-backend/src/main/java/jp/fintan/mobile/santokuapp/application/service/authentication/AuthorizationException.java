package jp.fintan.mobile.santokuapp.application.service.authentication;

import jp.fintan.mobile.santokuapp.application.SantokuAppException;

public class AuthorizationException extends SantokuAppException {

  public AuthorizationException(String message) {
    super(message);
  }
}
