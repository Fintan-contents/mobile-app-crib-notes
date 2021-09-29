-------------------------------------------------------------------------------
-- 顧客名、業種による検索
-------------------------------------------------------------------------------
SEARCH_CLIENT =
SELECT
    CLIENT_ID,
    CLIENT_NAME,
    INDUSTRY_CODE
FROM
    CLIENT
WHERE
     $if (clientName) {CLIENT_NAME LIKE :%clientName%}
     AND $if (industryCode) {INDUSTRY_CODE = :industryCode}
$sort(sortId) {
    (clientIdAsc CLIENT_ID)
    (clientIdDesc CLIENT_ID DESC)
    (clientNameAsc CLIENT_NAME, CLIENT_ID)
    (clientNameDesc CLIENT_NAME DESC, CLIENT_ID DESC)
}

FIND_BY_CLIENT_ID =
SELECT
    CLIENT_ID,
    CLIENT_NAME,
    INDUSTRY_CODE
FROM
    CLIENT
WHERE
    CLIENT_ID = :clientId
