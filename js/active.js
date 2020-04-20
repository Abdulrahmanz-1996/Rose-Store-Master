//Modal Script Start

$('.sign-in-modal').click(function() {
      $('.sign-in-modal').removeClass('active');
      $('.inner--sign-in-modal').removeClass('active');
      });

      $('.inner--sign-in-modal').click(function(e){
        e.stopPropagation();
      })

      $('.close-login').click(function(){
        $('.sign-in-modal').removeClass('active');
        $('.inner--sign-in-modal').removeClass('active');
      })

      /* MODAL */
      $('.modal-sign').click(function(){
        $('.sign-in-modal').addClass('active');
        $('.inner--sign-in-modal').addClass('active');
        setTimeout(function(){
          $('.overlay').removeClass('sign-up-side');
          $('.overlay').addClass('sign-in-side');
          $('.tab-sign-up').removeClass('active');
          $('.tab-sign-in').addClass('active');
          $('.content-sign-up').removeClass('active');
          $('.content-sign-in').addClass('active');
        }, 400);
      });

      $('.inner--sign-in-modal .close-modal').click(function(){
        $('.sign-in-modal').removeClass('active');
        $('.inner--sign-in-modal').removeClass('active');
      });

      $('.val-info .tab').click(function(){
        if($(this).hasClass('tab-sign-in') == true){
          $('.overlay').removeClass('sign-up-side');
          $('.overlay').addClass('sign-in-side');
          $('.tab-sign-up').removeClass('active');
          $('.tab-sign-in').addClass('active');
          $('.content-sign-up').removeClass('active');
          $('.content-sign-in').addClass('active');
        } else {
          $('.overlay').removeClass('sign-in-side');
          $('.overlay').addClass('sign-up-side');
          $('.tab-sign-in').removeClass('active');
          $('.tab-sign-up').addClass('active');
          $('.content-sign-in').removeClass('active');
          $('.content-sign-up').addClass('active');
        }
      });

      //Greetings
      $('.input-firstname').keyup(function(){
        var getText = $(this).val();
        console.log(getText);
        $('.greetings-name').html(getText);
      });

      $('.input-lastname').keyup(function(){
        var getText = $(this).val();
        console.log(getText);
        $('.greetings-surname').html(getText);
      });


(function ($) {
    'use strict';

    var $window = $(window);


//Modal Script End

    // Products Script Start
    var proCata = $('.rose-pro-catagory');
    var singleProCata = ".single-products-catagory";

    if ($.fn.imagesLoaded) {
        proCata.imagesLoaded(function () {
            proCata.isotope({
                itemSelector: singleProCata,
                percentPosition: true,
                masonry: {
                    columnWidth: singleProCata
                }
            });
        });
    } 

    // :: 2.1 Search Active Code
    var amadoSearch = $('.search-nav');
    var searchClose = $('.search-close');

    amadoSearch.on('click', function () {
        $('body').toggleClass('search-wrapper-on');
    });

    searchClose.on('click', function () {
        $('body').removeClass('search-wrapper-on');
    });

    // :: 2.2 Mobile Nav Active Code
    var amadoMobNav = $('.rose-navbar-toggler');
    var navClose = $('.nav-close');

    amadoMobNav.on('click', function () {
        $('.header-area').toggleClass('bp-xs-on');
    });

    navClose.on('click', function () {
        $('.header-area').removeClass('bp-xs-on');
    });

    // :: 3.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: 4.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
        }
    });

    // :: 5.0 Nice Select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: 6.0 Magnific Active Code
    if ($.fn.magnificPopup) {
        $('.gallery_img').magnificPopup({
            type: 'image'
        });
    }

    // :: 7.0 Nicescroll Active Code
    if ($.fn.niceScroll) {
        $(".cart-table table").niceScroll();
    }

    // :: 8.0 wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 10.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 11.0 Slider Range Price Active Code
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    });

})(jQuery);