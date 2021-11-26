package jp.fintan.mobile.santokuapp.application.service.authentication;

import jp.fintan.mobile.santokuapp.application.SantokuAppException;

public class CredentialNotFoundException extends SantokuAppException {

  public CredentialNotFoundException(String message) {
    super(message);
  }
}
