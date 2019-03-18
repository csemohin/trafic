(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        //CAROSAL ACTIVE  CASE STUDY
        $(".case-study-carosal").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: true,
            nav: false,
            autoplay:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 1
                },
                // breakpoint from 768 up
                768 : {
                    items: 2
                },
                 991 : {
                    items: 3
                }
            }
        });
        //        FOR LOGO
        $(".single-logo-carosal").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            autoplay:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 768 up
                768 : {
                    items: 3
                },
                // breakpoint from 768 up
                991 : {
                    items: 6
                }
            }
        });
        //FOR TESTOMONIAL
        $(".testomonial-carosal").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay:true,
        });
        $(".single-testomonial-carosal-2").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay:true,
        });
        //        FOR SLIDER
        $(".slide-carusal").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText:["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"],
            autoplay:true,
        });


        //        FOR MENU CLICK FUNCTION
        $(".menu-trigger").on('click', function(){
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shadu").addClass("active");
        });

        $(".menu-close, .off-canvas-menu-shadu").on('click', function(){
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shadu").removeClass("active");
        });


        //        FOR ACTIVE TESSOMONIAL

        $(".single-testomonial-content").hover(function(){
            $(".single-testomonial-content").removeClass('active');
            $(this).addClass('active');
        });
        //        FOR MAGNIFIC POPUP

//        $(".play-button").magnificPopup({
//            type: 'video'
//        });
        
//        for slick nav
        $("#traffic-menu").slicknav({
            prependTo :'#slik-btn',
        });


    });


    jQuery(window).load(function(){


    });


}(jQuery));	