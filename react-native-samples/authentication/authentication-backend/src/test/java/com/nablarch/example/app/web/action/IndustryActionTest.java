package com.nablarch.example.app.web.action;

import com.nablarch.example.app.entity.Client;
import com.nablarch.example.app.entity.Industry;
import com.nablarch.example.app.entity.Project;
import com.nablarch.example.app.web.dto.IndustryDto;
import nablarch.common.dao.UniversalDao;
import nablarch.test.core.db.DbAccessTestSupport;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.List;
import java.util.stream.IntStream;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;

/**
 * {@link IndustryAction}のテストクラス
 */
public class IndustryActionTest {

    /** テスト対象 */
    private IndustryAction sut = new IndustryAction();

    private DbAccessTestSupport transaction = new DbAccessTestSupport(getClass());

    @Before
    public void setup() {
        transaction.beginTransactions();

        UniversalDao.findAll(Project.class).forEach(UniversalDao::delete);
        UniversalDao.findAll(Client.class).forEach(UniversalDao::delete);
        UniversalDao.findAll(Industry.class).forEach(UniversalDao::delete);

        IntStream.range(0, 3).forEach(i -> {
            Industry entity = new Industry();
            entity.setIndustryCode("0" + i);
            entity.setIndustryName("name" + i);
            UniversalDao.insert(entity);
        });
    }

    @After
    public void tearDown() {
        transaction.endTransactions();
    }

    @Test
    public void find() throws Exception {
        List<IndustryDto> result = sut.find();

        assertThat(result, contains(
                allOf(
                        hasProperty("industryCode", is("00")),
                        hasProperty("industryName", is("name0"))),
                allOf(
                        hasProperty("industryCode", is("01")),
                        hasProperty("industryName", is("name1"))),
                allOf(
                        hasProperty("industryCode", is("02")),
                        hasProperty("industryName", is("name2")))));
    }

}