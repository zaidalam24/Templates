(function($) {



    "use strict";



    //Hide Loading Box (Preloader)

    function handlePreloader() {

        if ($('.preloader').length) {

            $('.preloader').delay(200).fadeOut(500);

        }

    }



    //Scroll to Top

    function headerStyle() {

        if ($('.main-header').length) {

            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');

            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.addClass('open');

            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.removeClass('open');

            }

        }

    }



    headerStyle();



    // Scroll to Target

    if ($('.scroll-to-target').length) {

        $(".scroll-to-target").on('click', function() {

            var target = $(this).attr('data-target');

            // animate

            $('html, body').animate({

                scrollTop: $(target).offset().top

            }, 1000);



        });

    }



    //Add One Page nav

    if ($('.scroll-nav').length) {

        $('.scroll-nav').onePageNav();

    }





    // Elements Animation

    if ($('.wow').length) {

        var wow = new WOW({

            mobile: false

        });

        wow.init();

    }





    //Mobile Nav Hide Show

    if ($('.mobile-menu').length) {



        $('.mobile-menu .menu-box').mCustomScrollbar();



        var mobileMenuContent = $('.main-header .menu-area .main-menu').html();

        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        $('.sticky-header .main-menu').append(mobileMenuContent);



        //Dropdown Button

        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {

            $(this).toggleClass('open');

            $(this).prev('ul').slideToggle(500);

        });

        //Dropdown Button

        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {

            $(this).prev('.megamenu').slideToggle(900);

        });

        //Menu Toggle Btn

        $('.mobile-nav-toggler').on('click', function() {

            $('body').addClass('mobile-menu-visible');

        });



        //Menu Toggle Btn

        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {

            $('body').removeClass('mobile-menu-visible');

        });

    }



    $(document).ready(function() {
        var owl = $('.innerpages');
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 0,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 0,
            autoplaySpeed: 7000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });

    });


    /* ==========================================================================

       When document is scrolling, do

       ========================================================================== */



    $(window).on('scroll', function() {

        headerStyle();

    });



    /* ==========================================================================

       When document is loading, do

       ========================================================================== */



    $(window).on('load', function() {



        $('#handle-preloader').fadeOut();

        $('.preloader').delay(350).fadeOut('slow');

        $('body').delay(350).css({ 'overflow': 'visible' });

    });



})(window.jQuery);