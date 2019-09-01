$(function () {
  var $textField = $('#title');
  console.log($textField);
  // 処理の説明を入れてください
  //　例：ボタンが押されると、sub-titleがremoveされる。
  $("#removeButton").on("click", function () {
    $('.sub-title').remove();
  });
});