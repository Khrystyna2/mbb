$(document).ready(function () {

  // menu on screen 992
  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn_active');
    $('.menu').slideToggle(600).toggleClass('open');
    $('.nav').addClass('bg-green');
    $('body').toggleClass('overflow');
    if($('.nav').hasClass('bg-green') && $('.menu').hasClass('open')) {
      $(".nav").addClass('bg-green');
    } else {
      setTimeout(function(){
        $(".nav").removeClass('bg-green');
     }, 500);
    }
  });

});
