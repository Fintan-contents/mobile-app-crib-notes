package com.nablarch.example.app.web.action;

import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import nablarch.common.dao.UniversalDao;
import nablarch.core.beans.BeanUtil;

import com.nablarch.example.app.entity.Industry;
import com.nablarch.example.app.web.dto.IndustryDto;

/**
 * 業種検索API
 *
 * @author Nabu Rakutaro
 */
public class IndustryAction {

    /**
     * 業種一覧を取得する。
     *
     * @return 業種一覧
     */
    @Produces(MediaType.APPLICATION_JSON)
    public List<IndustryDto> find() {
        List<Industry> industries = UniversalDao.findAll(Industry.class);

        return industries
                .stream()
                .map(industry -> BeanUtil.createAndCopy(IndustryDto.class, industry))
                .collect(Collectors.toList());
    }
}
