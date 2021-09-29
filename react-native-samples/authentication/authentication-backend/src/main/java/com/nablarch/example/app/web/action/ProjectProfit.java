package com.nablarch.example.app.web.action;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;
import java.util.Objects;

/**
 * プロジェクトの利益を持つクラス
 *
 * @author Nabu Rakutaro
 */
public class ProjectProfit {

    /** 売上高 */
    private final Integer sales;

    /** 売上原価 */
    private final Integer costOfGoodsSold;

    /** 販管費 */
    private final Integer sga;

    /** 本社配賦 */
    private final Integer allocationOfCorpExpenses;

    /**
     * 売上などからオブジェクトを構築する。
     *
     * @param sales 売上高
     * @param costOfGoodsSold 売上原価
     * @param sga 販管費
     * @param allocationOfCorpExpenses 本社配賦
     */
    public ProjectProfit(final Integer sales, final Integer costOfGoodsSold, final Integer sga,
            final Integer allocationOfCorpExpenses) {
        this.sales = sales;
        this.costOfGoodsSold = costOfGoodsSold;
        this.sga = sga;
        this.allocationOfCorpExpenses = allocationOfCorpExpenses;
    }

    /**
     * 売上総利益を取得する。<br />
     * 売上総利益が算出できない場合はnullを返却する。
     *
     * @return 売上総利益
     */
    public Long getGrossProfit() {
        if (hasNullValue(sales, costOfGoodsSold)) {
            return null;
        }
        return sales.longValue() - costOfGoodsSold.longValue();
    }

    /**
     * 配賦前利益を取得する。<br />
     * 配賦前利益が算出できない場合はnullを返却する。
     *
     * @return 配賦前利益
     */
    public Long getProfitBeforeAllocation() {
        if (hasNullValue(sales, costOfGoodsSold, sga)) {
            return null;
        }
        return sales.longValue() - costOfGoodsSold.longValue() - sga.longValue();
    }

    /**
     * 配賦前利益率を取得する。<br />
     * 配賦前利益率が算出できない場合はnullを返却する。
     *
     * @return 配賦前利益率
     */
    public BigDecimal getProfitRateBeforeAllocation() {
        final Long profitBeforeAllocation = getProfitBeforeAllocation();
        if (hasNullValue(profitBeforeAllocation, sales)) {
            return null;
        }
        BigDecimal result = new BigDecimal(profitBeforeAllocation);
        try {
            result = result.divide(new BigDecimal(sales), 3, RoundingMode.DOWN);
        } catch (ArithmeticException ignored) {
            return BigDecimal.ZERO.setScale(3, RoundingMode.DOWN);
        }
        return result;
    }

    /**
     * 営業利益を取得する。<br />
     * 営業利益が算出できない場合はnullを返却する。
     *
     * @return 営業利益
     */
    public Long getOperatingProfit() {
        if (hasNullValue(sales, costOfGoodsSold, sga, allocationOfCorpExpenses)) {
            return null;
        }
        return sales.longValue() - costOfGoodsSold.longValue() - sga.longValue() - allocationOfCorpExpenses.longValue();
    }

    /**
     * 営業利益率を取得する。<br />
     * 営業利益率が算出できない場合はnullを返却する。
     *
     * @return 営業利益率
     */
    public BigDecimal getOperatingProfitRate() {
        final Long operatingProfit = getOperatingProfit();
        if (hasNullValue(operatingProfit, sales)) {
            return null;
        }
        BigDecimal result = new BigDecimal(operatingProfit);
        try {
            result = result.divide(new BigDecimal(sales), 3, RoundingMode.DOWN);
        } catch (ArithmeticException ignored) {
            return BigDecimal.ZERO.setScale(3, RoundingMode.DOWN);
        }
        return result;
    }

    /**
     * 与えられた値にnullのものが1つでもある場合はtrue
     *
     * @param values 値
     * @return nullのものが1つでもある場合はtrue
     */
    private static boolean hasNullValue(Number... values) {
        return Arrays.stream(values)
                     .anyMatch(Objects::isNull);
    }
}
