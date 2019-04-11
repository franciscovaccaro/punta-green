// Empty JS for your own code to be here

$(document).ready(function () {
  $('.landing-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    fade: true,
  });

  $('.apartment1-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand'
  });

  $('.apartment2-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
  });

  $('.amenities-slider').slick({
    centerMode: true,
    arrows: false,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


$(".hamburger").on("click", function (e) {
  $hamburger.toggleClass("is-active");
});

var selector = ('.navbar-nav li')

$(selector).on('click', function () {
  $(selector).removeClass('active');
  $(this).addClass('active');
})

$(function () {
  $('li').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(e.target).attr("href")).offset().top - 50
    }, 1000);
  });
});

$(document).ready(function () {
  $('#departamentos').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
  });
  $('#servicios').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
  });
  $('.contact-form').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: 100
  });
});


