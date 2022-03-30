package jp.fintan.mobile.santokuapp.sandbox.domain.model.paging;

import java.util.Objects;

import jp.fintan.mobile.santokuapp.domain.model.core.LongValue;

public class PageNumber extends LongValue {
  public PageNumber(Long value) {
    super(Objects.nonNull(value) ? value : 1L);
  }
}
