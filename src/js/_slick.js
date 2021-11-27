// import * as slickJs from 'slick-carousel/slick/slick.js';
// import * as slickThemeCss from 'slick-carousel/slick/slick-theme.css';
// import * as slickCSS from 'slick-carousel/slick/slick.css';

$(document).ready(function () {
  $('.partners__list').slick({
    arrows: false,
    autoplay: false,

    infinite: false,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: true,

          adaptiveHeight: true,
          centerMode: true,
          variableWidth: true,
          infinite: true,

          autoplay: true,
          autoplaySpeed: 2500,

          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,

          adaptiveHeight: true,
          centerMode: true,
          variableWidth: true,
          infinite: true,

          autoplay: true,
          autoplaySpeed: 2500,

          slidesToShow: 2,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(document).ready(function () {
  $('.wrapper-offers-img').slick({
    adaptiveHeight: true,

    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    fade: true,

    cssEase: 'linear',
  });
});
