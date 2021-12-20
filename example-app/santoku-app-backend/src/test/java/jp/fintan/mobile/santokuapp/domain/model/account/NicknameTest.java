package jp.fintan.mobile.santokuapp.domain.model.account;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

public class NicknameTest {

  @ParameterizedTest
  @ValueSource(strings = {"testuser"})
  @MethodSource("justMaxlength")
  void validWith(String value) {
    assertDoesNotThrow(() -> new Nickname(value));
  }

  @Test
  void invalidWithNull() {
    assertThrows(NullPointerException.class, () -> new Nickname(null));
  }

  @ParameterizedTest
  @ValueSource(strings = {"", " "})
  @MethodSource("overMaxlength")
  void invalidWith(String value) {
    assertThrows(IllegalArgumentException.class, () -> new Nickname(value));
  }

  static Stream<String> justMaxlength() {
    String text = IntStream.range(0, 50).mapToObj(i -> "x").collect(Collectors.joining());
    String surrogatePair = "𩸽" + text.substring(1);
    return Stream.of(text, surrogatePair);
  }

  static Stream<String> overMaxlength() {
    String text = IntStream.range(0, 51).mapToObj(i -> "x").collect(Collectors.joining());
    return Stream.of(text);
  }
}
