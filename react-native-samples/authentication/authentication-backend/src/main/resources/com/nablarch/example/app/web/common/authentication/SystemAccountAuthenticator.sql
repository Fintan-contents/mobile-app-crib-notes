-- 失敗回数をリセットするSQL
RESET_FAILED_COUNT =
update SYSTEM_ACCOUNT
   set FAILED_COUNT = case when ? = 0 then FAILED_COUNT else 0 end,
       LAST_LOGIN_DATE_TIME = ?
 where USER_ID = ?

-- 失敗回数をインクリメント＆アカウントロックを行うSQL
UPDATE_FAILED_COUNT = 
update SYSTEM_ACCOUNT
   set FAILED_COUNT = ?,
       USER_ID_LOCKED = ?
 where USER_ID = ?
