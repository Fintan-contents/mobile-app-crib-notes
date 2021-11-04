package jp.fintan.mobile.santokuapp.domain.model.account;

public class AccountPassword {

  private final AccountId id;

  private final HashedPassword password;

  public AccountPassword(AccountId id, HashedPassword password) {
    this.id = id;
    this.password = password;
  }

  public AccountId accountId() {
    return id;
  }

  public HashedPassword password() {
    return password;
  }
}
