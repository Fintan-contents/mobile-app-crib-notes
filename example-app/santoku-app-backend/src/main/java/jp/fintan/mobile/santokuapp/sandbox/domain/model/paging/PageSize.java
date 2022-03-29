package jp.fintan.mobile.santokuapp.sandbox.domain.model.paging;

import java.util.Objects;

import jp.fintan.mobile.santokuapp.domain.model.core.LongValue;

public class PageSize extends LongValue {
  private static final Long DEFAULT_SIZE = 20L;

  public PageSize(Long value) {
    super(Objects.nonNull(value) ? value : DEFAULT_SIZE);
  }
}
