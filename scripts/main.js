$(document).ready(function () {
  $('.scroll-to-block').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.block-headers-about').offset().top
    }, 2000);
  });
  $('.navigation-list-link-main').on('click', (event) => {
    let windowWidth = $(window).width();
    let navActive = ($('.navigation').hasClass("active"));
    if (navActive && windowWidth <= 800) {
      $('.navigation').toggleClass('active');
      $('.burger-icon-item').toggleClass('rotate');
    }
    $('html, body').animate({
      scrollTop: $('.header-wrapper').offset().top
    }, 'fast');
  });

  $('.navigation-list-link-about').on('click', (event) => {
    let windowWidth = $(window).width();
    let navActive = ($('.navigation').hasClass("active"));
    if (navActive && windowWidth <= 800) {
      $('.navigation').toggleClass('active');
      $('.burger-icon-item').toggleClass('rotate');
    }
    $('html, body').animate({
      scrollTop: $('.block-headers-about').offset().top
    }, 'fast');
  });

  $('.navigation-list-link-service').on('click', (event) => {
    let windowWidth = $(window).width();
    let navActive = ($('.navigation').hasClass("active"));
    if (navActive && windowWidth <= 800) {
      $('.navigation').toggleClass('active');
      $('.burger-icon-item').toggleClass('rotate');
    }
    $('html, body').animate({
      scrollTop: $('.block-headers-service').offset().top
    }, 'fast');
  });

  $('.navigation-list-link-trucks').on('click', (event) => {
    let windowWidth = $(window).width();
    let navActive = ($('.navigation').hasClass("active"));
    if (navActive && windowWidth <= 800) {
      $('.navigation').toggleClass('active');
      $('.burger-icon-item').toggleClass('rotate');
    }
    $('html, body').animate({
      scrollTop: $('.block-headers-trucks').offset().top
    }, 'fast');
  });

  $('.navigation-list-link-contacts').on('click', (event) => {
    let windowWidth = $(window).width();
    let navActive = ($('.navigation').hasClass("active"));
    if (navActive && windowWidth <= 800) {
      $('.navigation').toggleClass('active');
      $('.burger-icon-item').toggleClass('rotate');
    }
    $('html, body').animate({
      scrollTop: $('.block-headers-contacts').offset().top
    }, 'fast');
  });

  $('.scroll-to-top').on('click', (event) => {
    $('html, body').animate({
      scrollTop: $('.header-wrapper').offset().top
    }, 'fast');
  });

  $(document).on('click', 'ul li', function () {
    $(this).addClass('navigation-list-item-active').siblings().removeClass('navigation-list-item-active')
  });

  $('#burger').on('click', () => {
    $('.navigation').toggleClass('active');
    $('.burger-icon-item').toggleClass('rotate');
  });

});
