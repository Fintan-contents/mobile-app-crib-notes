package jp.fintan.mobile.santokuapp.application;

public abstract class SantokuAppException extends RuntimeException {

  public SantokuAppException() {
    super();
  }

  public SantokuAppException(
      String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
    super(message, cause, enableSuppression, writableStackTrace);
  }

  public SantokuAppException(String message, Throwable cause) {
    super(message, cause);
  }

  public SantokuAppException(String message) {
    super(message);
  }

  public SantokuAppException(Throwable cause) {
    super(cause);
  }
}
