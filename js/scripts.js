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
    autoplay: true,
    autoplaySpeed: 3000,
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

  $('#departamentos').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 300
  });
  $('#servicios').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 300
  });
  $('#amenities').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 300
  });
  $('.contact-form').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: 300
  });
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
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

$(function () {
  $('.cta-button').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(e.target).attr("href")).offset().top - 50
    }, 1000);
  });
});

$(document).ready(function () {
  var offset = 500;
  var duration = 700;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }
  });

  $('.back-to-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false; 
  })
});

$(document).ready(function() {
  var options = {
      stringsElement: '#typed-strings',
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: false
  }

  var typed = new Typed("#typed", options);
});
