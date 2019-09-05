$(function () {
  // var $textField = $('#title');
  // console.log($textField);
  // 処理の説明を入れてください
  //　例：ボタンが押されると、sub-titleがremoveされる。

  //ボタンの並び順で記述

  $("#hideButton").on("click",function(){
    $('#mother').hide();
  });

  $("#showButton").on("click",function(){
    $('#mother').show();
  });


//　ボタンが押されると、sub-titleがremoveされる。
  $("#removeButton").on("click", function () {
    $('.sub-title').remove();
});

//ボタンが押されると、fadeinされる

 $("#fadeInButton").on("click",function(){
   $('#sister').fadeIn();
 });

  //ボタンが押されると、grandfatherがfadeOutされる。
  $("#fadeOutButton").on("click",function(){
    $('#grandfather').fadeOut();
  });

  //ボタンが押されると、「こんてんつ」が追加される。
  $("#appendButton").on("click",function(){
    $('#contents').append('<p>こんてんつこんてんつこんてんつこんてんつ</p>');
  });
})