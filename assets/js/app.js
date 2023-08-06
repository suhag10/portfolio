'use strict'; // JQuery
$(document).ready(function() {

    // Sticky Menu 
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $("#menu_sticky").removeClass("sticky");
        } else {
            $("#menu_sticky").addClass("sticky");
        }
    });


    // Sidebar slider
    $(".sidebar__toggler-btn").on("click", function () {
        $(".sidebar__area").addClass("sidebar-opened");
        // $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
        $(".sidebar__area").removeClass("sidebar-opened");
        // $(".body-overlay").removeClass("opened");
    });


    // nav_menus active button class
    $(".nav_menus > li").on('click', function() {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        preventDefault();
    });
    
    
    // Scroll Top
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="fa-duotone fa-circle-arrow-up fa-2xl"></i>', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });

    // Isotop
    $('.grid').imagesLoaded( function() {

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        });

        // filter items on button click
        $('.button__group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // masonry active button class
        $('.button__group > button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        
    });

    // data - background
    $("[data-background]").each(function(){
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // data - width
    $("[data-width]").each(function(){
        $(this).css("width", $(this).attr("data-width"));
    });
    
    // data - color
    $(".theme-color-btn").each(function(){
        $(this).css("background-color", '#' + $(this).val());
    });

    // copy-to-clipboard-button
    $(".copy-to-clipboard-button").each(function(){
        $(this).html("<i class='fa-light fa-clipboard'></i>");
    });    

    
    //slick slider
    $('.testimonial_active').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnFocus: false,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
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


    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // WOW()
    new WOW().init();

    
});


