'use strict';
// main js
jQuery(document).ready(function($){

    // nav_menu active button class
    $('#nav_menu > li').on('click', function() {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        preventDefault();
    });

    // Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus">+</i>'],
	});

    // Sidebar Js
    $("#sidebar-toggle").on("click", function () {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:800,
        autoplayHoverPause:true,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:3
			},
			1400:{
				items:3
			}
		}
    });

    // Sticky Menu 
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $("#menu-sticky").removeClass("sticky");
        } else {
            $("#menu-sticky").addClass("sticky");
        }
    });

    
    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp',  // Element ID
        topDistance: '300',      // Distance from top before showing element (px)
        topSpeed: 300,           // Speed back to top (ms)
        animation: 'fade',       // Fade, slide, none
        animationInSpeed: 200,   // Animation in speed (ms)
        animationOutSpeed: 200,  // Animation out speed (ms)
        scrollText: '<i class="fa-solid fa-circle-chevron-up"></i>',  // Text for element
        activeOverlay: false,    // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // isotop
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

    // typed
    var typed = new Typed('.auto_type', {
        strings: [
            'fiverr.com/suhag94', 
            'linkedin.com/in/suhag11', 
            'twitter.com/suhag41',
            'instagram.com/suhagDeveloper',
            'facebook.com/suhagDeveloper',
            'github.com/suhag10',
            'youtube.com/@suhag10'
        ],
        typeSpeed: 50,
        backSpeed: 100,
        loop: true
    });


    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // WOW()
    new WOW().init();

});

