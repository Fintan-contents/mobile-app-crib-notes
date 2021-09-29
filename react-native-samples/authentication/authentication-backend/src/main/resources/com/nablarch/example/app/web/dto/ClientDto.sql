-------------------------------------------------------------------------------
-- 顧客名、業種による検索
-------------------------------------------------------------------------------
SEARCH_CLIENT =
SELECT
    CLIENT_ID,
    CLIENT_NAME,
    CLIENT.INDUSTRY_CODE,
    INDUSTRY_NAME
FROM
    CLIENT INNER JOIN INDUSTRY ON CLIENT.INDUSTRY_CODE = INDUSTRY.INDUSTRY_CODE
WHERE
     $if (clientName) {CLIENT_NAME LIKE :%clientName%}
     AND $if (industryCode) {CLIENT.INDUSTRY_CODE = :industryCode}
$sort(sortId) {
    (clientIdAsc CLIENT_ID)
    (clientIdDesc CLIENT_ID DESC)
    (clientNameAsc CLIENT_NAME, CLIENT_ID)
    (clientNameDesc CLIENT_NAME DESC, CLIENT_ID DESC)
}