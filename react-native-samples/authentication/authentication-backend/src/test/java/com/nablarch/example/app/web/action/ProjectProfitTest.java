package com.nablarch.example.app.web.action;

import static org.hamcrest.CoreMatchers.is;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.experimental.runners.Enclosed;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

/**
 * {@link ProjectProfit}のテスト
 */
@RunWith(Enclosed.class)
public class ProjectProfitTest {

    @RunWith(Parameterized.class)
    public static class 売上総利益 {

        private final Param<Long> param;

        @Parameterized.Parameters
        public static List<Param<Long>> parameters() {
            return Arrays.asList(
                    new Param<>(new ProjectProfit(987654321, 123456789, 200, 300), 864197532L),
                    new Param<>(new ProjectProfit(999999999, 0, 200, 300), 999999999L),
                    new Param<>(new ProjectProfit(0, 999999999, 200, 300), -999999999L),
                    new Param<>(new ProjectProfit(0, 0, 200, 300), 0L),
                    new Param<Long>(new ProjectProfit(null, 100000000, 200, 300), null),
                    new Param<Long>(new ProjectProfit(10000, null, 200, 300), null),
                    new Param<>(new ProjectProfit(10000, 1000, null, 300), 9000L),
                    new Param<>(new ProjectProfit(10000, 1000, 200, null), 9000L),
                    new Param<Long>(new ProjectProfit(null, null, 200, 300), null));
        }

        public 売上総利益(Param<Long> param) {
            this.param = param;
        }

        @Test
        public void test() throws Exception {
            Assert.assertThat(param.projectProfit.getGrossProfit(), is(param.expected));
        }
    }

    @RunWith(Parameterized.class)
    public static class 配賦前利益 {

        private final Param<Long> param;

        @Parameterized.Parameters
        public static List<Param<Long>> parameters() {
            return Arrays.asList(
                    new Param<>(new ProjectProfit(987654321, 123456789, 12345678, 300), 851851854L),
                    new Param<>(new ProjectProfit(999999999, 0, 0, 300), 999999999L),
                    new Param<>(new ProjectProfit(0, 999999999, 999999999, 300), -1999999998L),
                    new Param<>(new ProjectProfit(0, 0, 0, 300), 0L),
                    new Param<Long>(new ProjectProfit(null, 2000000, 1000000, 300), null),
                    new Param<Long>(new ProjectProfit(3000000, null, 1000000, 300), null),
                    new Param<Long>(new ProjectProfit(3000000, 2000000, null, 300), null),
                    new Param<>(new ProjectProfit(3000000, 2000000, 1000000, null), 0L),
                    new Param<Long>(new ProjectProfit(null, null, null, 300), null)
            );
        }

        public 配賦前利益(Param<Long> param) {
            this.param = param;
        }

        @Test
        public void test() throws Exception {
            Assert.assertThat(param.projectProfit.getProfitBeforeAllocation(), is(param.expected));
        }
    }

    @RunWith(Parameterized.class)
    public static class 配賦前利益率 {

        private final Param<Long> param;

        @Parameterized.Parameters
        public static List<Param<BigDecimal>> parameters() {
            return Arrays.asList(
                    new Param<>(new ProjectProfit(987654321, 123456789, 12345678, 300), new BigDecimal("0.862")),
                    new Param<>(new ProjectProfit(999999999, 0, 0, 300), new BigDecimal("1.000")),
                    new Param<>(new ProjectProfit(0, 999999999, 999999999, 300), new BigDecimal("0.000")),
                    new Param<>(new ProjectProfit(0, 0, 0, 300), new BigDecimal("0.000")),
                    new Param<BigDecimal>(new ProjectProfit(null, 2000000, 1000000, 300), null),
                    new Param<BigDecimal>(new ProjectProfit(3000000, null, 1000000, 300), null),
                    new Param<BigDecimal>(new ProjectProfit(3000000, 2000000, null, 300), null),
                    new Param<>(new ProjectProfit(3000000, 2000000, 1000000, null), new BigDecimal("0.000")),
                    new Param<BigDecimal>(new ProjectProfit(null, null, null, 300), null)
            );
        }

        public 配賦前利益率(Param<Long> param) {
            this.param = param;
        }

        @Test
        public void test() throws Exception {
            Assert.assertThat(param.projectProfit.getProfitRateBeforeAllocation(), is(param.expected));
        }
    }


    @RunWith(Parameterized.class)
    public static class 営業利益 {

        private final Param<Long> param;

        @Parameterized.Parameters
        public static List<Param<Long>> parameters() {
            return Arrays.asList(
                    new Param<>(new ProjectProfit(987654321, 123456789, 12345678, 1234567), 850617287L),
                    new Param<>(new ProjectProfit(999999999, 0, 0, 0), 999999999L),
                    new Param<>(new ProjectProfit(0, 999999999, 999999999, 999999999), -2999999997L),
                    new Param<>(new ProjectProfit(0, 0, 0, 0), 0L),
                    new Param<Long>(new ProjectProfit(null, 5000000, 3000000, 1000000), null),
                    new Param<Long>(new ProjectProfit(7000000, null, 3000000, 1000000), null),
                    new Param<Long>(new ProjectProfit(7000000, 5000000, null, 1000000), null),
                    new Param<Long>(new ProjectProfit(7000000, 5000000, 3000000, null), null),
                    new Param<Long>(new ProjectProfit(null, null, null, null), null)
            );
        }

        public 営業利益(Param<Long> param) {
            this.param = param;
        }

        @Test
        public void test() throws Exception {
            Assert.assertThat(param.projectProfit.getOperatingProfit(), is(param.expected));
        }
    }

    @RunWith(Parameterized.class)
    public static class 営業利益率 {

        private final Param<Long> param;

        @Parameterized.Parameters
        public static List<Param<BigDecimal>> parameters() {
            return Arrays.asList(
                    new Param<>(new ProjectProfit(987654321, 123456789, 12345678, 1234567), new BigDecimal("0.861")),
                    new Param<>(new ProjectProfit(999999999, 0, 0, 0), new BigDecimal("1.000")),
                    new Param<>(new ProjectProfit(0, 999999999, 999999999, 999999999), new BigDecimal("0.000")),
                    new Param<>(new ProjectProfit(0, 0, 0, 0), new BigDecimal("0.000")),
                    new Param<>(new ProjectProfit(7000000, 3500000, 2500000, 1000000), new BigDecimal("0.000")),
                    new Param<BigDecimal>(new ProjectProfit(null, 5000000, 3000000, 1000000), null),
                    new Param<BigDecimal>(new ProjectProfit(7000000, null, 3000000, 1000000), null),
                    new Param<BigDecimal>(new ProjectProfit(7000000, 5000000, null, 1000000), null),
                    new Param<BigDecimal>(new ProjectProfit(7000000, 5000000, 3000000, null), null),
                    new Param<BigDecimal>(new ProjectProfit(null, null, null, null), null)
            );
        }

        public 営業利益率(Param<Long> param) {
            this.param = param;
        }

        @Test
        public void test() throws Exception {
            Assert.assertThat(param.projectProfit.getOperatingProfitRate(), is(param.expected));
        }
    }

    private static class Param<T> {

        private ProjectProfit projectProfit;

        private T expected;

        public Param(final ProjectProfit projectProfit, final T expected) {
            this.projectProfit = projectProfit;
            this.expected = expected;
        }
    }
}