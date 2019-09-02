$(function () {
  // var $textField = $('#title');
  // console.log($textField);
  // 処理の説明を入れてください
  //　例：ボタンが押されると、sub-titleがremoveされる。
  $("#removeButton").on("click", function () {
    $('.sub-title').remove();
});

  //ボタンが押されると、grandfatherがfadeOutされる。
  $("#fadeOutButton").on("click",function(){
    $('#grandfather').fadeOut();
  });

  $("#hideButton").on("click",function(){
    $('#mother').hide();
  });

  $("#showButton").on("click",function(){
    $('#mother').show();
  });
// $(function (){
  
//   });
// });
})