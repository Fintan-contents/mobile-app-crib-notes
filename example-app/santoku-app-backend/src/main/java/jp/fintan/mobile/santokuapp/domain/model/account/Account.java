package jp.fintan.mobile.santokuapp.domain.model.account;

public class Account {

  private final AccountId id;

  private final Nickname nickname;

  public Account(AccountId id, Nickname nickname) {
    this.id = id;
    this.nickname = nickname;
  }

  public AccountId accountId() {
    return id;
  }

  public Nickname nickname() {
    return nickname;
  }
}
