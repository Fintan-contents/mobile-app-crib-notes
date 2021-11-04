package jp.fintan.mobile.santokuapp.domain.model.account;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class AccountIdTest {

  @ParameterizedTest
  @ValueSource(
      strings = {
        "",
        "00000000-0000-0000-0000-000000000000",
        "7756b472-bb5c-49e4-9b81-dd5e6e51c72c",
        "ffffffff-ffff-ffff-ffff-ffffffffffff",
      })
  void validWith(String value) {
    new AccountId(value);
  }

  @Test
  void invalidWithNull() {
    assertThrows(NullPointerException.class, () -> new AccountId(null));
  }

  @Test
  void equals() {
    AccountId sut = new AccountId("a4bca4af-df3e-4835-84df-68b5f1ac4549");
    assertEquals(sut, new AccountId("a4bca4af-df3e-4835-84df-68b5f1ac4549"));
  }

  @Test
  void notEqualsWithNull() {
    AccountId sut = new AccountId("b7f02825-6b38-4aad-8eb4-6a298891a8b3");
    assertNotEquals(null, sut);
  }

  @Test
  void notEqualsWithDifferentClass() {
    AccountId sut = new AccountId("1f4ab941-85fa-441c-b513-a0c8d3c479c3");
    Long other = 100L;
    //noinspection AssertBetweenInconvertibleTypes
    assertNotEquals(sut, other);
  }

  @Test
  void notEquals() {
    AccountId sut = new AccountId("a9cbebfb-5258-47d1-bc62-bb5b2c9e1f92");
    assertNotEquals(sut, new AccountId("9cb543cb-3457-4a40-b7b1-c4908434e2df"));
  }

  @Test
  void testHashCode() {
    AccountId one = new AccountId("96bce4b1-c667-4156-ac34-e231b94ed192");
    AccountId another = new AccountId("18ba5058-2c63-408b-b264-5fb13faf65a6");
    assertNotEquals(one.hashCode(), another.hashCode());
  }
}
