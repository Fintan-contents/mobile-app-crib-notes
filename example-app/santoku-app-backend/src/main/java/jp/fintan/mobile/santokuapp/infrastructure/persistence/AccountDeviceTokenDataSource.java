package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import java.sql.Timestamp;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceTokenCreatedAt;
import jp.fintan.mobile.santokuapp.domain.repository.AccountDeviceTokenRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.AccountDeviceTokenEntity;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AccountDeviceTokenDataSource implements AccountDeviceTokenRepository {

  @Override
  public void add(AccountDeviceToken accountDeviceToken) {
    AccountDeviceTokenEntity accountDeviceTokenEntity = toEntity(accountDeviceToken);

    UniversalDao.insert(accountDeviceTokenEntity);
  }

  @Override
  public void remove(AccountId accountId, DeviceToken deviceToken) {
    AccountDeviceTokenEntity accountDeviceTokenEntity = new AccountDeviceTokenEntity();
    accountDeviceTokenEntity.setAccountId(accountId.value());
    accountDeviceTokenEntity.setDeviceToken(deviceToken.value());

    UniversalDao.delete(accountDeviceTokenEntity);
  }

  @Override
  public AccountDeviceTokens findBy(AccountId accountId) {
    List<AccountDeviceTokenEntity> deviceEntities =
        UniversalDao.findAllBySqlFile(
            AccountDeviceTokenEntity.class,
            "db.sql.device#find_by_account_id",
            Map.of("accountId", accountId.value()));
    return new AccountDeviceTokens(deviceEntities.stream().map(this::toDomainModel).collect(Collectors.toList()));
  }

  @Override
  public boolean existsBy(AccountId accountId, DeviceToken deviceToken) {
    try {
      UniversalDao.findById(AccountDeviceTokenEntity.class, accountId.value(), deviceToken.value());
      return true;
    } catch (NoDataException e) {
      return false;
    }
  }

  private AccountDeviceTokenEntity toEntity(AccountDeviceToken accountDeviceToken) {
    AccountDeviceTokenEntity accountDeviceTokenEntity = new AccountDeviceTokenEntity();
    accountDeviceTokenEntity.setAccountId(accountDeviceToken.accountId().value());
    accountDeviceTokenEntity.setDeviceToken(accountDeviceToken.deviceToken().value());
    accountDeviceTokenEntity.setCreatedAt(Timestamp.from(accountDeviceToken.createdAt().value().toInstant()));
    return accountDeviceTokenEntity;
  }

  private AccountDeviceToken toDomainModel(AccountDeviceTokenEntity accountDeviceTokenEntity) {
    AccountId id = new AccountId(accountDeviceTokenEntity.getAccountId());
    DeviceToken deviceToken = new DeviceToken(accountDeviceTokenEntity.getDeviceToken());
    DeviceTokenCreatedAt deviceTokenCreatedAt =
        new DeviceTokenCreatedAt(
            OffsetDateTime.ofInstant(accountDeviceTokenEntity.getCreatedAt().toInstant(), ZoneOffset.UTC));

    return new AccountDeviceToken(id, deviceToken, deviceTokenCreatedAt);
  }
}
