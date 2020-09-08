/*global $ , jQuery , alert*/

$(function () {

  "use strict";

  //

  $('.nav li a').click(function (e) {
    if ($(this).attr("data-scoll")) {
      e.preventDefault();
      $('html , body').animate({
        scrollTop: $("#" + $(this).data('scoll')).offset().top + 1
      }, 1000);      
    }
  });

  //

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbar-default');
      $('.navbar-brand').find('img').attr('src', 'img/logo2.png');

    } else {
      $('.navbar').removeClass('navbar-default');
      $('.navbar-brand').find('img').attr('src', 'img/logo.png');
    }
  });


  //

  $('.nav li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  });

  //


  $(window).scroll(function () {

    // Sync Navbar Links With Section

    $('.block').each(function () {

      if ($(window).scrollTop() > $(this).offset().top) {

        var BlockID = $(this).attr('id');

        $('.nav li').removeClass('active');

        $('.nav li a[data-scoll=' + BlockID + ']').parent().addClass('active');

      }else{

      }
    });

  });



    if ($('.logo-slides').length) {
      $(".logo-slides").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 10,
        nav: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          767: {
            items: 3
          },
          991: {
            items: 4
          },
          1199: {
            items: 5
          }
        }

      });
    }


    // if (location.reload()) {
    //   $(window).scroll(function() {
    //     $(window).scrollTop()
    //   })
    // }

}); //End Of jQuery
