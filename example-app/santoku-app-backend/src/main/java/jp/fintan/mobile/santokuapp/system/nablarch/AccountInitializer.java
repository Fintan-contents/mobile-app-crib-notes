package jp.fintan.mobile.santokuapp.system.nablarch;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import javax.sql.DataSource;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Nickname;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.infrastructure.service.PBKDF2PasswordHashingProcessor;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.initialization.Initializable;

/**
 * 以下のアカウントを初期データとして登録します。
 * <ul>
 *   <li>santoku</li>
 *   <li>admin</li>
 *   <li>partner</li>
 * </ul>
 * <p>
 * 既にアカウントが登録されている場合は、初期データを更新します。
 * <p>
 * パスワードは、環境設定ファイル（env.config）、または環境変数で設定可能です。
 * <ul>
 *   <li>環境設定ファイル: 「account.password」に設定</li>
 *   <li>環境変数: 「ACCOUNT_PASSWORD」に設定</li>
 * </ul>
 *
 * @see <a href="https://nablarch.github.io/docs/5u20/doc/application_framework/application_framework/setting_guide/ManagingEnvironmentalConfiguration/index.html">処理方式、環境に依存する設定の管理方法</a>
 * @see <a href="https://nablarch.github.io/docs/5u20/doc/application_framework/application_framework/libraries/repository.html#os">OS環境変数を使って環境依存値を上書きする</a>
 */
public class AccountInitializer implements Initializable {

  private static final Logger LOGGER = LoggerManager.get(AccountInitializer.class);
  private DataSource dataSource;

  public void setDataSource(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  private String accountPassword;

  public void setAccountPassword(String accountPassword) {
    this.accountPassword = accountPassword;
  }
  private static final Account SANTOKU_ACCOUNT = new Account(new AccountId("santoku"), new Nickname("santoku"));
  private static final Account ADMIN_ACCOUNT = new Account(new AccountId("admin"), new Nickname("santoku.administrator.techlead.1234567890123456789"));
  private static final Account PARTNER_ACCOUNT = new Account(new AccountId("partner"), new Nickname("p"));
  private static final List<Account> ACCOUNTS = List.of(SANTOKU_ACCOUNT, ADMIN_ACCOUNT, PARTNER_ACCOUNT);

  @Override
  public void initialize() {
    RawPassword rawPassword;
    try {
      rawPassword = new RawPassword(accountPassword);
    } catch (IllegalArgumentException e) {
      LOGGER.logWarn("Initial account data could not be registered because password was invalid.", e);
      return;
    }

    String hashedPassword = new PBKDF2PasswordHashingProcessor().hash(rawPassword).value();

    try(
        Connection connection = dataSource.getConnection();
        ) {
      for (Account account : ACCOUNTS) {
        try(
            // h2のpostgresqlモードでは、on conflict句は使用できない
            // https://github.com/h2database/h2database/issues/3557
            // そのため、merge into句を使用する
            PreparedStatement accountStatement = connection.prepareStatement(
                "merge into account as a using (values (?, ?)) as i(account_id, nickname) on a.account_id = i.account_id "
                    + "when matched then update set nickname = i.nickname "
                    + "when not matched then insert (account_id, nickname) values (i.account_id, i.nickname)"
            );
            PreparedStatement passwordStatement = connection.prepareStatement(
                "merge into password as p using (values (?, ?)) as i(account_id, password) on p.account_id = i.account_id "
                    + "when matched then update set password = i.password "
                    + "when not matched then insert (account_id, password) values (i.account_id, i.password)"
            )
          ) {
          accountStatement.setString(1, account.accountId().value());
          accountStatement.setString(2, account.nickname().value());
          passwordStatement.setString(1, account.accountId().value());
          passwordStatement.setString(2, hashedPassword);
          accountStatement.execute();
          passwordStatement.execute();
        } catch (SQLException e) {
          // 例外をthrowするとエラーログが出力されるが、アプリは起動する
          throw new RuntimeException(e);
        }
      }
    } catch (SQLException e) {
      // 例外をthrowするとエラーログが出力されるが、アプリは起動する
      throw new RuntimeException(e);
    }
  }
}
