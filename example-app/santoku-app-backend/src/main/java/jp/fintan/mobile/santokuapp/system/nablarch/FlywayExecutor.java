package jp.fintan.mobile.santokuapp.system.nablarch;

import java.util.Arrays;
import javax.sql.DataSource;
import nablarch.core.repository.initialization.Initializable;
import org.flywaydb.core.Flyway;
import org.flywaydb.core.api.Location;
import org.flywaydb.core.api.configuration.ClassicConfiguration;

/**
 * データベースのマイグレーションはFlyway（https://flywaydb.org/）を用いて行う。
 *
 * <p>マイグレーション用のSQLファイルはsrc/main/resources/db/migration内に配置する。
 * また、ローカルでの開発時に動作確認を行うためのテストデータもFlywayで登録する。
 * テストデータ登録用のSQLファイルはsrc/test/resources/db/testdata/V9999__testdata.sqlとする。
 *
 * <p>Flywayはデータベースのロックを利用することで並列実行時に競合が起きないようになっている。
 * https://flywaydb.org/documentation/faq#parallel そのため、バックエンドがスケールアウトしたとしても安全にマイグレーションが行える。
 */
public class FlywayExecutor implements Initializable {

  private DataSource dataSource;

  private String[] locations;

  private boolean cleanBeforeMigrate;

  public DataSource getDataSource() {
    return dataSource;
  }

  public void setDataSource(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  public String[] getLocations() {
    return locations;
  }

  public void setLocations(String[] locations) {
    this.locations = locations;
  }

  public boolean isCleanBeforeMigrate() {
    return cleanBeforeMigrate;
  }

  public void setCleanBeforeMigrate(boolean cleanBeforeMigrate) {
    this.cleanBeforeMigrate = cleanBeforeMigrate;
  }

  @Override
  public void initialize() {
    migrate(cleanBeforeMigrate);
  }

  public void migrate(boolean forceCleanBeforeMigrate) {
    ClassicConfiguration configuration = new ClassicConfiguration();
    configuration.setDataSource(dataSource);
    configuration.setLocations(
        Arrays.stream(this.locations).map(Location::new).toArray(Location[]::new));

    Flyway flyway = new Flyway(configuration);
    if (forceCleanBeforeMigrate) {
      flyway.clean();
    }
    flyway.migrate();
  }
}
