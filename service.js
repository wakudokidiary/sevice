$(function() {

  $('#foot').click(function(){
    $(this).fadeOut();
  });

  $('#foot').click(function(){
    $('#tsuma').fadeIn();
  });

  // ここからメニュー
  $('#bar').click(function(){
    $('#menu').slideDown();
  });

  $('#bar').click(function(){
    $(this).fadeOut();
  });

  $('#batsu').click(function(){
    $('#menu').slideUp();
  });



  $('#batsu').click(function(){
    $('#bar').fadeIn();
  });

// ここまでメニュー




});
