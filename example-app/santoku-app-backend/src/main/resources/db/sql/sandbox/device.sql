delete_by_device_tokens =
delete
from
  account_device_token
where
  device_token in (:deviceTokens[])
