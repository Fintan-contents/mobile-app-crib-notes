package jp.fintan.mobile.santokuapp;

import java.lang.annotation.Annotation;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import javax.validation.ConstraintViolation;
import javax.validation.Path.Node;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.ExtensionContext;

public class ValidationExtension implements BeforeAllCallback {

  private Validator validator;

  @Override
  public void beforeAll(ExtensionContext context) throws Exception {
    try (ValidatorFactory validatorFactory = Validation.buildDefaultValidatorFactory()) {
      validator = validatorFactory.getValidator();
    }
  }

  public Map<String, Set<Class<? extends Annotation>>> validate(Object bean) {
    return validator.validate(bean).stream()
        .collect(
            Collectors.groupingBy(
                ValidationExtension::toPropertyName,
                Collectors.mapping(ValidationExtension::toAnnotationType, Collectors.toSet())));
  }

  private static String toPropertyName(ConstraintViolation<Object> cv) {
    Iterator<Node> iterator = cv.getPropertyPath().iterator();
    Node node = iterator.next();
    if (iterator.hasNext()) {
      throw new IllegalArgumentException("ネストしたバリデーションのテストには対応していません");
    }
    return node.getName();
  }

  private static Class<? extends Annotation> toAnnotationType(ConstraintViolation<Object> cv) {
    return cv.getConstraintDescriptor().getAnnotation().annotationType();
  }
}
