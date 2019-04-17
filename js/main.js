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
function initMap() {
  // The location of Uluru
  var uluru = {lat: 48.8878223, lng: 24.1620070};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
};