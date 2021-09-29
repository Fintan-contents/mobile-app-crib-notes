<%@page import="com.nablarch.example.app.web.common.code.ProjectClass"%>
<%@page import="com.nablarch.example.app.web.common.code.ProjectType"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ page session="false" %>

<!DOCTYPE html>
<html>
    <head>
        <%-- javascript --%>
        <n:script type="text/javascript" src="/javascripts/lib/jquery-1.11.2.min.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/projectInput.js"></n:script>
        <n:script type="text/javascript" src="/javascripts/clientList.js"></n:script>
        <title>プロジェクト変更画面</title>
    </head>
    <body>
        <div class="mainContents">
            <n:include path="/WEB-INF/view/common/menu.jsp" />
            <n:include path="/WEB-INF/view/common/header.jsp" />
        </div>
        <section>
            <n:form method="POST" useToken="true">
                <div class="title-nav">
                    <span class="page-title">プロジェクト変更画面</span>
                    <div class="button-nav">
                        <n:forInputPage>
                            <n:a href="/action/project/show/${project.projectId}" cssClass="btn btn-raised btn-default">戻る</n:a>
                            <n:submit value="削除" uri="#" id="topDeleteButton" cssClass="btn btn-raised btn-danger" allowDoubleSubmission="false" type="button" />
                            <n:submit value="更新" uri="#" id="topUpdateButton" cssClass="btn btn-raised btn-success" type="button" />
                        </n:forInputPage>
                        <n:forConfirmationPage>
                            <n:submit value="入力へ戻る" uri="#" id="topBackButton" cssClass="btn btn-raised btn-default" type="button" />
                            <n:submit value="確定" uri="#" id="topSubmitButton" cssClass="btn btn-raised btn-success" allowDoubleSubmission="false" type="button" />
                        </n:forConfirmationPage>
                    </div>
                </div>
            </n:form>
            <div class="message-area margin-top">
                <n:errors filter="global" cssClass="message-error"/>
            </div>
            <h2 class="font-group">
                プロジェクト詳細
            </h2>
            <n:form useToken="true">
                <table class="table">
                    <tbody>
                        <tr>
                            <th class="width-250 required">
                                プロジェクト名
                            </th>
                            <td>
                                <div class="form-group">
                                    <n:text name="form.projectName" maxlength="64" cssClass="form-control width-300" errorCss="input-error" />
                                    <n:error errorCss="message-error" name="form.projectName" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th class="required">
                                プロジェクト種別
                            </th>
                            <td>
                                <div class="form-group">
                                    <n:set var="projectTypeList" value="<%= ProjectType.values() %>"/>
                                    <n:select name="form.projectType"
                                              listName="projectTypeList"
                                              elementValueProperty="code"
                                              elementLabelProperty="label"
                                              elementLabelPattern="$LABEL$"
                                              cssClass="form-control"/>
                                    <n:error errorCss="message-error" name="form.projectType" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th class="required">
                                プロジェクト分類
                            </th>
                            <td>
                                <div class="form-group">
                                    <n:set var="projectClassList" value="<%= ProjectClass.values() %>"/>
                                    <n:select name="form.projectClass"
                                              listName="projectClassList"
                                              elementValueProperty="code"
                                              elementLabelProperty="label"
                                              elementLabelPattern="$LABEL$"
                                              cssClass="form-control"/>
                                    <n:error errorCss="message-error" name="form.projectClass" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                プロジェクトマネージャー
                            </th>
                            <td>
                                <div class="form-group">
                                    <n:text name="form.projectManager" maxlength="64" cssClass="form-control width-300" errorCss="input-error"/>
                                    <n:error errorCss="message-error" name="form.projectManager" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                プロジェクトリーダー
                            </th>
                            <td>
                                <div class="form-group">
                                    <n:text name="form.projectLeader" maxlength="64" cssClass="form-control width-300" errorCss="input-error"/>
                                    <n:error errorCss="message-error" name="form.projectLeader" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th class="required">
                                顧客名
                            </th>
                            <td>
                                <div class="form-group">
                                  <n:text name="form.clientId" maxlength="10" readonly="true" cssClass="form-control input-label" tabindex="-1" id="client-id" />
                                  <n:text name="form.clientName" maxlength="64" readonly="true" cssClass="form-control  input-label" tabindex="-1" id="client-name" />
                                </div>
                                <n:forInputPage>
                                  <div class="btn-group-sm">
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#client-search-dialog"  class="btn btn-default btn-fab"><i class="material-icons">search</i></a>
                                    <a href="javascript:void(0)" class="btn btn-default btn-fab" id="client-remove"><i class="material-icons">remove</i></a>
                                  </div>
                                </n:forInputPage>
                                <n:error errorCss="message-error" name="form.clientId" />
                                <n:error errorCss="message-error" name="form.clientName" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                プロジェクト開始日
                            </th>
                            <td>
                                <div class="form-group">
                                  <n:set var="projectStartDate" name="form.projectStartDate" scope="page" />
                                  <n:text name="form.projectStartDate" nameAlias="form.date"
                                          value="${n:formatByDefault('dateTime', projectStartDate)}"
                                          cssClass="form-control datepicker" errorCss="input-error" />
                                    <n:error errorCss="message-error" name="form.projectStartDate" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                プロジェクト終了日
                            </th>
                            <td>
                                <div class="form-group">
                                  <n:set var="projectEndDate" name="form.projectEndDate" scope="page" />
                                  <n:text name="form.projectEndDate" nameAlias="form.date"
                                          value="${n:formatByDefault('dateTime', projectEndDate)}"
                                          cssClass="form-control datepicker" errorCss="input-error" />
                                    <n:error errorCss="message-error" name="form.projectEndDate" />
                                    <n:error errorCss="message-error" name="form.validProjectPeriod" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                備考
                            </th>
                            <td>
                                <div class="form-group">
                                    <n:textarea rows="5" cols="50" name="form.note" cssClass="form-control" errorCss="input-error"/>
                                    <n:error errorCss="message-error" name="form.note" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                売上高
                            </th>
                            <td>
                                <n:forInputPage>
                                <div class="form-group">
                                    <n:text name="form.sales" maxlength="9" cssClass="form-control width-200" errorCss="input-error" style="float:left" />
                                    <div style="display:table-cell;height:30px;vertical-align:bottom;">千円</div>
                                    <div style="clear:left;"><n:error errorCss="message-error" name="form.sales" /></div>
                                </div>
                                </n:forInputPage>
                                <n:forConfirmationPage>
                                  <n:write value="${n:format('number', form.sales, '###,###,### 千円')}" />
                                </n:forConfirmationPage>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                売上原価
                            </th>
                            <td>
                                <n:forInputPage>
                                <div class="form-group">
                                    <n:text name="form.costOfGoodsSold" maxlength="9" cssClass="form-control width-200" errorCss="input-error" style="float:left" />
                                    <div style="display:table-cell;height:30px;vertical-align:bottom;">千円</div>
                                    <div style="clear:left;"><n:error errorCss="message-error" name="form.costOfGoodsSold" /></div>
                                </div>
                                </n:forInputPage>
                                <n:forConfirmationPage>
                                  <n:write value="${n:format('number', form.costOfGoodsSold, '###,###,### 千円')}" />
                                </n:forConfirmationPage>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                販管費
                            </th>
                            <td>
                                <n:forInputPage>
                                <div class="form-group">
                                    <n:text name="form.sga" maxlength="9" cssClass="form-control width-200" errorCss="input-error" style="float:left" />
                                    <div style="display:table-cell;height:30px;vertical-align:bottom;">千円</div>
                                    <div style="clear:left;"><n:error errorCss="message-error" name="form.sga" /></div>
                                </div>
                                </n:forInputPage>
                                <n:forConfirmationPage>
                                  <n:write value="${n:format('number', form.sga, '###,###,### 千円')}" />
                                </n:forConfirmationPage>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                本社配賦
                            </th>
                            <td>
                                <n:forInputPage>
                                <div class="form-group">
                                    <n:text name="form.allocationOfCorpExpenses" maxlength="9" cssClass="form-control width-200" errorCss="input-error" style="float:left" />
                                    <div style="display:table-cell;height:30px;vertical-align:bottom;">千円</div>
                                    <div style="clear:left;"><n:error errorCss="message-error" name="form.allocationOfCorpExpenses" /></div>
                                </div>
                                </n:forInputPage>
                                <n:forConfirmationPage>
                                  <n:write
                                      value="${n:format('number', form.allocationOfCorpExpenses, '###,###,### 千円')}" />
                                </n:forConfirmationPage>
                            </td>
                        </tr>
                        <n:forConfirmationPage>
                            <tr>
                                <td>
                                    売上総利益
                                </td>
                                <td>
                                  <n:write value="${n:format('number', profit.grossProfit, '###,###,### 千円')}" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    配賦前利益
                                </td>
                                <td>
                                  <n:write
                                      value="${n:format('number', profit.profitBeforeAllocation, '###,###,### 千円')}" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    配賦前利益率
                                </td>
                                <td>
                                  <n:write
                                      value="${n:format('number', profit.profitRateBeforeAllocation, '##0.0 %')}" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    営業利益
                                </td>
                                <td>
                                  <n:write value="${n:format('number', profit.operatingProfit, '###,###,### 千円')}" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    営業利益率
                                </td>
                                <td>
                                  <n:write value="${n:format('number', profit.operatingProfitRate, '##0.0 %')}" />
                                </td>
                            </tr>
                        </n:forConfirmationPage>
                    </tbody>
                </table>
                <div class="title-nav page-footer">
                    <div class="button-nav">
                        <n:forInputPage>
                            <n:a href="/action/project/show/${project.projectId}" cssClass="btn btn-raised btn-default">戻る</n:a>
                            <n:submit value="削除" uri="/action/project/delete" id="bottomDeleteButton" cssClass="btn btn-raised btn-danger" allowDoubleSubmission="false" type="button" />
                            <n:submit value="更新" uri="/action/project/confirmOfUpdate" id="bottomUpdateButton" cssClass="btn btn-raised btn-success" type="button" />
                        </n:forInputPage>
                        <n:forConfirmationPage>
                            <n:submit value="入力へ戻る" uri="/action/project/backToEdit" id="bottomBackButton" cssClass="btn btn-raised btn-default" type="button" />
                            <n:submit value="確定" uri="/action/project/update" id="bottomSubmitButton" cssClass="btn btn-raised btn-success" allowDoubleSubmission="false" type="button" />
                        </n:forConfirmationPage>
                    </div>
                </div>
            </n:form>
        </section>
        <n:include path="/WEB-INF/view/common/footer.jsp" />

        <%-- 顧客検索 --%>
        <n:include path="/WEB-INF/view/client/index.jsp" />
    </body>
</html>
