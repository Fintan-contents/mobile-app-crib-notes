package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.HashedPassword;
import jp.fintan.mobile.santokuapp.domain.repository.AccountPasswordRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.PasswordEntity;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AccountPasswordDataSource implements AccountPasswordRepository {

  @Override
  public void add(AccountPassword account) {
    PasswordEntity passwordEntity = new PasswordEntity();
    passwordEntity.setAccountId(account.accountId().value());
    passwordEntity.setPassword(account.password().value());
    UniversalDao.insert(passwordEntity);
  }

  @Override
  public void remove(AccountId accountId) {
    PasswordEntity passwordEntity = new PasswordEntity();
    passwordEntity.setAccountId(accountId.value());

    UniversalDao.delete(passwordEntity);
  }

  @Override
  public AccountPassword findById(AccountId accountId) {
    try {
      PasswordEntity passwordEntity =
          UniversalDao.findById(PasswordEntity.class, accountId.value());
      return new AccountPassword(accountId, new HashedPassword(passwordEntity.getPassword()));
    } catch (NoDataException e) {
      return null;
    }
  }
}
