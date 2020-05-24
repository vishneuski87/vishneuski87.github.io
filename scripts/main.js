$(document).ready(function () {

  $('.scroll-to-block').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-about').offset().top
    }, 1800);
  });

  $('.navigation-list-link-about').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-about').offset().top
    }, 1800);
  });
  $('.navigation-list-link-service').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-service').offset().top
    }, 2000);
  });
  $('.navigation-list-link-trucks').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-trucks').offset().top
    }, 2200);
  });
  $('.navigation-list-link-contacts').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-contacts').offset().top
    }, 2400);
  });
  $('.scroll-to-top').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.header-wrapper').offset().top
    }, 2000);
  });

  $(document).on('click', 'ul li', function() {
    $(this).addClass('navigation-list-item-active').siblings().removeClass('navigation-list-item-active')
  });
});
