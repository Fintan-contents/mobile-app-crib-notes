package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Nickname;
import jp.fintan.mobile.santokuapp.domain.repository.AccountRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.AccountEntity;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AccountDataSource implements AccountRepository {

  @Override
  public void add(Account account) {
    AccountEntity accountEntity = new AccountEntity();
    accountEntity.setAccountId(account.accountId().value());
    accountEntity.setNickname(account.nickname().value());

    UniversalDao.insert(accountEntity);
  }

  @Override
  public void remove(AccountId accountId) {
    AccountEntity accountEntity = new AccountEntity();
    accountEntity.setAccountId(accountId.value());

    UniversalDao.delete(accountEntity);
  }

  @Override
  public Account findById(AccountId accountId) {
    try {
      AccountEntity accountEntity = UniversalDao.findById(AccountEntity.class, accountId.value());
      return toAccount(accountEntity);
    } catch (NoDataException e) {
      return null;
    }
  }

  @Override
  public boolean existsBy(AccountId accountId) {
    try {
      UniversalDao.findById(AccountEntity.class, accountId.value());
      return true;
    } catch (NoDataException e) {
      return false;
    }
  }

  private Account toAccount(AccountEntity accountEntity) {
    AccountId id = new AccountId(accountEntity.getAccountId());
    Nickname nickname = new Nickname(accountEntity.getNickname());

    return new Account(id, nickname);
  }
}
