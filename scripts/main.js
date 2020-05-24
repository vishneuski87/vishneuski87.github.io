$(document).ready(function () {

  $('.scroll-to-block').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-about').offset().top
    }, 2000);
  });

  $('.scroll-to-block').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-about-us').offset().top
    }, 2000);
  });


});
