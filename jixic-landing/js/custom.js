(function($) {

    "use strict";




    $(document).ready(function() {
        $(window).scroll(function() {
            //Method 1: Using addClass and removeClass
            //if ($(document).scrollTop() > 50) {
            //    $('.navbar-default').addClass('navbar-shrink');
            //} else {
            //    $('.navbar-default').removeClass('navbar-shrink');
            //}
            //Method 2: Using toggleClass
            $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50)
        });
    });



    /*revolution-setting-js--------------------------*/

    /* https://learn.jquery.com/using-jquery-core/document-ready/ */
    jQuery(document).ready(function() {

        /* initialize the slider based on the Slider's ID attribute from the wrapper above */
        jQuery('#slider-1').show().revolution({
            parallax: {
                type: 'mouse+scroll',
                origo: 'slidercenter',
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40,
                    45, 46, 47, 48, 49, 50, 51, 55
                ],
                disable_onmobile: 'off'
            },

            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'auto',
            /* RESPECT ASPECT RATIO */
            minHeight: '650',
            responsiveLevels: [1600, 1170, 778, 480],
            visibilityLevels: [1600, 1170, 778, 480],
            gridwidth: [1600, 1170, 778, 480],
            gridheight: [940, 940, 900, 700],

            /* basic navigation arrows and bullets */

            /* basic navigation arrows and bullets */
            navigation: {

                spinner: "off",
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    disableFocusListener: false,
                },


            }
        });
    });

    /*revolution-setting-js--------------------------*/


})(window.jQuery);