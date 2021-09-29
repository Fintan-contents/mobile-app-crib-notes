$(function() {
  //ページングタグにより自動生成される要素を削除している
  $('.true').remove();
});

$(function() {
  // ソート条件
  $("#sortKey,#sortDir").change(function() {
      $(this).parents('form').submit();
  });
});

$(function () {
  var $clientId = $('#client-id');
  var $clientName = $('#client-name');
  $('#client-remove').click(function () {
    $clientId.val('');
    $clientName.val('');
  })
});