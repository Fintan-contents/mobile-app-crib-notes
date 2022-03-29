find_all =
SELECT
  *
FROM
  sandbox_todo
$sort(sortId) {
  (id_asc     id ASC)
  (id_desc    id DESC)
  (title_asc  title ASC)
  (title_desc title DESC)
  (default    id)
}

find_all_from_cursor =
SELECT
  *
FROM
  sandbox_todo
WHERE
  $if (todoId) {id > :todoId}
ORDER BY
  id
