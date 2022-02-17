find_by_account_id =
select
  *
from
  account_device_token
where
  account_id = :accountId

delete_by_account_id =
delete
from
  account_device_token
where
  account_id = :accountId

