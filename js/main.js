$(document).ready(function () {

  // menu on screen 992
  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn_active');
    $('.menu').slideToggle(600).toggleClass('open');
    $('.nav').addClass('bg-green');
    $('body').toggleClass('overflow');
    if ($('.nav').hasClass('bg-green') && $('.menu').hasClass('open')) {
      $(".nav").addClass('bg-green');
    } else {
      setTimeout(function () {
        $(".nav").removeClass('bg-green');
      }, 500);
    }
  });

  // hover

  if ($(window).width() >= 1200) {
    $('.slider .slider__item').hover(function () {
      $(this).addClass('big-img');
      $(this).closest('a').siblings('a').removeClass('big-img');
    });
  }

});
