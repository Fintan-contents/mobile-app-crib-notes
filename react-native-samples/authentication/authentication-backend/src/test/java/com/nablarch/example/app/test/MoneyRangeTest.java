package com.nablarch.example.app.test;

import com.nablarch.example.app.entity.core.validation.validator.MoneyRange;
import nablarch.core.validation.ee.ValidatorUtil;
import org.junit.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Set;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.empty;
import static org.junit.Assert.assertThat;


/**
 * {@link com.nablarch.example.app.entity.core.validation.validator.MoneyRange}のテストクラス。
 */
public class MoneyRangeTest {

    private final Validator validator = ValidatorUtil.getValidator();

    private static class TestBean {
        @MoneyRange
        private String noAttributes;

        @MoneyRange(min = 1)
        private String min;

        @MoneyRange(max = 1)
        private String max;

        @MoneyRange(min = 1, max = 2)
        private String minMax;

        @MoneyRange(min = 1, max = 1)
        private String minMaxSame;

        @MoneyRange(min = -2, max = -1)
        private String minMaxMinus;

        @MoneyRange(min = 1, max = 2)
        private String notNumeric;

        @MoneyRange(min = 1, max = 2)
        private String decimal;

        @MoneyRange(message = "TEST")
        private String message;
    }

    /**
     * 属性を何も指定しないときのテスト。
     */
    @Test
    public void testNoAttributes() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //デフォルトの最小値は0なので、バリデーションエラーになること
        testBean.noAttributes = "-1";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("0円から" + Long.MAX_VALUE + "円の範囲で入力してください。"));

        //デフォルトの最大値はLong.MAX_VALUE(9223372036854775807)なので、バリデーションエラーになること
        testBean.noAttributes = "9223372036854775808";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("0円から" + Long.MAX_VALUE + "円の範囲で入力してください。"));

        //範囲内の最小値である場合は、バリデーションエラーにならないこと
        testBean.noAttributes = "0";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));

        //範囲内の最大値である場合は、バリデーションエラーにならないこと
        testBean.noAttributes = String.valueOf(Long.MAX_VALUE);
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));
    }

    /**
     * minを指定したときのテスト。
     */
    @Test
    public void testMinAttribute() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //min=1と設定しているので、バリデーションエラーになること
        testBean.min = "0";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から" + Long.MAX_VALUE + "円の範囲で入力してください。"));

        //min=1と設定しているので、バリデーションエラーにならないこと
        testBean.min = "1";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));

        //maxが未指定(=Longの最大値)なので、バリデーションエラーにならないこと
        testBean.min = String.valueOf(Long.MAX_VALUE);
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));
    }

    /**
     * maxを指定したときのテスト。
     */
    @Test
    public void testMaxAttribute() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //max=1と設定しているので、バリデーションエラーになること
        testBean.max = "2";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("0円から1円の範囲で入力してください。"));

        //max=1と設定しているので、バリデーションエラーにならないこと
        testBean.max = "1";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));

        //minが未指定(=0)なので、バリデーションエラーにならないこと
        testBean.max = "0";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));
    }

    /**
     * min, maxを指定したときのテスト。
     */
    @Test
    public void testMinMaxAttribute() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //min=1と設定しているので、バリデーションエラーになること
        testBean.minMax = "0";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から2円の範囲で入力してください。"));

        //max=2と設定しているので、バリデーションエラーになること
        testBean.minMax = "3";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から2円の範囲で入力してください。"));

        //min=1と設定しているので、バリデーションエラーにならないこと
        testBean.minMax = "1";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));
        assertThat(violations, is(empty()));

        //max=2と設定しているので、バリデーションエラーにならないこと
        testBean.minMax = "2";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));
    }

    /**
     * min. maxに同じ値を指定したときのテスト。
     */
    @Test
    public void testMinMaxSame() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //min=1, max=1なのでバリデーションエラーになること
        testBean.minMaxSame = "0";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から1円の範囲で入力してください。"));

        //min=1, max=1なのでバリデーションエラーになること
        testBean.minMaxSame = "2";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から1円の範囲で入力してください。"));

        //min=1, max=1なのでバリデーションエラーにならないこと
        testBean.minMaxSame = "1";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));
    }

    /**
     * min, maxがマイナス値のときのテスト。
     */
    @Test
    public void minMaxMinus() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //min=-2, max=-1なのでバリデーションエラーになること
        testBean.minMaxMinus = "-3";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("-2円から-1円の範囲で入力してください。"));

        //min=-2, max=-1なのでバリデーションエラーになること
        testBean.minMaxMinus = "0";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("-2円から-1円の範囲で入力してください。"));

        //min=-2, max=-1なのでバリデーションエラーにならないこと
        testBean.minMaxMinus = "-1";
        violations = validator.validate(testBean);
        assertThat(violations, is(empty()));
    }

    /**
     * 値が数値でないときのテスト。
     */
    @Test
    public void testNotNumeric() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //値が文字列の場合、バリデーションエラーになること
        testBean.notNumeric = "ABC";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から2円の範囲で入力してください。"));

        //値が文字列の場合、バリデーションエラーになること
        testBean.notNumeric = "-0";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から2円の範囲で入力してください。"));
    }

    /**
     * 値が小数であるときのテスト。
     */
    @Test
    public void testDecimal() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //小数はバリデーションエラーになること
        testBean.decimal = "1.0";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から2円の範囲で入力してください。"));

        //小数はバリデーションエラーになること
        testBean.decimal = "-1.0";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("1円から2円の範囲で入力してください。"));
    }

    /**
     * メッセージが指定されたときのテスト。
     */
    @Test
    public void testMessage() {
        TestBean testBean = new TestBean();
        Set<ConstraintViolation<TestBean>> violations;
        ConstraintViolation<TestBean> v;

        //min=0なのでバリデーションエラーとなり、指定したメッセージが返ること
        testBean.message = "-1";
        violations = validator.validate(testBean);
        v = violations.iterator().next();
        assertThat(v.getMessage(), is("TEST"));
    }
}