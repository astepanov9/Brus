$(function () {

  // Preloader
  $(window).on('load', function () {
    $('.preloader').fadeOut().end().delay(1000).fadeOut('slow');
  });

  // Slider
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })

  // Header-burger
  $('.burger-menu').click(function (e) {
    e.preventDefault();
    $('.navigation').toggleClass('show');
  });

  if ($(window).width() < 768) {
    $('.navigation li a').click(function (e) {
      e.preventDefault();
      $('.navigation').toggleClass('show');
    });
  };
  

});