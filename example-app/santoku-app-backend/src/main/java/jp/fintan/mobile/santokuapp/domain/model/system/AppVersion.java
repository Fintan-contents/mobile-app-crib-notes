package jp.fintan.mobile.santokuapp.domain.model.system;

import com.vdurmont.semver4j.Semver;
import com.vdurmont.semver4j.SemverException;
import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class AppVersion extends StringValue {

  private final Semver semver;

  public AppVersion(String value) {
    super(value);
    try {
      semver = new Semver(value);
    } catch (SemverException ex) {
      throw new IllegalArgumentException(ex);
    }
  }

  public boolean isLowerThan(AppVersion version) {
    return semver.isLowerThan(version.value());
  }
}
